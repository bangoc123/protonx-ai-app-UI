'use client';

import React from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import { useParams } from 'next/navigation';
import usersDb, { TUser } from '@/mocks/db/users.db';
import { useFormik } from 'formik';
import Container from '@/components/layouts/Container/Container';
import ChatContainerCommon from '@/app/[locale]/chat/[slug]/_common/ChatContainer.common';
import ChatItemContainerCommon from '@/app/[locale]/chat/[slug]/_common/ChatItemContainer.common';
import ChatInputContainerCommon from '@/app/[locale]/chat/[slug]/_common/ChatInputContainer.common';
import FieldWrap from '@/components/form/FieldWrap';
import Button from '@/components/ui/Button';
import Input from '@/components/form/Input';

const ChatClient = () => {
	const { slug: id } = useParams();

	const currentUserData: TUser = usersDb.find((key) => key.username === id) as TUser;

	const formik = useFormik({
		onSubmit(): void | Promise<never> {
			return undefined;
		},
		initialValues: {
			textField: '',
		},
	});
	return (
		<PageWrapper>
			<Container className='flex shrink-0 grow basis-auto flex-col pb-0'>
				<ChatContainerCommon>
					<ChatItemContainerCommon
						userName={currentUserData.username}
						userImage={currentUserData.image?.thumb}
						isAnswer>
						Hello, when is the meeting today?
					</ChatItemContainerCommon>
					<ChatItemContainerCommon
						userName={usersDb[5].username}
						userImage={usersDb[5].image?.thumb}>
						I don't know but it must be 14:00.
					</ChatItemContainerCommon>
					<ChatItemContainerCommon
						userName={currentUserData.username}
						userImage={currentUserData.image?.thumb}
						isAnswer>
						I have presentations to prepare. I hope it is at that hour or I may not be
						able to make it.
					</ChatItemContainerCommon>
					<ChatItemContainerCommon
						userName={usersDb[5].username}
						userImage={usersDb[5].image?.thumb}>
						I can help you if you want. I have a half hour job. Then we can meet at
						Starbucks, 2 blocks away. Takes coffees ☕️ that come late.
					</ChatItemContainerCommon>
					<ChatItemContainerCommon
						userName={currentUserData.username}
						userImage={currentUserData.image?.thumb}
						isAnswer>
						It would be great 🥳
					</ChatItemContainerCommon>
					<ChatItemContainerCommon
						userName={usersDb[5].username}
						userImage={usersDb[5].image?.thumb}>
						😎
					</ChatItemContainerCommon>
				</ChatContainerCommon>
				<ChatInputContainerCommon>
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
							formik.values.textField ? (
								<Button
									className='ms-2'
									variant='solid'
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
						/>
					</FieldWrap>
				</ChatInputContainerCommon>
			</Container>
		</PageWrapper>
	);
};

export default ChatClient;
