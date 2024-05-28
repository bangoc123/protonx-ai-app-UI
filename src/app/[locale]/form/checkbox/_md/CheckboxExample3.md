```tsx
import React from 'react';
import { useFormik } from 'formik';
import Label from './components/form/Label';
import Checkbox from './components/form/Checkbox';

const MyComponent = () => {
	const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

	const formik = useFormik({
		initialValues: {
			options: [options[1]],
		},
		onSubmit: () => {},
	});

	const selectedOptions: string[] = options.filter((o) => formik.values.options.includes(o));

	const ref = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (ref.current) {
			if (options.length > selectedOptions.length && selectedOptions.length > 0) {
				ref.current.checked = false;
				ref.current.indeterminate = true;
			} else {
				ref.current.checked = false;
				ref.current.indeterminate = false;
			}
		}
	}, [selectedOptions.length, options.length]);

	const handleSelectAll = () => {
		if (options.length > selectedOptions.length) {
			formik
				.setFieldValue(
					'options',
					options.map((item) => item),
				)
				.then(() => {})
				.catch(() => {});
		} else {
			formik
				.setFieldValue('options', [])
				.then(() => {})
				.catch(() => {});
		}
	};

	return (
		<div>
			<Label htmlFor='options'>Example Checkbox</Label>
			<Checkbox
				ref={ref}
				label='Option ALL'
				id='options'
				onChange={handleSelectAll}
				checked={options.length === selectedOptions.length}
			/>
			{options.map((item) => (
				<Checkbox
					key={item}
					label={item}
					id={item}
					name='options'
					onChange={formik.handleChange}
					checked={formik.values.options?.includes(item)}
					className='ms-4'
				/>
			))}
		</div>
	);
};

export default MyComponent;
```
