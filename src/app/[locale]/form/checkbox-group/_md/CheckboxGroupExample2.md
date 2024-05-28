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
			<CheckboxGroup>
				<Checkbox
					label='Option A'
					id='optionA'
					onChange={formik.handleChange}
					checked={formik.values.optionA}
					variant='switch'
				/>
				<Checkbox
					label='Option B'
					id='optionB'
					onChange={formik.handleChange}
					checked={formik.values.optionB}
					variant='switch'
				/>
			</CheckboxGroup>
		</div>
	);
};

export default MyComponent;
```
