```tsx
import React from 'react';
import Dropdown, { DropdownToggle, DropdownMenu, DropdownItem } from './Dropdown';
import Button from './Button';

const MyComponent = () => {
	return (
		<Dropdown>
			<DropdownToggle hasIcon={false}>
				<Button variant='solid'>Dropdown Mega</Button>
			</DropdownToggle>
			<DropdownMenu placement='bottom-end'>
				<div className='grid grid-cols-12 gap-4 divide-zinc-200 dark:divide-zinc-800 md:divide-x'>
					<div className='col-span-12 gap-4 md:col-span-3'>
						<DropdownNavLinkItem to='/' icon='HeroLink'>
							Home Page
						</DropdownNavLinkItem>
						<DropdownNavLinkItem to='/ui/dropdown' icon='HeroLink'>
							Dropdown
						</DropdownNavLinkItem>
						<DropdownItem icon='HeroSquare2Stack'>Item 3</DropdownItem>
					</div>
					<div className='col-span-12 gap-4 md:col-span-3'>
						<DropdownItem icon='HeroSquare2Stack'>Item 4</DropdownItem>
						<DropdownItem icon='HeroSquare2Stack'>Item 5</DropdownItem>
						<DropdownItem icon='HeroSquare2Stack'>Item 6</DropdownItem>
					</div>
					<div className='col-span-12 gap-4 px-4 md:col-span-6'>
						Lorem ipsum dolor sit amet.
					</div>
				</div>
			</DropdownMenu>
		</Dropdown>
	);
};

export default MyComponent;
```
