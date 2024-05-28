import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import Card, { CardBody, CardFooter, CardFooterChild } from '@/components/ui/Card';
import Avatar from '@/components/Avatar';
import { UserBrainThumb } from '@/assets/images';
import { StaticImageData } from 'next/image';
import MdViewer from '@/components/MdViewer';

interface IAIChatItemContainerCommonProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
	isAnswer?: boolean;
	userImage?: string | StaticImageData;
	userName?: string;
	content?: string;
}
const AIChatItemContainerCommon: FC<IAIChatItemContainerCommonProps> = (props) => {
	const {
		content,
		children,
		className,
		isAnswer = false,
		userImage,
		userName = 'AI',
		...rest
	} = props;
	return (
		<div
			className={classNames(
				'col-span-10 lg:col-span-8',
				{ 'col-start-3 lg:col-start-5': !isAnswer },
				className,
			)}
			{...rest}>
			<Card>
				<CardBody className='pb-8'>
					{content && <MdViewer mdFile={content} className='whitespace-pre-wrap' />}
					{children}
				</CardBody>
				<CardFooter className='relative !p-0'>
					<CardFooterChild />
					<CardFooterChild>
						<Avatar
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							src={isAnswer ? UserBrainThumb : userImage}
							className={classNames('absolute -top-6', {
								'start-6': isAnswer,
								'end-6': !isAnswer,
							})}
							name={userName}
							rounded='rounded-xl'
						/>
					</CardFooterChild>
				</CardFooter>
			</Card>
		</div>
	);
};

export default AIChatItemContainerCommon;
