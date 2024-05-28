```tsx
import React from 'react';
import { useFormik } from 'formik';
import Label from './components/form/Label';
import Radio, { RadioGroup } from './components/form/Radio';

const MyComponent = () => {
	const options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

	const formik = useFormik({
		initialValues: {
			radioOption: options[1],
		},
		onSubmit: () => {},
	});

	return (
		<div>
			<Label htmlFor='radioOption'>Example Radio</Label>
			<RadioGroup isInline>
				{options.map((i) => (
					<Radio
						key={i}
						label={i}
						name='radioOption'
						value={i}
						selectedValue={formik.values.radioOption}
						onChange={formik.handleChange}
					/>
				))}
			</RadioGroup>
		</div>
	);
};

export default MyComponent;
```
