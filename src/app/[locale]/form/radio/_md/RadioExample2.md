```tsx
import React, { ReactNode } from 'react';
import { useFormik } from 'formik';
import Label from './components/form/Label';
import Radio, { RadioGroup } from './components/form/Radio';
import Icon from './components/icon/Icon';
import Badge from './components/ui/Badge';
import priceFormat from './utils/priceFormat.util';

const MyComponent = () => {
	const options: { value: string; content: ReactNode }[] = [
		{ value: 'default', content: 'Default' },
		{
			value: 'speed',
			content: (
				<div className='flex items-center gap-2'>
					<Icon icon='HeroRocketLaunch' size='text-lg' />
					<span>Speed</span>
					<Badge variant='outline' className='border-transparent'>
						+{priceFormat(3.99)}
					</Badge>
				</div>
			),
		},
		{
			value: 'extraSpeed',
			content: (
				<div className='flex items-center gap-2'>
					<Icon icon='HeroBolt' color='emerald' size='text-lg' />
					<span className='font-bold'>Extra Speed</span>
					<Badge color='emerald' variant='outline' className='border-transparent'>
						+{priceFormat(4.99)}
					</Badge>
				</div>
			),
		},
	];

	const formik = useFormik({
		initialValues: {
			radioOption: options[0].value,
		},
		onSubmit: () => {},
	});

	return (
		<div>
			<Label htmlFor='radioOption' description='Default shipments ship within 3 weeks.'>
				Choose shipping type
			</Label>
			<RadioGroup>
				{options.map((i) => (
					<Radio
						key={i.value}
						label={i.content}
						name='radioOption'
						value={i.value}
						selectedValue={formik.values.radioOption}
						onChange={formik.handleChange}
						color={i.value === options[2].value ? 'emerald' : 'blue'}
					/>
				))}
			</RadioGroup>
		</div>
	);
};

export default MyComponent;
```
