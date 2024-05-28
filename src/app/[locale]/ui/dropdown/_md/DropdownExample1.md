```tsx
import React from 'react';
import Dropdown, { DropdownToggle, DropdownMenu, DropdownItem } from './Dropdown';
import Button from './Button';

const MyComponent = () => {
	return (
		<Dropdown>
			<DropdownToggle>
				<Button variant='outline' color='zinc' icon='HeroRocketLaunch'>
					Click
				</Button>
			</DropdownToggle>
			<DropdownMenu>
				<DropdownItem icon='HeroServer'>Item 1</DropdownItem>
				<DropdownItem icon='HeroEyeDropper'>Item 2</DropdownItem>
				<Dropdown>
					<DropdownToggle>
						<DropdownItem icon='HeroMap'>Item 3</DropdownItem>
					</DropdownToggle>
					<DropdownMenu placement='right-start'>
						<DropdownItem>Item 3.1</DropdownItem>
						<DropdownItem>Item 3.2</DropdownItem>
						<Dropdown>
							<DropdownToggle>
								<DropdownItem>Item 3.3</DropdownItem>
							</DropdownToggle>
							<DropdownMenu placement='right-start'>
								<DropdownItem>Item 3.3.1</DropdownItem>
								<DropdownItem>Item 3.3.2</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</DropdownMenu>
				</Dropdown>
			</DropdownMenu>
		</Dropdown>
	);
};

export default MyComponent;
```
