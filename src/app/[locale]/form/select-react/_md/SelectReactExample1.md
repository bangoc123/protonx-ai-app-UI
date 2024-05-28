```tsx
import React from 'react';
import { useFormik } from 'formik';
import SelectReact, { TSelectOptions } from './components/form/SelectReact';
import Label from '../../../../components/form/Label';

const MyComponent = () => {
	const options: TSelectOptions = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	];

	const formik = useFormik({
		initialValues: {
			options: undefined,
		},
		onSubmit: () => {},
	});

	return (
		<div>
			<Label htmlFor='options'>Example select</Label>
			<SelectReact
				options={options}
				id='options'
				name='options'
				value={formik.values.options}
				onChange={(value) => formik.setFieldValue('options', value)}
			/>
		</div>
	);
};

export default MyComponent;
```
