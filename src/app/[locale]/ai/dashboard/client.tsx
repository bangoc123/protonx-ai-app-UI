'use client';

import React from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import { useFormik } from 'formik';
import Container from '@/components/layouts/Container/Container';
import FieldWrap from '@/components/form/FieldWrap';
import Button from '@/components/ui/Button';
import Input from '@/components/form/Input';
import AIChatContainerCommon from '@/app/[locale]/ai/_common/AIChatContainer.common';
import classNames from 'classnames';
import Link from 'next/link';
import { appPages } from '@/config/pages.config';
import Card, { CardBody } from '@/components/ui/Card';
import Icon from '@/components/icon/Icon';
import AIChatInputContainerCommon from '@/app/[locale]/ai/_common/AIChatInputContainer.common';
import AiSubheaderPartial from '../_partial/AiSubheader.partial';

const AiDashboardClient = () => {
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
					<div className='col-span-12 my-20'>
						<div className='mb-4 text-center text-6xl font-semibold'>
							<span
								className={classNames(
									'animate-pulse bg-gradient-to-r bg-clip-text text-transparent',
									'from-pink-500 via-sky-500 to-violet-500',
									'hover:from-sky-500 hover:via-violet-500 hover:to-amber-500',
									'transition duration-1000 ease-in-out',
								)}>
								⚡️Go beyond your limits with AI
							</span>
						</div>
						<div className='text-center text-2xl text-zinc-500'>
							Chat with the smartest AI - experience the power of AI with us
						</div>
					</div>
					<div className='col-span-12 md:col-span-6 xl:col-span-3'>
						<Link
							href={`${appPages?.aiAppPages?.subPages?.chatPages?.subPages?.photoPage?.to}`}>
							<Card>
								<CardBody>
									<div className='flex items-center gap-4'>
										<div className='flex-shrink-0 rounded-lg bg-amber-500/25 p-6'>
											<Icon icon='HeroPhoto' size='text-6xl' color='amber' />
										</div>
										<div className='grow'>
											<div className='text-2xl font-semibold'>
												Photo editing
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</Link>
					</div>
					<div className='col-span-12 md:col-span-6 xl:col-span-3'>
						<Link
							href={`${appPages?.aiAppPages?.subPages?.chatPages?.subPages?.audioPage?.to}`}>
							<Card>
								<CardBody>
									<div className='flex items-center gap-4'>
										<div className='flex-shrink-0 rounded-lg bg-violet-500/25 p-6'>
											<Icon
												icon='HeroMusicalNote'
												size='text-6xl'
												color='violet'
											/>
										</div>
										<div className='grow'>
											<div className='text-2xl font-semibold'>
												Text to Speech
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</Link>
					</div>
					<div className='col-span-12 md:col-span-6 xl:col-span-3'>
						<Link
							href={`${appPages?.aiAppPages?.subPages?.chatPages?.subPages?.speechRecognitionPage?.to}`}>
							<Card>
								<CardBody>
									<div className='flex items-center gap-4'>
										<div className='flex-shrink-0 rounded-lg bg-blue-500/25 p-6'>
											<Icon
												icon='HeroMicrophone'
												size='text-6xl'
												color='blue'
											/>
										</div>
										<div className='grow'>
											<div className='text-2xl font-semibold'>
												Speech Recognition
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</Link>
					</div>
					<div className='col-span-12 md:col-span-6 xl:col-span-3'>
						<Link
							href={`${appPages?.aiAppPages?.subPages?.chatPages?.subPages?.ragPage?.to}`}>
							<Card>
								<CardBody>
									<div className='flex items-center gap-4'>
										<div className='flex-shrink-0 rounded-lg bg-emerald-500/25 p-6'>
											<Icon icon='DuoChat6' size='text-6xl' color='emerald' />
										</div>
										<div className='grow'>
											<div className='text-2xl font-semibold'>
												Chat Bot using RAG
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</Link>
					</div>
					<div className='col-span-12 md:col-span-6 xl:col-span-3'>
						<Link
							href={`${appPages?.aiAppPages?.subPages?.chatPages?.subPages?.chatBotPage?.to}`}>
							<Card>
								<CardBody>
									<div className='flex items-center gap-4'>
										<div className='flex-shrink-0 rounded-lg bg-emerald-500/25 p-6'>
											<Icon icon='DuoChat6' size='text-6xl' color='emerald' />
										</div>
										<div className='grow'>
											<div className='text-2xl font-semibold'>Chat Bot</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</Link>
					</div>
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

export default AiDashboardClient;
