'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import FieldWrap from '@/components/form/FieldWrap';
import Icon from '@/components/icon/Icon';
import Input from '@/components/form/Input';
import Button from '@/components/ui/Button';
import Validation from '@/components/form/Validation';

type TValues = {
	username: string;
	password: string;
};

const ValidationExample1Partial = () => {
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
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
		onSubmit: () => {},
	});
	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);

	return (
		<form className='flex flex-col gap-4' noValidate>
			<div>
				<Validation
					isValid={formik.isValid}
					isTouched={formik.touched.username}
					invalidFeedback={formik.errors.username}
					validFeedback='Good'>
					<FieldWrap firstSuffix={<Icon icon='HeroEnvelope' className='mx-2' />}>
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

			<div>
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
	);
};

export default ValidationExample1Partial;
