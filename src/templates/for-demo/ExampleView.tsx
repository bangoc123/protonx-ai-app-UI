import React, { ReactNode, useState } from 'react';
import Button from '../../components/ui/Button';
import Modal, { ModalBody, ModalHeader } from '../../components/ui/Modal';
import MdViewer from '../../components/MdViewer';

const ExampleView = ({
	title,
	mdFile,
	children,
}: {
	title: string;
	mdFile: string;
	children: ReactNode;
}) => {
	const [example1, setExample1] = useState<boolean>(false);

	return (
		<>
			<div className='mb-4 flex items-center'>
				<div>{title}</div>
				<div>
					<Button icon='HeroCodeBracket' onClick={() => setExample1(true)} />
					<Modal isOpen={example1} setIsOpen={setExample1} size='lg' isScrollable>
						<ModalHeader>{title}</ModalHeader>
						<ModalBody>
							<MdViewer mdFile={mdFile} />
						</ModalBody>
					</Modal>
				</div>
			</div>
			{children}
		</>
	);
};

export default ExampleView;
