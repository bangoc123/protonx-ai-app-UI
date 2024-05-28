import React, { FC, ReactNode } from 'react';

interface IAIChatContainerCommonProps {
	children: ReactNode;
}
const AIChatContainerCommon: FC<IAIChatContainerCommonProps> = (props) => {
	const { children } = props;
	return (
		<div className='flex h-full flex-wrap content-start'>
			<div className='grid w-full grid-cols-12 gap-4 last:[&>*]:mb-10'>{children}</div>
		</div>
	);
};

export default AIChatContainerCommon;
