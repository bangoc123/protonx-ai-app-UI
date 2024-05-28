```tsx
import React from 'react';
import Button from './Button';
import OffCanvas, {
	OffCanvasHeader,
	OffCanvasBody,
	OffCanvasFooter,
	OffCanvasFooterChild,
} from './OffCanvas';

const MyComponent = () => {
	const [state, setState] = useState<boolean>(false);
	return (
		<>
			<Button variant='solid' onClick={() => setState(true)}>
				Click!
			</Button>
			<OffCanvas isOpen={state} setIsOpen={setState}>
				<OffCanvasHeader>Header</OffCanvasHeader>
				<OffCanvasBody>Body</OffCanvasBody>
				<OffCanvasFooter>
					<OffCanvasFooterChild>
						<Button onClick={() => setState(false)} color='red'>
							Close
						</Button>
					</OffCanvasFooterChild>
					<OffCanvasFooterChild>Child 2</OffCanvasFooterChild>
				</OffCanvasFooter>
			</OffCanvas>
		</>
	);
};

export default MyComponent;
```
