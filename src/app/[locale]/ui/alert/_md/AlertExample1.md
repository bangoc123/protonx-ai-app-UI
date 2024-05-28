```tsx
import React from 'react';
import Alert from './Alert';

const MyComponent = () => {
	return (
		<Alert
			className='border-transparent'
			color='amber'
			icon='HeroBeaker'
			title='Example Alert!'
			variant='solid'>
			You can use props and tailwind's class names as needed for your design.
		</Alert>
	);
};

export default MyComponent;
```
