'use client';

import React, { useRef, useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import { useFormik } from 'formik';
import Container from '@/components/layouts/Container/Container';
import AIChatContainerCommon from '@/app/[locale]/ai/_common/AIChatContainer.common';
import AIChatItemContainerCommon from '@/app/[locale]/ai/_common/AIChatItemContainer.common';
import Button from '@/components/ui/Button';
import LoaderDotsCommon from '@/components/LoaderDots.common';
import AIChatInputContainerCommon from '@/app/[locale]/ai/_common/AIChatInputContainer.common';
import FieldWrap from '@/components/form/FieldWrap';
import Input from '@/components/form/Input';
import { ASSISTANT, CREATED, FAILED, PENDING, SUCCESSFUL, SYSTEM, USER } from '@/constant';
import Subheader, { SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import { generateImageApiCall } from '@/apiCalls/ai-demos/generateImageApiCall';
import Image from 'next/image';
import { generateImageVariationApiCall } from '@/apiCalls/ai-demos/generateImageVariationApiCall';

const ChatPhotoClient = () => {
	const [listQuestions, setListQuestions] = useState([
		{
			role: SYSTEM,
			content: 'What would you like me to draw?',
			base64: '',
		},
	] as IChatImage[]);

	const [askGptApiStatus, setAskGptApiStatus] = useState(CREATED);
	const stopGeneratingRef = useRef(false);

	const formik = useFormik({
		onSubmit(): void | Promise<never> {
			return undefined;
		},
		initialValues: {
			textField: '',
		},
	});

	const generateVariationOnClick = async (base64: string) => {
		try {
			stopGeneratingRef.current = false;
			if (base64) {
				setListQuestions((prev) => {
					return [
						...prev,
						{
							role: USER,
							content: 'Create variation',
						},
					];
				});
				setAskGptApiStatus(PENDING);
				generateImageVariationApiCall({
					dataToPost: {
						base64,
					},
				})
					.then((res) => {
						if (res?.status === 200) {
							setAskGptApiStatus(SUCCESSFUL);
							setListQuestions((prev) => {
								return [
									...prev,
									{
										role: ASSISTANT,
										base64: res?.data?.b64_json,
									} as IChatImage,
								];
							});
						}
					})
					.catch((e) => {
						setAskGptApiStatus(FAILED);
					});
			}
		} catch {
			setAskGptApiStatus(FAILED);
		}
	};

	const sendQuestionOnClick = (question: string) => {
		try {
			stopGeneratingRef.current = false;
			if (question) {
				formik.resetForm();
				setAskGptApiStatus(PENDING);
				setListQuestions([
					...listQuestions,
					{
						role: USER,
						content: question,
					},
				]);
				generateImageApiCall({
					dataToPost: {
						prompt: question,
					},
				})
					.then((res) => {
						if (res?.status === 200) {
							setAskGptApiStatus(SUCCESSFUL);
							if (!stopGeneratingRef.current) {
								setListQuestions((prev) => {
									return [
										...prev,
										{
											role: ASSISTANT,
											base64: res?.data?.b64_json,
										} as IChatImage,
									];
								});
							}
						}
					})
					.catch((e) => {
						setAskGptApiStatus(FAILED);
					});
			}
		} catch {
			// FIXME
		}
	};

	const handleDownloadImage = (base64: string) => {
		try {
			const link = document.createElement('a');
			link.href = `data:image/jpeg;base64,${base64}`;
			link.download = 'image.jpg';
			link.click();
		} catch (e) {
			// FIXME
		}
	};

	const generateChat = (questions: IChatImage[]) => {
		let content = <div />;
		if (questions && questions?.length > 0) {
			content = (
				<AIChatContainerCommon>
					{questions?.map((question, index) => {
						return (
							<AIChatItemContainerCommon
								key={question?.content}
								content={question?.content}
								userName={question?.role === USER ? 'You' : 'AI'}
								isAnswer={
									question?.role === SYSTEM || question?.role === ASSISTANT
								}>
								{question?.base64 && (
									<div className='grid grid-cols-12 gap-4'>
										<div className='col-span-12 lg:col-span-8'>
											<div className='col-span-12 lg:col-span-8'>
												<Image
													src={`data:image/jpeg;base64,${question?.base64}`}
													alt='ai-image'
													className='rounded-lg'
													width={256}
													height={256}
												/>
											</div>
										</div>
										<div className='col-span-full flex flex-wrap gap-4'>
											<Button
												icon='HeroArrowDownTray'
												variant='solid'
												onClick={() =>
													handleDownloadImage(question?.base64 as string)
												}>
												Export
											</Button>
											<Button
												icon='HeroDocumentDuplicate'
												variant='solid'
												onClick={() =>
													generateVariationOnClick(
														question?.base64 as string,
													)
												}
												color='zinc'>
												Create variation
											</Button>
											{/* <Button
												icon='HeroAdjustmentsHorizontal'
												variant='solid'
												color='zinc'>
												Adjust
											</Button>
											<Button
												icon='HeroArrowsPointingOut'
												variant='solid'
												color='zinc'>
												Enhance
											</Button> */}
										</div>
									</div>
								)}
							</AIChatItemContainerCommon>
						);
					})}
					{askGptApiStatus === PENDING && !stopGeneratingRef.current && (
						<AIChatItemContainerCommon isAnswer>
							<div className='grid grid-cols-12 items-center'>
								<div className='col-auto flex'>
									<LoaderDotsCommon />
								</div>
								<div className='col-auto flex'>
									<Button
										className='whitespace-nowrap !px-0'
										size='xs'
										color='red'
										onClick={() => {
											stopGeneratingRef.current = true;
											setAskGptApiStatus(FAILED);
										}}
										icon='HeroStop'>
										Stop Generating
									</Button>
								</div>
							</div>
						</AIChatItemContainerCommon>
					)}
				</AIChatContainerCommon>
			);
		}
		return content;
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e?.key === 'Enter' && !e?.shiftKey && formik.values?.textField) {
			sendQuestionOnClick(formik.values?.textField);
		}
	};

	return (
		<PageWrapper>
			<Subheader>
				<SubheaderRight>
					<Button
						variant='solid'
						onClick={() =>
							setListQuestions([
								{
									role: SYSTEM,
									content: 'What would you like me to draw?',
								},
							])
						}
						icon='HeroPlus'>
						New Chat
					</Button>
				</SubheaderRight>
			</Subheader>
			<Container className='flex shrink-0 grow basis-auto flex-col pb-0'>
				{generateChat(listQuestions)}
				<AIChatInputContainerCommon>
					<FieldWrap
						firstSuffix={
							<Button
								icon='HeroPlus'
								variant={formik.values.textField ? 'default' : 'solid'}
								rounded='rounded'
								className='me-2'
								aria-label='Upload file'
							/>
						}
						lastSuffix={
							formik.values?.textField ? (
								<Button
									className='ms-2'
									variant='solid'
									onClick={() => sendQuestionOnClick(formik.values?.textField)}
									rounded='rounded'
									icon='HeroPaperAirplane'>
									Send
								</Button>
							) : (
								<Button
									className='ms-2'
									icon='HeroMicrophone'
									aria-label='Speaking'
								/>
							)
						}>
						<Input
							id='textField'
							name='textField'
							dimension='xl'
							placeholder='Ask something'
							onChange={formik.handleChange}
							value={formik.values.textField}
							onKeyDown={handleKeyDown}
						/>
					</FieldWrap>
				</AIChatInputContainerCommon>
			</Container>
		</PageWrapper>
	);
};

export default ChatPhotoClient;
