import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { TIcons } from '@/types/icons.type';
import { TColors } from '@/types/colors.type';
import { TColorIntensity } from '@/types/colorIntensities.type';
import Image, { StaticImageData } from 'next/image';
import Icon from './icon/Icon';

interface ITimelineItemProps {
	children: ReactNode;
	icon?: TIcons;
	image?: string | StaticImageData;
	color?: TColors;
	colorShade?: TColorIntensity;
}
export const TimelineItem: FC<ITimelineItemProps> = (props) => {
	const { children, icon = 'HeroHashtag', image, color, colorShade, ...rest } = props;
	return (
		<div data-component-name='TimelineItem' className='flex gap-4' {...rest}>
			<div data-component-name='icon line' className='flex w-8 flex-col items-center'>
				<div data-component-name='icon'>
					{image ? (
						<Image
							src={image}
							alt='Timeline'
							className='aspect-square rounded-full object-cover'
						/>
					) : (
						<Icon
							icon={icon}
							size='text-2xl'
							color={color}
							colorIntensity={colorShade}
						/>
					)}
				</div>
				<div
					data-component-name='line'
					className='relative top-2 h-[calc(100%-1rem)] min-h-[0.5rem] w-0.5 rounded-full bg-zinc-500/50'
				/>
			</div>
			<div data-component-name='content' className='space-y-2'>
				{children}
			</div>
		</div>
	);
};
TimelineItem.displayName = 'TimelineItem';

interface ITimelineProps {
	children: ReactNode;
	className?: string;
}
const Timeline: FC<ITimelineProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Timeline'
			className={classNames('flex flex-col gap-4', className)}
			{...rest}>
			{children}
		</div>
	);
};
Timeline.displayName = 'Timeline';

export default Timeline;
