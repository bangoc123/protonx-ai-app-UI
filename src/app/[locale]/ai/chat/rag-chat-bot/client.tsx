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
import { postRAGQuestionsApiCall } from '@/apiCalls/ai-demos/postRAGQuestionsApiCall';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layouts/Subheader/Subheader';


const ChatBotClient = () => {
	const [listQuestions, setListQuestions] = useState([
		{
			role: "model",
			parts: [
				{
					text: 'Xin chào. Tôi là shop điện thoại [ABC], bạn cần chúng tôi tư vấn về sản phẩm gì?',
				}
			]
		},
	] as GoogleChat[]);

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
						parts: [
							{
								text: question,
							}
						],
					},
				]);
				postRAGQuestionsApiCall({
					dataToPost: [
						...listQuestions,
						{
							role: USER,
							parts: [
								{
									text: question,
								}
							],
						},
					],
				})
					.then((res) => {
						if (res?.status === 200) {
							setAskGptApiStatus(SUCCESSFUL);
							if (!stopGeneratingRef.current) {
								setListQuestions((prev) => {
									return [...prev, res?.data] as GoogleChat[];
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

	const generateChat = (questions: GoogleChat[]) => {
		let content = <div />;
		if (questions && questions?.length > 0) {
			content = (
				<AIChatContainerCommon>
					{questions?.map((question, index) => {
						return (
							<AIChatItemContainerCommon
								key={question?.parts?.[0].text}
								content={question?.parts?.[0].text}
								userName={question?.role === USER ? 'You' : 'AI'}
								isAnswer={question?.role === "model" || question?.role === "model"}
							/>
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
				<SubheaderLeft>
					<img src='https://storage.googleapis.com/protonx-cdn/IOExtended2024-logos-07%20(1).png' width="150" />
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						variant='solid'
						onClick={() =>
							setListQuestions([
								{
									role: "model",
									parts: [
										{
											text: 'Bạn cần tôi giúp gì?',
										}
									],
									
								},
							])
						}
						icon='HeroPlus'>
						New Chat
					</Button>
				</SubheaderRight>
			</Subheader>
			<Container 
				className='flex shrink-0 grow basis-auto flex-col pb-0' 
				style={{fontSize: '16px', fontWeight: "500"}}>
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
							placeholder='Hỏi cửa hàng gì đó'
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

export default ChatBotClient;
