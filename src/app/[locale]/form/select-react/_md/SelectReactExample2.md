```tsx
import React from 'react';
import { useFormik } from 'formik';
import SelectReact, { TSelectGroups } from './components/form/SelectReact';
import Label from '../../../../components/form/Label';

const MyComponent = () => {
	const optionsGroup: TSelectGroups = [
		{
			label: 'Colours',
			options: [
				{ value: 'chocolate', label: 'Chocolate' },
				{ value: 'strawberry', label: 'Strawberry' },
				{ value: 'vanilla', label: 'Vanilla' },
			],
		},
		{
			label: 'Cars',
			options: [
				{ value: 'volvo', label: 'Volvo', isFixed: true },
				{ value: 'audi', label: 'Audi' },
				{ value: 'bmw', label: 'BMW' },
				{ value: 'mercedes', label: 'Mercedes' },
				{ value: 'VW', label: 'VW', isDisabled: true },
			],
		},
	];

	const formik = useFormik({
		initialValues: {
			options: [optionsGroup[1].options[0]],
		},
		onSubmit: () => {},
	});

	return (
		<div>
			<Label htmlFor='options'>Example select</Label>
			<SelectReact
				name='options'
				options={optionsGroup}
				isMulti
				value={formik.values.options}
				menuPlacement='auto'
				onChange={(value) => formik.setFieldValue('options', value)}
			/>
		</div>
	);
};

export default MyComponent;
```
