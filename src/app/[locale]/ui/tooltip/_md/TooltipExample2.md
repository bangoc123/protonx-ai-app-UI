```tsx
import React from 'react';
import Tooltip from './Tooltip';

const MyComponent = () => {
	return (
		<div>
			Lorem{' '}
			<Tooltip text='Pellentesque velit turpis, vestibulum ut tortor at, suscipit dapibus mi.'>
				<span className='underline decoration-pink-500 decoration-wavy underline-offset-2'>
					ipsum
				</span>
			</Tooltip>{' '}
			dolor sit{' '}
			<Tooltip text='Nunc tempus eros libero.'>
				<span className='underline decoration-indigo-500 decoration-wavy underline-offset-2'>
					amet
				</span>
			</Tooltip>
			, consectetur adipiscing elit.
		</div>
	);
};

export default MyComponent;
```
