```tsx
import React from 'react';
import Progress from './Progress';

const MyComponent = () => {
	return (
		<div className='flex gap-4'>
			<Progress value={75} />
			<div className='font-bold'>75</div>
		</div>
	);
};

export default MyComponent;
```
