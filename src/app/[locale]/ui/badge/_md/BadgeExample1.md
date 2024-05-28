```tsx
import React from 'react';
import Badge from './Badge';

const MyComponent = () => {
	return (
		<div>
			Lorem ipsum dolor sit amet, <Badge>consectetur</Badge> adipiscing elit. Integer lacinia
			enim vitae venenatis blandit. Ut porttitor in{' '}
			<Badge variant='outline'>tellus vel</Badge> pretium. Proin id pulvinar mauris. Morbi
			euismod id nibh vitae tempus. Sed a molestie lectus. Nulla dignissim{' '}
			<Badge className='border-transparent' variant='outline'>
				urna sit amet
			</Badge>{' '}
			tempor consectetur. Nam placerat enim sed sem <Badge variant='solid'>porta</Badge>,{' '}
			<Badge variant='solid' color='emerald'>
				vitae
			</Badge>{' '}
			aliquam quam eleifend. Phasellus scelerisque sem nunc, id luctus lorem cursus vel.
		</div>
	);
};

export default MyComponent;
```
