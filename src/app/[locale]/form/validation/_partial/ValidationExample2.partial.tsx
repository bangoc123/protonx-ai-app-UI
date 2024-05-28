'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import FieldWrap from '@/components/form/FieldWrap';
import Icon from '@/components/icon/Icon';
import Input from '@/components/form/Input';
import Button from '@/components/ui/Button';
import Label from '@/components/form/Label';
import Validation from '@/components/form/Validation';
import Checkbox from '@/components/form/Checkbox';
import Select from '@/components/form/Select';
import Progress from '@/components/ui/Progress';
import Textarea from '@/components/form/Textarea';

type TValues = {
	username: string;
	email: string;
	password: string;
	passwordRepeat: string;
	birth: string;
	gender: string;
	termsAndConditionals: boolean | string;
	messages: string;
};

const ValidationExample2Partial = () => {
	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);
	const [passwordRepeatShowStatus, setPasswordRepeatShowStatus] = useState<boolean>(false);

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
			passwordRepeat: '',
			birth: '',
			gender: '',
			termsAndConditionals: false,
			messages: '',
		},
		validate: (values: TValues) => {
			const errors: Partial<TValues> = {};

			if (!values.username) {
				errors.username = 'Required';
			} else if (values.username.length < 3) {
				errors.username = 'Must be 3 letters or longer';
			} else if (values.username.length > 20) {
				errors.username = 'Must be 20 letters or shorter';
			}

			if (!values.email) {
				errors.email = 'Required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address';
			}

			if (!values.password) {
				errors.password = 'Please provide a valid password.';
			} else {
				errors.password = '';

				if (values.password.length < 8 || values.password.length > 32) {
					errors.password +=
						'The password must be at least 8 characters long, but no more than 32.';
				}
				if (!/[0-9]/g.test(values.password)) {
					errors.password +=
						'Require that at least one digit appear anywhere in the string.';
				}
				if (!/[a-z]/g.test(values.password)) {
					errors.password +=
						'Require that at least one lowercase letter appear anywhere in the string.';
				}
				if (!/[A-Z]/g.test(values.password)) {
					errors.password +=
						'Require that at least one uppercase letter appear anywhere in the string.';
				}
				if (!/[!@#$%^&*)(+=._-]+$/g.test(values.password)) {
					errors.password +=
						'Require that at least one special character appear anywhere in the string.';
				}
			}

			if (!values.passwordRepeat) {
				errors.passwordRepeat = 'Please provide a valid password.';
			} else if (values.password !== values.passwordRepeat) {
				errors.passwordRepeat = 'Passwords do not match.';
			}

			if (!values.termsAndConditionals) {
				errors.termsAndConditionals = 'Required';
			}

			if (!values.gender) {
				errors.gender = 'Required';
			}

			if (!values.messages) {
				errors.messages = 'Required';
			}

			return errors;
		},
		onSubmit: () => {},
	});

	const passwordStrength = formik.errors.password?.split('.').filter((i) => i !== '').length;

	return (
		<form className='flex flex-col gap-4' noValidate>
			<div>
				<Label htmlFor='username'>Username</Label>
				<Validation
					isValid={formik.isValid}
					isTouched={formik.touched.username}
					invalidFeedback={formik.errors.username}
					validFeedback='Good'>
					<FieldWrap
						firstSuffix={<Icon icon='HeroUser' className='mx-2' size='text-xl' />}>
						<Input
							id='username'
							autoComplete='username'
							name='username'
							placeholder='Username'
							value={formik.values.username}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</FieldWrap>
				</Validation>
			</div>
			<div>
				<Label htmlFor='email'>Email</Label>
				<Validation
					isValid={formik.isValid}
					isTouched={formik.touched.email}
					invalidFeedback={formik.errors.email}
					validFeedback='Good'>
					<FieldWrap
						firstSuffix={<Icon icon='HeroEnvelope' className='mx-2' size='text-xl' />}>
						<Input
							id='email'
							autoComplete='email'
							name='email'
							placeholder='Email'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</FieldWrap>
				</Validation>
			</div>
			<div>
				<Label htmlFor='password'>Password</Label>
				<Validation
					isValid={formik.isValid}
					isTouched={formik.touched.password}
					invalidFeedback={formik.errors.password}
					validFeedback='Good'>
					<FieldWrap
						firstSuffix={<Icon icon='HeroKey' className='mx-2' size='text-xl' />}
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
							type={passwordShowStatus ? 'text' : 'password'}
							autoComplete='new-password'
							id='password'
							name='password'
							placeholder='Password'
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</FieldWrap>
				</Validation>
				{!formik.isValid &&
					formik.touched.password &&
					formik.errors.password !== 'Please provide a valid password.' && (
						<Progress
							className='!h-2'
							value={5 - (passwordStrength || 0)}
							max={5}
							color={
								(5 - (passwordStrength || 0) > 4 && 'emerald') ||
								(5 - (passwordStrength || 0) > 2 && 'amber') ||
								'red'
							}
						/>
					)}
				{!formik.isValid &&
					formik.touched.password &&
					formik.errors.password !== 'Please provide a valid password.' && (
						<div className='mt-4 flex gap-4'>
							<Progress
								className='!h-2'
								value={5 - (passwordStrength || 0)}
								min={0}
								max={1}
							/>
							<Progress
								className='!h-2'
								value={5 - (passwordStrength || 0)}
								min={1}
								max={2}
							/>
							<Progress
								className='!h-2'
								value={5 - (passwordStrength || 0)}
								min={2}
								max={3}
							/>
							<Progress
								className='!h-2'
								value={5 - (passwordStrength || 0)}
								min={3}
								max={4}
							/>
							<Progress
								className='!h-2'
								value={5 - (passwordStrength || 0)}
								min={4}
								max={5}
							/>
						</div>
					)}
			</div>
			<div>
				<Label htmlFor='passwordRepeat'>Password Repeat</Label>
				<Validation
					isValid={formik.isValid}
					isTouched={formik.touched.passwordRepeat}
					invalidFeedback={formik.errors.passwordRepeat}
					validFeedback='Passwords matched.'>
					<FieldWrap
						firstSuffix={<Icon icon='HeroKey' className='mx-2' size='text-xl' />}
						lastSuffix={
							<Icon
								className='mx-2 cursor-pointer'
								icon={passwordRepeatShowStatus ? 'HeroEyeSlash' : 'HeroEye'}
								onClick={() => {
									setPasswordRepeatShowStatus(!passwordRepeatShowStatus);
								}}
							/>
						}>
						<Input
							type={passwordRepeatShowStatus ? 'text' : 'password'}
							autoComplete='new-password'
							id='passwordRepeat'
							name='passwordRepeat'
							placeholder='Password Repeat'
							value={formik.values.passwordRepeat}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</FieldWrap>
				</Validation>
			</div>
			<div>
				<Label htmlFor='passwordRepeat'>Password Repeat</Label>
				<Validation
					isValid={formik.isValid}
					isTouched={formik.touched.gender}
					invalidFeedback={formik.errors.gender}
					validFeedback='Good'>
					<FieldWrap
						firstSuffix={<Icon icon='HeroUserCircle' className='mx-2' size='text-xl' />}
						lastSuffix={
							<Icon className='mx-2 cursor-pointer' icon='HeroChevronDown' />
						}>
						<Select
							id='gender'
							name='gender'
							placeholder='Choose gender'
							value={formik.values.gender}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
						</Select>
					</FieldWrap>
				</Validation>
			</div>
			<div>
				<Label htmlFor='messages'>Messages</Label>
				<Validation
					isValid={formik.isValid}
					isTouched={formik.touched.messages}
					invalidFeedback={formik.errors.messages}
					validFeedback='Good'>
					<FieldWrap
						firstSuffix={<Icon icon='HeroMegaphone' className='mx-2' size='text-xl' />}>
						<Textarea
							id='messages'
							name='messages'
							placeholder='Messages'
							value={formik.values.messages}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</FieldWrap>
				</Validation>
			</div>
			<div>
				<Validation
					isValid={formik.isValid}
					isTouched={formik.touched.termsAndConditionals}
					invalidFeedback={formik.errors.termsAndConditionals}
					validFeedback='Good'>
					<Checkbox
						label='I have read and accept the terms and conditions.'
						id='termsAndConditionals'
						onChange={formik.handleChange}
						checked={formik.values.termsAndConditionals}
					/>
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
	);
};

export default ValidationExample2Partial;
