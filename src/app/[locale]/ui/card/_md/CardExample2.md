```tsx
import React from 'react';
import Card, { CardBody, CardFooter, CardHeader, CardHeaderChild } from './Card';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from './Dropdown';
import Button from './Button';

const MyComponent = () => {
	return (
		<Card className='border-2 border-zinc-300/25 transition-all duration-300 hover:shadow-xl dark:border-zinc-800/50'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle> CardTitle</CardTitle>
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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia eros eget
				aliquam fringilla. Proin ac magna at odio condimentum tincidunt ac eget enim.
			</CardBody>
			<CardFooter className='border-t-2 border-zinc-300/25 pt-4 dark:border-zinc-800/50'>
				<CardHeaderChild>
					<Button variant='outline' color='red'>
						Cancel
					</Button>
				</CardHeaderChild>
				<CardHeaderChild>
					<Button variant='solid' icon='HeroServer'>
						Save
					</Button>
				</CardHeaderChild>
			</CardFooter>
		</Card>
	);
};

export default MyComponent;
```
