```tsx
import React from 'react';
import { useFormik } from 'formik';
import Label from './components/form/Label';
import FieldWrap from './components/form/FieldWrap';
import Select from './components/form/Select';
import Icon from './components/icon/Icon';

const MyComponent = () => {
	const formik = useFormik({
		initialValues: {
			options: '',
		},
		onSubmit: () => {},
	});

	return (
		<div>
			<Label htmlFor='options'>Example select option group</Label>
			<FieldWrap
				firstSuffix={<Icon icon='HeroTruck' className='mx-2' />}
				lastSuffix={<Icon icon='HeroChevronDown' className='mx-2' />}>
				<Select
					id='options'
					name='options'
					onChange={formik.handleChange}
					value={formik.values.options}
					placeholder='Select option'>
					<optgroup label='Swedish Cars'>
						<option value='volvo'>Volvo</option>
						<option value='saab'>Saab</option>
					</optgroup>
					<optgroup label='German Cars'>
						<option value='mercedes'>Mercedes</option>
						<option value='audi'>Audi</option>
					</optgroup>
				</Select>
			</FieldWrap>
		</div>
	);
};

export default MyComponent;
```
