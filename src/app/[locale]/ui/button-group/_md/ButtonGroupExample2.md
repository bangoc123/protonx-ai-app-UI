```tsx
import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

const MyComponent = () => {
	const [state, setState] = useState(3);

	return (
		<ButtonGroup isVertical>
			{[1, 2, 3, 4].map((item) => (
				<Button
					key={item}
					color='amber'
					isActive={item === activeButton}
					onClick={() => setActiveButton(item)}>
					Button {item}
				</Button>
			))}
		</ButtonGroup>
	);
};

export default MyComponent;
```
