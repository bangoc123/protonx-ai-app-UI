"use client";

import React, { useRef, useState } from 'react';
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
import { postLangChainQuestionsApiCall } from '@/apiCalls/ai-demos/postLangChainQuestionsApiCall';

import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Subheader, { SubheaderRight, SubheaderLeft } from '@/components/layouts/Subheader/Subheader';

const ChatContainer = ({ sessionId }) => {
    const [listQuestions, setListQuestions] = useState([
        {
            role: SYSTEM,
            content: 'How would you like me to help you?',
        },
    ] as IChat[]);

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
						content: question,
					},
				]);
				postLangChainQuestionsApiCall({
					dataToPost: {
						sessionId, // Include session ID in the payload
						message: {
							role: USER,
							content: question,
						},
					},
				})
					.then((res) => {
						console.log('API Response:', res); // Debug log
						if (res?.status === 200) {
							setAskGptApiStatus(SUCCESSFUL);
							if (!stopGeneratingRef.current) {
								const newMessage = res?.data;
								setListQuestions((prev) => {
									return [...prev, newMessage] as IChat[];
								});
							
							}
						}
					})
					.catch((e) => {
						console.error('API call failed:', e);
						setAskGptApiStatus(FAILED);
					});
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

    const generateChat = (questions: IChat[]) => {
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
                                isAnswer={question?.role === SYSTEM || question?.role === ASSISTANT}
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
    );
};

const ChatBotClient = () => {
    return (
        <PageWrapper>
            <Subheader>
				<SubheaderLeft>
					<h3>Lang Chain with Session Demo</h3>
                </SubheaderLeft>
                <SubheaderRight>
                    <Button
                        variant='solid'
                        onClick={() => window.location.reload()} // Reload to reset both chats
                        icon='HeroPlus'>
                        New Chat
                    </Button>
                </SubheaderRight>
            </Subheader>
            <div className='container mx-auto mt-2'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-6 border-2 border-grey rounded-lg p-2'>
						<h3 className='text-center'>User 1</h3>
                        <ChatContainer sessionId="user1" />
                    </div>
                    <div className='col-span-6 border-2 border-grey rounded-lg p-2'>
						<h3 className='text-center'>User 2</h3>
                        <ChatContainer sessionId="user2" />
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ChatBotClient;
