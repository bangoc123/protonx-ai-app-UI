```tsx
import React from 'react';
import { useFormik } from 'formik';
import Label from './components/form/Label';
import RichText from './components/RichText';

const MyComponent = () => {
	const formik = useFormik({
		initialValues: {
			description: JSON.parse(
				'[{"type":"paragraph","children":[{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada nisl sed metus maximus imperdiet. Aenean tortor mi, pretium et faucibus elementum, pulvinar ultricies ex. Vivamus pharetra dui interdum, semper diam eget, blandit urna. Etiam eu tristique leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eros mi, vehicula sed ex sed, accumsan posuere leo. Vestibulum auctor aliquam elit, ut maximus felis gravida in. Donec feugiat sit amet est egestas porttitor. Suspendisse egestas nisi nec urna consequat, quis lobortis elit interdum. Pellentesque purus nibh, dignissim porta tincidunt id, convallis id lectus. In varius ipsum non turpis suscipit, ac ultrices nisi congue. Phasellus eget lectus eget dui sodales sollicitudin ut a nisi."}]}]',
			) as Descendant[],
		},
		onSubmit: () => {},
	});

	return (
		<div>
			<Label htmlFor='description'>Description</Label>
			<RichText
				id='description'
				value={formik.values.description}
				handleChange={(event) => {
					formik
						.setFieldValue('description', event)
						.then(() => {})
						.catch(() => {});
				}}
			/>
		</div>
	);
};

export default MyComponent;
```
