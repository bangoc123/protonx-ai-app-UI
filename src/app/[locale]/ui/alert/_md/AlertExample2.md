```tsx
import React from 'react';
import Alert from './Alert';

const MyComponent = () => {
	return (
		<Alert className='border-transparent' title='Example Alert!' variant='outline' isClosable>
			You can use props and tailwind's class names as needed for your design.
		</Alert>
	);
};

export default MyComponent;
```
