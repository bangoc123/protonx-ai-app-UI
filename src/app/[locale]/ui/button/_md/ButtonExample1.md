```tsx
import React, { useState } from 'react';
import Button from './Button';

type TStatusValue = 'Copy' | 'Copying' | 'Copied';
type TStatus = { [key in 'COPY' | 'COPYING' | 'COPIED']: TStatusValue };

const STATUS: TStatus = {
	COPY: 'Copy',
	COPYING: 'Copying',
	COPIED: 'Copied',
};

const MyComponent = () => {
	const [state, setState] = useState<TStatusValue>(STATUS.COPY);
	const onCopy = () => {
		setState(STATUS.COPYING);
		// For preview
		setTimeout(() => setState(STATUS.COPIED), 3000);
	};

	return (
		<Button
			icon={
				state === STATUS.COPIED ? 'HeroClipboardDocumentCheck' : 'HeroClipboardDocumentList'
			}
			variant={state === STATUS.COPIED ? 'solid' : 'outline'}
			color={state === STATUS.COPIED ? 'emerald' : 'blue'}
			isLoading={state === STATUS.COPYING}
			onClick={() => onCopy()}>
			{state}
		</Button>
	);
};

export default MyComponent;
```
