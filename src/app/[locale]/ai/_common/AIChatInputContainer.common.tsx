import React, { FC, ReactNode } from 'react';
import Card, { CardBody } from '@/components/ui/Card';

interface IAIChatInputContainerCommonProps {
	children: ReactNode;
}
const AIChatInputContainerCommon: FC<IAIChatInputContainerCommonProps> = (props) => {
	const { children } = props;
	return (
		<div className='sticky bottom-0 z-20 flex'>
			<div className='grid w-full grid-cols-12 gap-4'>
				<div className='col-span-12'>
					<Card>
						<CardBody>{children}</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default AIChatInputContainerCommon;
