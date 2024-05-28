```tsx
import React from 'react';
import { useFormik } from 'formik';
import Label from './components/form/Label';
import FieldWrap from './components/form/FieldWrap';
import Input from './components/form/Input';

const MyComponent = () => {
	const formik = useFormik({
		initialValues: {
			urlAddress: '',
		},
		onSubmit: () => {},
	});

	return (
		<div>
			<Label htmlFor='urlAddress'>Website Address</Label>
			<FieldWrap
				firstSuffix='https://'
				lastSuffix={
					<Button
						className='ms-2'
						variant='solid'
						rounded='rounded'
						icon='HeroArrowTopRightOnSquare'
						size='sm'
						isDisable={!formik.values.urlAddress}
					/>
				}>
				<Input
					type='url'
					id='urlAddress'
					name='urlAddress'
					onChange={formik.handleChange}
					value={formik.values.urlAddress}
					autoComplete='url'
				/>
			</FieldWrap>
		</div>
	);
};

export default MyComponent;
```
