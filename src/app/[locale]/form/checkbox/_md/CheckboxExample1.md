```tsx
import React from 'react';
import { useFormik } from 'formik';
import Label from './components/form/Label';
import Checkbox, { CheckboxGroup } from './components/form/Checkbox';

const MyComponent = () => {
	const formik = useFormik({
		initialValues: {
			optionA: true,
			optionB: false,
		},
		onSubmit: () => {},
	});

	return (
		<div>
			<Label htmlFor='optionA'>Example Checkbox</Label>
			<CheckboxGroup isInline>
				<Checkbox
					label='Option A'
					id='optionA'
					onChange={formik.handleChange}
					checked={formik.values.optionA}
				/>
				<Checkbox
					label='Option B'
					id='optionB'
					onChange={formik.handleChange}
					checked={formik.values.optionB}
				/>
			</CheckboxGroup>
		</div>
	);
};

export default MyComponent;
```
