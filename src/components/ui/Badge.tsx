import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';
import { TColorIntensity } from '@/types/colorIntensities.type';
import { TBorderWidth } from '@/types/borderWidth.type';
import { TRounded } from '@/types/rounded.type';
import themeConfig from '@/config/theme.config';
import useColorIntensity from '@/hooks/useColorIntensity';

export type TBadgeVariants = 'solid' | 'outline' | 'default';

interface IBadgeProps {
	borderWidth?: TBorderWidth;
	children: ReactNode;
	className?: string;
	color?: TColors;
	colorIntensity?: TColorIntensity;
	rounded?: TRounded;
	variant?: TBadgeVariants;
}
const Badge: FC<IBadgeProps> = (props) => {
	const {
		borderWidth = themeConfig.borderWidth,
		children,
		className,
		color = themeConfig.themeColor,
		colorIntensity = themeConfig.themeColorShade,
		rounded = themeConfig.rounded,
		variant = 'default',
		...rest
	} = props;

	const { textColor } = useColorIntensity(colorIntensity);

	const badgeVariant: { [key in TBadgeVariants]: string } = {
		solid: classNames(
			[`${textColor}`],
			[`bg-${color}-${colorIntensity}`],
			'border-transparent',
		),
		outline: classNames(
			[`border-${color}-${colorIntensity}`],
			[`bg-${color}-${colorIntensity}/10`],
			[`text-${color}-${colorIntensity}`],
		),
		default: classNames([`text-${color}-${colorIntensity}`], 'border-transparent'),
	};
	const badgeVariantClasses = badgeVariant[variant];

	const classes = classNames(
		'inline-flex items-center justify-center',
		'px-2',
		[`${borderWidth}`],
		[`${rounded}`],
		badgeVariantClasses,
		className,
	);

	return (
		<span data-component-name='Badge' className={classes} {...rest}>
			{children}
		</span>
	);
};
Badge.displayName = 'Badge';

export default Badge;
