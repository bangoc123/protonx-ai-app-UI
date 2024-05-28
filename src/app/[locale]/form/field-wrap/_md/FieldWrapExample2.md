```tsx
import React, { useState } from 'react';
import { useFormik } from 'formik';
import Label from './components/form/Label';
import FieldWrap from './components/form/FieldWrap';
import Input from './components/form/Input';
import Icon from './components/icon/Icon';

const MyComponent = () => {
	const formik = useFormik({
		initialValues: {
			password: 'Asd123!',
		},
		onSubmit: () => {},
	});

	const [passwordShowStatus, setPasswordShowStatus] = useState<boolean>(false);

	return (
		<div>
			<Label htmlFor='urlAddress'>Website Address</Label>
			<Label htmlFor='password'>Password</Label>
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
					type={passwordShowStatus ? 'text' : 'password'}
					id='password'
					name='password'
					onChange={formik.handleChange}
					value={formik.values.password}
					autoComplete='current-password'
				/>
			</FieldWrap>
		</div>
	);
};

export default MyComponent;
```
