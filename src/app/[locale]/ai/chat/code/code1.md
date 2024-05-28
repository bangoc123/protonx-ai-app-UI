```tsx
import React from 'react';

// Type to define properties for the component
interface Props {
	name: string;
	age: number;
}

// Functional Component
const SimpleComponent: React.FC<Props> = ({ name, age }) => {
	return (
		<div>
			<h2>Hello, my name is {name}!</h2>
			<p>My age: {age}</p>
		</div>
	);
};

export default SimpleComponent;
```
