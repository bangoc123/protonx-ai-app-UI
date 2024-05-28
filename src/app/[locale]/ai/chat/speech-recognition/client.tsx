'use client';

import React, { useRef, useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import { useReactMediaRecorder } from 'react-media-recorder';
import Container from '@/components/layouts/Container/Container';
import AIChatContainerCommon from '@/app/[locale]/ai/_common/AIChatContainer.common';
import AIChatItemContainerCommon from '@/app/[locale]/ai/_common/AIChatItemContainer.common';
import Button from '@/components/ui/Button';
import LoaderDotsCommon from '@/components/LoaderDots.common';
import { ASSISTANT, CREATED, FAILED, PENDING, SUCCESSFUL, SYSTEM, USER } from '@/constant';
import Subheader, { SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import WaveSurferPlayer from '@/components/WaveSurferPlayer';
import { postSpeechToTextApiCall } from '@/apiCalls/ai-demos/postSpeechToTextApiCall';
import Icon from '@/components/icon/Icon';

const SpeechRecognitionClient = () => {
	const [listQuestions, setListQuestions] = useState([
		{
			role: SYSTEM,
			content: 'Speak into your microphone, and I will transcribe the audio',
		},
	] as IChatAudio[]);

	const [askGptApiStatus, setAskGptApiStatus] = useState(CREATED);

	const onRecordingStop = (blobUrl: string, blob: Blob) => {
		try {
			setAskGptApiStatus(PENDING);
			setListQuestions((prev) => {
				return [
					...prev,
					{
						role: USER,
						url: blobUrl,
					},
				];
			});
			const fileReader = new FileReader();
			fileReader.readAsArrayBuffer(blob);
			fileReader.onload = () => {
				const buffer = Buffer.from(new Uint8Array(fileReader.result as ArrayBuffer));
				postSpeechToTextApiCall({
					dataToPost: {
						buffer,
					},
				})
					.then((res) => {
						if (res?.status === 200) {
							setAskGptApiStatus(SUCCESSFUL);
							const result = res?.data as { text: string };
							setListQuestions((prev) => {
								return [
									...prev,
									{
										role: ASSISTANT,
										content: result?.text,
									},
								];
							});
						}
					})
					.catch((e) => {
						setAskGptApiStatus(FAILED);
					});
			};
			fileReader.onerror = () => {
				setAskGptApiStatus(FAILED);
			};
		} catch (e) {
			setAskGptApiStatus(FAILED);
		}
	};
	const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
		audio: true,
		video: false,
		onStop: (blobUrl, blob) => {
			onRecordingStop(blobUrl, blob);
		},
	});
	const [isRecording, setIsRecording] = useState(false);

	const stopGeneratingRef = useRef(false);

	const recordingOnClick = () => {
		if (isRecording) {
			stopRecording();
		} else {
			startRecording();
		}
		setIsRecording((prev) => !prev);
	};

	const generateChat = (questions: IChatAudio[]) => {
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
								{question?.url && (
									<div className='grid grid-cols-12 gap-4'>
										<div className='col-span-12 lg:col-span-8'>
											<WaveSurferPlayer url={question?.url} container='div' />
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
					{isRecording && (
						<AIChatItemContainerCommon isAnswer>
							<div className='grid grid-cols-12 items-center'>
								<div className='col-auto flex align-middle'>
									<LoaderDotsCommon />
								</div>
								<div className='col-auto flex'>
									<Button
										className='whitespace-nowrap !px-0'
										size='xs'
										color='red'
										onClick={recordingOnClick}
										icon='HeroStop'>
										Stop Recording
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
									content:
										'Speak into your microphone, and I will transcribe the audio',
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
				<div className='flex justify-center'>
					<Icon
						className='cursor-pointer'
						icon='HeroMicrophone'
						onClick={recordingOnClick}
						color={isRecording ? 'blue' : 'zinc'}
						aria-label='Speaking'
						size='text-6xl'
					/>
				</div>
			</Container>
		</PageWrapper>
	);
};

export default SpeechRecognitionClient;
