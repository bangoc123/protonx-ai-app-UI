'use client';

import React from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import { useFormik } from 'formik';
import AiSubheaderPartial from '@/app/[locale]/ai/_partial/AiSubheader.partial';
import Container from '@/components/layouts/Container/Container';
import AIChatContainerCommon from '@/app/[locale]/ai/_common/AIChatContainer.common';
import AIChatItemContainerCommon from '@/app/[locale]/ai/_common/AIChatItemContainer.common';
import usersDb from '@/mocks/db/users.db';
import Button from '@/components/ui/Button';
import LoaderDotsCommon from '@/components/LoaderDots.common';
import AIChatInputContainerCommon from '@/app/[locale]/ai/_common/AIChatInputContainer.common';
import FieldWrap from '@/components/form/FieldWrap';
import Input from '@/components/form/Input';
import MdViewer from '@/components/MdViewer';
import Mounted from '@/components/Mounted';
import codeMd1 from './code1.md';
import codeMd2 from './code2.md';

const ChatCodeClient = () => {
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
			<AiSubheaderPartial />
			<Container className='flex shrink-0 grow basis-auto flex-col pb-0'>
				<AIChatContainerCommon>
					<AIChatItemContainerCommon isAnswer>
						How would you like me to help you?
					</AIChatItemContainerCommon>
					<AIChatItemContainerCommon
						userImage={usersDb[5].image?.thumb}
						userName={usersDb[5].username}>
						Can you write a simple React component with TypeScript?
					</AIChatItemContainerCommon>
					<AIChatItemContainerCommon isAnswer>
						<div className='grid grid-cols-12 gap-4'>
							<div className='col-span-12 flex flex-col gap-4 lg:col-span-8'>
								<Mounted>
									<MdViewer
										mdFile={codeMd1 as string}
										className='rounded-lg bg-zinc-950/10 p-4 dark:bg-zinc-950'
									/>
								</Mounted>
								<p>
									This component takes two props, <code>'name'</code> and{' '}
									<code>'age'</code>, and displays these values on the screen.
									Example usage:
								</p>
								<Mounted>
									<MdViewer
										mdFile={codeMd2 as string}
										className='rounded-lg bg-zinc-950/10 p-4 dark:bg-zinc-950'
									/>
								</Mounted>
							</div>
							<div className='col-span-full flex flex-wrap gap-4'>
								<Button icon='HeroArrowDownTray' variant='solid'>
									Export
								</Button>
								<Button icon='HeroDocumentDuplicate' variant='solid' color='zinc'>
									Create variation
								</Button>
								<Button
									icon='HeroAdjustmentsHorizontal'
									variant='solid'
									color='zinc'>
									Adjust
								</Button>
								<Button icon='HeroArrowsPointingOut' variant='solid' color='zinc'>
									Enhance
								</Button>
							</div>
						</div>
					</AIChatItemContainerCommon>
					<AIChatItemContainerCommon
						userImage={usersDb[5].image?.thumb}
						userName={usersDb[5].username}>
						Can you also add the country optionally?
					</AIChatItemContainerCommon>
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
									icon='HeroStop'>
									Stop Generating
								</Button>
							</div>
						</div>
					</AIChatItemContainerCommon>
				</AIChatContainerCommon>
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
				</AIChatInputContainerCommon>
			</Container>
		</PageWrapper>
	);
};

export default ChatCodeClient;
