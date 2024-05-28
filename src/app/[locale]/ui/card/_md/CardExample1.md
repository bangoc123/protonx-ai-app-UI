```tsx
import React from 'react';
import Card, { CardBody, CardFooter, CardHeader, CardHeaderChild } from './Card';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from './Dropdown';
import Button from './Button';

const MyComponent = () => {
	return (
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<Icon icon='HeroBeaker' size='text-2xl' />
					<CardTitle>CardTitle</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<Dropdown placement='bottom-end'>
						<DropdownToggle>
							<Button>Menu</Button>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem>Item 1</DropdownItem>
							<DropdownItem>Item 2</DropdownItem>
							<DropdownItem>Item 3</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<!-- ... -->
			</CardBody>
			<CardFooter>
				<CardHeaderChild />
				<CardHeaderChild>
					<Button color='red'>Cancel</Button>
					<Button variant='solid' icon='HeroServer'>Save</Button>
				</CardHeaderChild>
			</CardFooter>
		</Card>
	);
};

export default MyComponent;

```
