```tsx
import React, { useState } from 'react';
import Card, { CardBody } from './components/ui/Card';
import Button from './components/ui/Button';
import Collapse from './components/utils/Collapse';

const MyComponent = () => {
	const [state, setState] = useState<boolean>(false);
	return (
		<Card>
			<CardBody>
				<Button className='!px-0' onClick={() => setState(!state)}>
					Read {state ? 'less' : 'more'}
				</Button>
				<Collapse isOpen={state}>
					<div className='pt-4 text-justify'>
						Mauris blandit urna eget nulla placerat, sed dictum augue hendrerit. Nam
						purus tellus, fermentum at hendrerit in, placerat at urna. Nunc id neque
						urna. Praesent tempor porttitor congue. Nullam scelerisque venenatis
						hendrerit. Morbi ullamcorper posuere ligula. Ut eu fermentum nunc, vel
						pharetra eros. Morbi elementum enim eu diam consectetur, vitae dictum eros
						convallis. Ut vehicula gravida massa sit amet faucibus. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer
						fringilla, libero at ultrices suscipit, ex ligula pretium massa, ut euismod
						turpis ipsum a ex. Aenean sit amet nibh justo. Aenean finibus urna id erat
						pulvinar, nec mollis nulla dapibus. Vivamus non nisl lacinia, mollis urna
						ac, tempus magna.
					</div>
				</Collapse>
			</CardBody>
		</Card>
	);
};

export default MyComponent;
```
