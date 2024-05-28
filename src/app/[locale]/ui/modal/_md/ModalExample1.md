```tsx
import React from 'react';
import Button from './Button';
import Modal, { ModalHeader, ModalBody, ModalFooter, ModalFooterChild } from './Modal';

const MyComponent = () => {
	const [modalStatus, setModalStatus] = useState<boolean>(false);
	return (
		<>
			<Button onClick={() => setModalStatus(true)}>Click!</Button>
			<Modal isOpen={modalStatus} setIsOpen={setModalStatus}>
				<ModalHeader>Modal Title Here</ModalHeader>
				<ModalBody>Modal content here.</ModalBody>
				<ModalFooter>
					<ModalFooterChild>Footer Child 1</ModalFooterChild>
					<ModalFooterChild>
						<Button color='red'>Button 1</Button>
						<Button variant='solid'>Button 2</Button>
					</ModalFooterChild>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default MyComponent;
```
