'use client';

import React, { useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import usersDb, { TUser } from '@/mocks/db/users.db';
import { useFormik } from 'formik';
import useSaveBtn from '@/hooks/useSaveBtn';
import Subheader, {
	SubheaderLeft,
	SubheaderRight,
	SubheaderSeparator,
} from '@/components/layouts/Subheader/Subheader';
import Link from 'next/link';
import { appPages } from '@/config/pages.config';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Container from '@/components/layouts/Container/Container';
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import Avatar from '@/components/Avatar';
import Label from '@/components/form/Label';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import rolesDb from '@/mocks/db/roles.db';
import FieldWrap from '@/components/form/FieldWrap';
import Icon from '@/components/icon/Icon';
import Checkbox from '@/components/form/Checkbox';
import dayjs from 'dayjs';

const CustomerClient = () => {
	const { slug: id } = useParams();

	const { i18n } = useTranslation();

	const isNewItem = id === 'new';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isSaving, setIsSaving] = useState<boolean>(false);

	const userDb: TUser | undefined = usersDb.find((i) => i.id === id);

	const formik = useFormik({
		initialValues: {
			username: userDb?.username,
			email: userDb?.email,
			firstName: userDb?.firstName,
			lastName: userDb?.lastName,
			position: userDb?.position,
			role: userDb?.role,
			oldPassword: '',
			newPassword: '',
			newPasswordConfirmation: '',
			twitter: userDb?.socialProfiles?.twitter,
			facebook: userDb?.socialProfiles?.facebook,
			instagram: userDb?.socialProfiles?.instagram,
			github: userDb?.socialProfiles?.github,
			twoFactorAuth: userDb?.twoFactorAuth,
			weeklyNewsletter: userDb?.newsletter?.weeklyNewsletter || false,
			lifecycleEmails: userDb?.newsletter?.lifecycleEmails || false,
			promotionalEmails: userDb?.newsletter?.promotionalEmails || false,
			productUpdates: userDb?.newsletter?.productUpdates || false,
		},
		onSubmit: () => {},
	});

	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);
	const [passwordNewShowStatus, setPasswordNewShowStatus] = useState<boolean>(false);
	const [passwordNewConfShowStatus, setPasswordNewConfShowStatus] = useState<boolean>(false);

	const { saveBtnText, saveBtnColor, saveBtnDisable } = useSaveBtn({
		isNewItem,
		isSaving,
		isDirty: formik.dirty,
	});
	return (
		<PageWrapper>
			<Subheader>
				<SubheaderLeft>
					<Link
						href={`${appPages.crmAppPages.subPages.customerPage.subPages.listPage.to}`}>
						<Button icon='HeroArrowLeft' className='!px-0'>
							Back to List
						</Button>
					</Link>
					<SubheaderSeparator />
					{isNewItem ? (
						'Add New User'
					) : (
						<>
							{/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
							{`${userDb?.firstName} ${userDb?.lastName}`}{' '}
							<Badge
								color='blue'
								variant='outline'
								rounded='rounded-full'
								className='border-transparent'>
								Edit User
							</Badge>
						</>
					)}
				</SubheaderLeft>
				<SubheaderRight>
					<Button
						icon='HeroServer'
						variant='solid'
						color={saveBtnColor}
						isDisable={saveBtnDisable}
						onClick={() => formik.handleSubmit()}>
						{saveBtnText}
					</Button>
				</SubheaderRight>
			</Subheader>
			<Container className='flex shrink-0 grow basis-auto flex-col pb-0'>
				<div className='flex h-full flex-wrap content-start'>
					<div className='mb-4 grid w-full grid-cols-12 gap-4'>
						<div className='col-span-12 flex flex-col gap-4 xl:col-span-6'>
							<Card>
								<CardBody>
									<div className='flex w-full gap-4'>
										<div className='flex-shrink-0'>
											<Avatar
												src={userDb?.image?.thumb}
												className='!w-24'
												// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
												name={`${userDb?.firstName} ${userDb?.lastName}`}
											/>
										</div>
										<div className='flex grow items-center'>
											<div>
												<div className='w-full text-2xl font-semibold'>
													{userDb?.firstName} {userDb?.lastName}
												</div>

												<div className='w-full text-zinc-500'>
													{userDb?.email}
												</div>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<div>
												<div>Account Settings</div>
												<div className='text-lg font-normal text-zinc-500'>
													Here you can change user account information
												</div>
											</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										<div className='col-span-12 lg:col-span-6'>
											<Label htmlFor='username'>Username</Label>
											<Input
												id='username'
												name='username'
												onChange={formik.handleChange}
												value={formik.values.username}
												autoComplete='username'
											/>
										</div>
										<div className='col-span-12 lg:col-span-6'>
											<Label htmlFor='email'>Email</Label>
											<Input
												id='email'
												name='email'
												onChange={formik.handleChange}
												value={formik.values.email}
												autoComplete='email'
											/>
										</div>
										<div className='col-span-12 lg:col-span-6'>
											<Label htmlFor='firstName'>First Name</Label>
											<Input
												id='firstName'
												name='firstName'
												onChange={formik.handleChange}
												value={formik.values.firstName}
												autoComplete='given-name'
												autoCapitalize='words'
											/>
										</div>
										<div className='col-span-12 lg:col-span-6'>
											<Label htmlFor='lastName'>Last Name</Label>
											<Input
												id='lastName'
												name='lastName'
												onChange={formik.handleChange}
												value={formik.values.lastName}
												autoComplete='family-name'
												autoCapitalize='words'
											/>
										</div>

										<div className='col-span-12'>
											<Label htmlFor='position'>Role</Label>
											<Select
												name='role'
												onChange={formik.handleChange}
												value={formik.values.role}
												placeholder='Select role'>
												{rolesDb.map((role) => (
													<option key={role.id} value={role.id}>
														{role.name}
													</option>
												))}
											</Select>
										</div>
										<div className='col-span-12'>
											<Label htmlFor='position'>Position</Label>
											<Input
												id='position'
												name='position'
												onChange={formik.handleChange}
												value={formik.values.position}
											/>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<div>
												<div>Social Profiles</div>
												<div className='text-lg font-normal text-zinc-500'>
													Here you can set user social profiles
												</div>
											</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										<div className='col-span-12'>
											<Label htmlFor='twitter'>Twitter</Label>
											<FieldWrap firstSuffix='https://twitter.com/'>
												<Input
													id='twitter'
													name='twitter'
													onChange={formik.handleChange}
													value={formik.values.twitter}
													placeholder='username'
												/>
											</FieldWrap>
										</div>

										<div className='col-span-12'>
											<Label htmlFor='facebook'>Facebook</Label>
											<FieldWrap firstSuffix='https://facebook.com/'>
												<Input
													id='facebook'
													name='facebook'
													onChange={formik.handleChange}
													value={formik.values.facebook}
													placeholder='username'
												/>
											</FieldWrap>
										</div>

										<div className='col-span-12'>
											<Label htmlFor='instagram'>Instagram</Label>
											<FieldWrap firstSuffix='https://instagram.com/'>
												<Input
													id='instagram'
													name='instagram'
													onChange={formik.handleChange}
													value={formik.values.instagram}
													placeholder='username'
												/>
											</FieldWrap>
										</div>

										<div className='col-span-12'>
											<Label htmlFor='github'>GitHub</Label>
											<FieldWrap firstSuffix='https://github.com/'>
												<Input
													id='github'
													name='github'
													onChange={formik.handleChange}
													value={formik.values.github}
													placeholder='username'
												/>
											</FieldWrap>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>
											<div>
												<div>Change password</div>
												<div className='text-lg font-normal text-zinc-500'>
													Here you can set your new password
												</div>
											</div>
										</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='grid grid-cols-12 gap-4'>
										<div className='col-span-12'>
											<Label htmlFor='oldPassword'>Old Password</Label>
											<FieldWrap
												lastSuffix={
													<Icon
														className='mx-2'
														icon={
															passwordShowStatus
																? 'HeroEyeSlash'
																: 'HeroEye'
														}
														onClick={() => {
															setPasswordShowStatus(
																!passwordShowStatus,
															);
														}}
													/>
												}>
												<Input
													type={passwordShowStatus ? 'text' : 'password'}
													id='oldPassword'
													name='oldPassword'
													onChange={formik.handleChange}
													value={formik.values.oldPassword}
													autoComplete='current-password'
												/>
											</FieldWrap>
										</div>
										<div className='col-span-12'>
											<Label htmlFor='newPassword'>New Password</Label>
											<FieldWrap
												lastSuffix={
													<Icon
														className='mx-2'
														icon={
															passwordNewShowStatus
																? 'HeroEyeSlash'
																: 'HeroEye'
														}
														onClick={() => {
															setPasswordNewShowStatus(
																!passwordNewShowStatus,
															);
														}}
													/>
												}>
												<Input
													type={
														passwordNewShowStatus ? 'text' : 'password'
													}
													id='newPassword'
													name='newPassword'
													onChange={formik.handleChange}
													value={formik.values.newPassword}
													autoComplete='new-password'
												/>
											</FieldWrap>
										</div>
										<div className='col-span-12'>
											<Label htmlFor='newPasswordConfirmation'>
												New Password Confirmation
											</Label>
											<FieldWrap
												lastSuffix={
													<Icon
														className='mx-2'
														icon={
															passwordNewConfShowStatus
																? 'HeroEyeSlash'
																: 'HeroEye'
														}
														onClick={() => {
															setPasswordNewConfShowStatus(
																!passwordNewConfShowStatus,
															);
														}}
													/>
												}>
												<Input
													type={
														passwordNewConfShowStatus
															? 'text'
															: 'password'
													}
													id='newPasswordConfirmation'
													name='newPasswordConfirmation'
													onChange={formik.handleChange}
													value={formik.values.newPasswordConfirmation}
													autoComplete='new-password'
												/>
											</FieldWrap>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='col-span-12 flex flex-col gap-4 xl:col-span-6'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Two-Factor Authentication</CardTitle>
									</CardHeaderChild>
									<CardHeaderChild>
										{formik.values.twoFactorAuth ? (
											<Badge
												variant='outline'
												className='border-transparent'
												color='emerald'>
												Enabled
											</Badge>
										) : (
											<Badge
												variant='outline'
												className='border-transparent'
												color='red'>
												Disabled
											</Badge>
										)}
										<Checkbox
											variant='switch'
											id='twoFactorAuth'
											name='twoFactorAuth'
											onChange={formik.handleChange}
											checked={formik.values.twoFactorAuth}
										/>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap divide-y divide-dashed divide-zinc-500/50 [&>*]:py-4'>
										<div className='flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<div className='w-full text-xl font-semibold'>
													Authenticator App
												</div>
											</div>
											<div className='flex-shrink-0'>
												<Button
													variant='outline'
													isDisable={!formik.values.twoFactorAuth}>
													Set up
												</Button>
											</div>
										</div>
										<div className='flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<div className='w-full text-xl font-semibold'>
													Security Keys
												</div>
											</div>
											<div className='flex-shrink-0'>
												<Button
													color='red'
													className='!px-0'
													isDisable={!formik.values.twoFactorAuth}>
													Deactivate
												</Button>
											</div>
										</div>
										<div className='flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<div className='w-full text-xl font-semibold'>
													Telephone Number
												</div>
											</div>
											<div className='flex flex-shrink-0 items-center gap-4'>
												<span className='text-zinc-500'>
													{userDb?.phone}
												</span>
												<Button
													variant='outline'
													color='zinc'
													isDisable={!formik.values.twoFactorAuth}>
													Edit
												</Button>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Newsletter</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap divide-y divide-dashed divide-zinc-500/50 [&>*]:py-4'>
										<div className='flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<Label htmlFor='weeklyNewsletter' className='!mb-0'>
													<div className='text-xl font-semibold'>
														Weekly newsletter
													</div>
													<div className='text-zinc-500'>
														Get notified about articles, discounts and
														new products.
													</div>
												</Label>
											</div>
											<div className='flex flex-shrink-0 items-center'>
												<Checkbox
													variant='switch'
													id='weeklyNewsletter'
													name='weeklyNewsletter'
													onChange={formik.handleChange}
													checked={formik.values.weeklyNewsletter}
												/>
											</div>
										</div>
										<div className='flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<Label htmlFor='lifecycleEmails' className='!mb-0'>
													<div className='text-xl font-semibold'>
														Lifecycle emails
													</div>
													<div className='text-zinc-500'>
														Get personalized offers and emails based on
														your activity.
													</div>
												</Label>
											</div>
											<div className='flex flex-shrink-0 items-center'>
												<Checkbox
													variant='switch'
													id='lifecycleEmails'
													name='lifecycleEmails'
													onChange={formik.handleChange}
													checked={formik.values.lifecycleEmails}
												/>
											</div>
										</div>
										<div className='flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<Label
													htmlFor='promotionalEmails'
													className='!mb-0'>
													<div className='text-xl font-semibold'>
														Promotional emails
													</div>
													<div className='text-zinc-500'>
														Get personalized offers and emails based on
														your orders & preferences.
													</div>
												</Label>
											</div>
											<div className='flex flex-shrink-0 items-center'>
												<Checkbox
													variant='switch'
													id='promotionalEmails'
													name='promotionalEmails'
													onChange={formik.handleChange}
													checked={formik.values.promotionalEmails}
												/>
											</div>
										</div>
										<div className='flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<Label htmlFor='productUpdates' className='!mb-0'>
													<div className='text-xl font-semibold'>
														Product updates
													</div>
													<div className='text-zinc-500'>
														Checking this will allow us to notify you
														when we make updates to products you have
														downloaded/purchased.
													</div>
												</Label>
											</div>
											<div className='flex flex-shrink-0 items-center'>
												<Checkbox
													variant='switch'
													id='productUpdates'
													name='productUpdates'
													onChange={formik.handleChange}
													checked={formik.values.productUpdates}
												/>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Sessions</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap divide-y divide-dashed divide-zinc-500/50 [&>*]:py-4'>
										<div className='group flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<div>
													<div className='text-xl font-semibold'>
														Chrome
													</div>
													<div className='text-zinc-500'>
														MacOS 13.4.1
													</div>
												</div>
												<Button
													className='invisible group-hover:visible'
													color='red'>
													Delete
												</Button>
											</div>
											<div className='flex flex-shrink-0 items-center gap-4'>
												<Icon icon='CustomUSA' size='text-3xl' />
												<Badge
													variant='outline'
													rounded='rounded-full'
													className='border-transparent'>
													3 hours ago
												</Badge>
											</div>
										</div>
										<div className='group flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<div>
													<div className='text-xl font-semibold'>
														Safari
													</div>
													<div className='text-zinc-500'>
														MacOS 13.4.1
													</div>
												</div>
												<Button
													className='invisible group-hover:visible'
													color='red'>
													Delete
												</Button>
											</div>
											<div className='flex flex-shrink-0 items-center gap-4'>
												<Icon icon='CustomUSA' size='text-3xl' />
												<Badge
													variant='outline'
													rounded='rounded-full'
													className='border-transparent'>
													1 day ago
												</Badge>
											</div>
										</div>
										<div className='group flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<div>
													<div className='text-xl font-semibold'>App</div>
													<div className='text-zinc-500'>iOS 16.5.1</div>
												</div>
												<Button
													className='invisible group-hover:visible'
													color='red'>
													Delete
												</Button>
											</div>
											<div className='flex flex-shrink-0 items-center gap-4'>
												<Icon icon='CustomUSA' size='text-3xl' />
												<Badge
													variant='outline'
													rounded='rounded-full'
													className='border-transparent'>
													3 days ago
												</Badge>
											</div>
										</div>
										<div className='group flex basis-full gap-4'>
											<div className='flex grow items-center'>
												<div>
													<div className='text-xl font-semibold'>
														Safari
													</div>
													<div className='text-zinc-500'>
														iPadOS 16.5.1
													</div>
												</div>
												<Button
													className='invisible group-hover:visible'
													color='red'>
													Delete
												</Button>
											</div>
											<div className='flex flex-shrink-0 items-center gap-4'>
												<Icon icon='CustomUSA' size='text-3xl' />
												<Badge
													variant='outline'
													rounded='rounded-full'
													color='red'
													className='border-transparent'>
													Expired
												</Badge>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Connected</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='flex flex-wrap divide-y divide-dashed divide-zinc-500/50 [&>*]:py-4'>
										{userDb?.socialAuth &&
											Object.keys(userDb?.socialAuth).map((i) => {
												// @ts-ignore
												// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
												const status = userDb?.socialAuth[i];
												return (
													<div key={i} className='flex basis-full gap-4'>
														<div className='flex grow items-center'>
															<div className='text-xl font-semibold capitalize'>
																{i}
															</div>
														</div>
														<div className='flex flex-shrink-0 items-center gap-4'>
															<Button
																icon={
																	status
																		? 'HeroTrash'
																		: 'HeroCog8Tooth'
																}
																color={status ? 'red' : 'blue'}>
																{status ? 'Delete' : 'Set up'}
															</Button>
														</div>
													</div>
												);
											})}
									</div>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
				<div className='flex'>
					<div className='grid w-full grid-cols-12 gap-4'>
						<div className='col-span-12'>
							<Card>
								<CardFooter>
									<CardFooterChild>
										{isNewItem && (
											<div className='flex items-center gap-2 text-amber-500'>
												<Icon
													icon='HeroExclamationTriangle'
													size='text-2xl'
												/>
												<span>Not saved yet</span>
											</div>
										)}
										{!isNewItem && (
											<div className='flex items-center gap-2'>
												<Icon icon='HeroDocumentCheck' size='text-2xl' />
												<span className='text-zinc-500'>Last saved:</span>
												<b>{dayjs().locale(i18n.language).format('LLL')}</b>
											</div>
										)}
									</CardFooterChild>
									<CardFooterChild>
										<Button
											icon='HeroServer'
											variant='solid'
											color={saveBtnColor}
											isDisable={saveBtnDisable}
											onClick={() => formik.handleSubmit()}>
											{saveBtnText}
										</Button>
									</CardFooterChild>
								</CardFooter>
							</Card>
						</div>
					</div>
				</div>
			</Container>
		</PageWrapper>
	);
};

export default CustomerClient;
