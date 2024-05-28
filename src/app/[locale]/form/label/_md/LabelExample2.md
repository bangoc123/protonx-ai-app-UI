```tsx
import React from 'react';
import { useFormik } from 'formik';
import Label from './components/form/Label';
import FieldWrap from './components/form/FieldWrap';
import Input from './components/form/Input';
import Icon from './components/icon/Icon';

const MyComponent = () => {
	const formik = useFormik({
		initialValues: {
			emailAddress: '',
		},
		onSubmit: () => {},
	});

	return (
		<div>
			<Label htmlFor='emailAddress'>Email Address</Label>
			<FieldWrap firstSuffix={<Icon icon='HeroEnvelope' className='mx-2' />}>
				<Input
					type='email'
					id='emailAddress'
					name='emailAddress'
					onChange={formik.handleChange}
					value={formik.values.emailAddress}
					placeholder='johndoe@example.com'
				/>
			</FieldWrap>
		</div>
	);
};

export default MyComponent;
```
