```tsx
import React from 'react';
import Progress from './Progress';

const MyComponent = () => {
	return (
		<div className='flex gap-4'>
			<Progress value={16} max={40} color='red' isAnimation />
			<div className='font-bold'>{(16 / 40) * 100}%</div>
		</div>
	);
};

export default MyComponent;
```
