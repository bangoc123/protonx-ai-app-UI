```tsx
import React from 'react';
import { useFormik } from 'formik';
import Label from './components/form/Label';
import FieldWrap from './components/form/FieldWrap';
import Select from './components/form/Select';
import Icon from './components/icon/Icon';

const MyComponent = () => {
	const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

	const formik = useFormik({
		initialValues: {
			options: [options[1]],
		},
		onSubmit: () => {},
	});

	return (
		<div>
			<Label htmlFor='optionA'>Example select</Label>
			<FieldWrap lastSuffix={<Icon icon='HeroChevronDown' className='mx-2' />}>
				<Select
					name='options'
					onChange={formik.handleChange}
					value={formik.values.options}
					placeholder='Select option'>
					{options.map((i) => (
						<option key={i} value={i}>
							{i}
						</option>
					))}
				</Select>
			</FieldWrap>
		</div>
	);
};

export default MyComponent;
```
