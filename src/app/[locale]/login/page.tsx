'use client';

import React, { useState } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Button from '@/components/ui/Button';
import classNames from 'classnames';
import { useFormik } from 'formik';
import usersDb from '@/mocks/db/users.db';
import LogoTemplate from '@/templates/layouts/Logo/Logo.template';
import Validation from '@/components/form/Validation';
import FieldWrap from '@/components/form/FieldWrap';
import Icon from '@/components/icon/Icon';
import Input from '@/components/form/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

type TValues = {
	username: string;
	password: string;
};

const LoginPage = ({
	searchParams,
}: {
	searchParams?: Record<'callbackUrl' | 'error', string>;
}) => {
	const router = useRouter();

	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);
	const formik = useFormik({
		initialValues: {
			username: usersDb[5].username,
			password: usersDb[5].password,
		},
		validate: (values: TValues) => {
			const errors: Partial<TValues> = {};

			if (!values.username) {
				errors.username = 'Required';
			}

			if (!values.password) {
				errors.password = 'Required';
			}

			return errors;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: async (values: TValues, { setFieldError }) => {
			const res = await signIn('credentials', {
				username: values.username,
				password: values.password,
				redirect: false,
			});

			if (!res?.error) {
				router.push(searchParams?.callbackUrl ?? (process.env.NEXT_PUBLIC_URL as string));
			}

			// onLogin(values.username, values.password)
			// 	.then(() => {})
			// 	.catch((e: Error) => {
			// 		if (e.cause === 'username') {
			// 			setFieldError('username', e.message);
			// 			setFieldError('password', e.message);
			// 		}
			// 		if (e.cause === 'password') setFieldError('password', e.message);
			// 	});
		},
	});

	return (
		<PageWrapper className='bg-white dark:bg-inherit'>
			<div className='container mx-auto flex h-full items-center justify-center'>
				<div className='flex max-w-sm flex-col gap-8'>
					<div>
						<Link href='/' aria-label='Logo'>
							<LogoTemplate className='h-12' />
						</Link>
					</div>
					<div>
						<span className='text-4xl font-semibold'>Sign in</span>
					</div>
					<div>
						<span>Sign up with Open account</span>
					</div>
					<div className='grid grid-cols-12 gap-4'>
						<div className='col-span-6'>
							<Button
								icon='CustomGoogle'
								variant='outline'
								color='zinc'
								size='lg'
								className='w-full'
								onClick={() => signIn('google', { callbackUrl: '/' })}>
								Google
							</Button>
						</div>
						<div className='col-span-6'>
							<Button
								icon='CustomApple'
								variant='outline'
								color='zinc'
								size='lg'
								className='w-full'
								onClick={() => signIn('google', { callbackUrl: '/' })}>
								Apple
							</Button>
						</div>
					</div>
					<div className='border border-zinc-500/25 dark:border-zinc-500/50' />
					<div>
						<span>Or continue with email address</span>
					</div>
					<form className='flex flex-col gap-4' noValidate>
						<div
							className={classNames({
								'mb-2': !formik.isValid,
							})}>
							<Validation
								isValid={formik.isValid}
								isTouched={formik.touched.username}
								invalidFeedback={formik.errors.username}
								validFeedback='Good'>
								<FieldWrap
									firstSuffix={<Icon icon='HeroEnvelope' className='mx-2' />}>
									<Input
										dimension='lg'
										id='username'
										autoComplete='username'
										name='username'
										placeholder='Email or username'
										value={formik.values.username}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</FieldWrap>
							</Validation>
						</div>
						<div
							className={classNames({
								'mb-2': !formik.isValid,
							})}>
							<Validation
								isValid={formik.isValid}
								isTouched={formik.touched.password}
								invalidFeedback={formik.errors.password}
								validFeedback='Good'>
								<FieldWrap
									firstSuffix={<Icon icon='HeroKey' className='mx-2' />}
									lastSuffix={
										<Icon
											className='mx-2 cursor-pointer'
											icon={passwordShowStatus ? 'HeroEyeSlash' : 'HeroEye'}
											onClick={() => {
												setPasswordShowStatus(!passwordShowStatus);
											}}
										/>
									}>
									<Input
										dimension='lg'
										type={passwordShowStatus ? 'text' : 'password'}
										autoComplete='current-password'
										id='password'
										name='password'
										placeholder='Password'
										value={formik.values.password}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</FieldWrap>
							</Validation>
						</div>
						<div>
							<Button
								size='lg'
								variant='solid'
								className='w-full font-semibold'
								onClick={() => formik.handleSubmit()}>
								Sign in
							</Button>
						</div>
					</form>
					<div>
						<span className='text-zinc-500'>
							This site is protected by reCAPTCHA and the Google Privacy Policy.
						</span>
					</div>
					<div>
						<span className='flex gap-2 text-sm'>
							<span className='text-zinc-400 dark:text-zinc-600'>
								Don’t have an account?
							</span>
							<Link href='/' className='hover:text-inherit'>
								Sign up
							</Link>
						</span>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default LoginPage;
