```tsx
import React from 'react';
import Tooltip from './Tooltip';

const MyComponent = () => {
	return (
		<div className='space-x-1 text-zinc-500 rtl:space-x-reverse'>
			<span className='font-semibold'>Lorem ipsum.</span>
			<Tooltip text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
		</div>
	);
};

export default MyComponent;
```
