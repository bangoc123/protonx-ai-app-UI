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
			<Label
				htmlFor='urlAddress'
				description='Just write the url address. Example; example.com'>
				Website Address
			</Label>
			<FieldWrap firstSuffix='https://'>
				<Input
					type='url'
					id='urlAddress'
					name='urlAddress'
					onChange={formik.handleChange}
					value={formik.values.urlAddress}
					placeholder='example.com'
					autoComplete='url'
				/>
			</FieldWrap>
		</div>
	);
};

export default MyComponent;
```
