```tsx
import React from 'react';
import Card, { CardFooter, CardFooterChild } from './Card';
import Button from './Button';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from './Dropdown';

const MyComponent = () => {
	return (
		<Card>
			<CardFooter>
				<CardFooterChild>
					<Button color='red' icon='HeroArrowLeft'>
						Back
					</Button>
				</CardFooterChild>
				<CardFooterChild>
					<Button variant='outline' color='zinc' icon='HeroXCircle'>
						Cancel
					</Button>
					<Button variant='solid' icon='HeroPencil'>
						Save
					</Button>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							<Button variant='solid' icon='HeroEllipsisVertical' />
						</DropdownToggle>
						<DropdownMenu placement='bottom-end'>
							<DropdownItem>Item 1</DropdownItem>
							<DropdownItem>Item 2</DropdownItem>
							<DropdownItem>Item 3</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</CardFooterChild>
			</CardFoote>
		</Card>
	);
};

export default MyComponent;
```
