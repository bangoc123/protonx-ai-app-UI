import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';
import { TColorIntensity } from '@/types/colorIntensities.type';
import { TRounded } from '@/types/rounded.type';
import themeConfig from '@/config/theme.config';

interface IProgressProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	value?: number;
	min?: number;
	max?: number;
	color?: TColors;
	colorIntensity?: TColorIntensity;
	rounded?: TRounded;
	isAnimation?: boolean;
}
const Progress: FC<IProgressProps> = (props) => {
	const {
		value,
		className,
		min = 0,
		max = 100,
		rounded = themeConfig.rounded,
		color = themeConfig.themeColor,
		colorIntensity = themeConfig.themeColorShade,
		isAnimation = false,
		...rest
	} = props;

	const calculatedValue =
		typeof value !== 'undefined' && typeof min !== 'undefined' && typeof max !== 'undefined'
			? (100 * (value - min)) / (max - min)
			: '';

	return (
		<div
			data-component-name='Progress'
			className={classNames(
				'flex',
				'h-5 w-full',
				'bg-zinc-500/10',
				'overflow-hidden',
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				rounded,
				className,
			)}
			{...rest}>
			<div
				className={classNames(
					'h-full',
					[`bg-${color}-${colorIntensity}`],
					{ 'animate-pulse': isAnimation },
					rounded,
					themeConfig.transition,
				)}
				style={{ width: `${calculatedValue}%` }}
			/>
		</div>
	);
};
Progress.displayName = 'Progress';

export default Progress;
