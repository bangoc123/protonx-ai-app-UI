```tsx
import React from 'react';
import Dropdown, { DropdownToggle, DropdownMenu, DropdownItem } from './Dropdown';
import Button from './Button';

const MyComponent = () => {
	return (
		<Dropdown>
			<DropdownToggle hasIcon={false}>
				<Button variant='outline' color='zinc' icon='HeroEllipsisVertical' />
			</DropdownToggle>
			<DropdownMenu placement='bottom-end'>
				<DropdownItem icon='HeroEye'>View</DropdownItem>
				<DropdownItem icon='HeroPencil'>Edit</DropdownItem>
				<DropdownItem icon='HeroTrash' className='border-t-2 text-red-500'>
					Delete
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default MyComponent;
```
