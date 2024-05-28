import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';
import { TColorIntensity } from '@/types/colorIntensities.type';
import { TRounded } from '@/types/rounded.type';
import { TIcons } from '@/types/icons.type';
import { TBorderWidth } from '@/types/borderWidth.type';
import themeConfig from '@/config/theme.config';
import useColorIntensity from '@/hooks/useColorIntensity';
import Icon from '../icon/Icon';

export type TButtonVariants = 'solid' | 'outline' | 'default';
export type TButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
	borderWidth?: TBorderWidth;
	children?: ReactNode;
	className?: string;
	color?: TColors;
	colorIntensity?: TColorIntensity;
	icon?: TIcons;
	isActive?: boolean;
	isDisable?: boolean;
	isLoading?: boolean;
	rightIcon?: TIcons;
	rounded?: TRounded;
	size?: TButtonSize;
	variant?: TButtonVariants;
}
const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
	const {
		borderWidth = themeConfig.borderWidth,
		children,
		className,
		color = themeConfig.themeColor,
		colorIntensity = themeConfig.themeColorShade,
		icon,
		isActive = false,
		isDisable = false,
		isLoading = false,
		rightIcon,
		rounded = themeConfig.rounded,
		size = 'default',
		variant = 'default',
		...rest
	} = props;
	const HAS_CHILDREN = typeof children !== 'undefined';

	const { textColor, shadeColorIntensity } = useColorIntensity(colorIntensity);

	/**
	 * Variant & Color & Status
	 */
	const btnVariants: { [key in TButtonVariants]: string } = {
		solid: classNames(
			// Default
			{
				[`bg-${color}-${colorIntensity}`]: !isActive,
			},
			[`${borderWidth} border-${color}-${colorIntensity}`],
			[`${textColor}`],
			// Hover
			[`hover:bg-${color}-${shadeColorIntensity as TColorIntensity}`],
			[`hover:border-${color}-${shadeColorIntensity as TColorIntensity}`],
			// Active
			[`active:bg-${color}-${shadeColorIntensity as TColorIntensity}`],
			[`active:border-${color}-${shadeColorIntensity as TColorIntensity}`],
			{
				[`bg-${color}-${shadeColorIntensity as TColorIntensity}`]: isActive,
				[`border-${color}-${shadeColorIntensity as TColorIntensity}`]: isActive,
			},
		),
		outline: classNames(
			// Default
			'bg-transparent',
			[`${borderWidth}`],
			{
				[`border-${color}-${colorIntensity}/50`]: !isActive,
			},
			'text-black dark:text-white',
			// Hover
			[`hover:border-${color}-${colorIntensity}`],
			// Active
			[`active:border-${color}-${colorIntensity}`],
			{
				[`border-${color}-${colorIntensity}`]: isActive,
			},
		),
		default: classNames(
			// Default
			'bg-transparent',
			{ 'text-zinc-600 dark:text-zinc-400': !isActive },
			[`${borderWidth}`],
			'border-transparent',
			// Hover
			[`hover:text-${color}-${colorIntensity} dark:hover:text-${color}-${colorIntensity}`],
			// Active
			[`active:text-${color}-${colorIntensity}`],
			{
				[`text-${color}-${colorIntensity}`]: isActive,
			},
		),
	};
	const btnVariantClasses = btnVariants[variant];

	/**
	 * Padding & Font Size & Icon Margin
	 */
	const btnSizes: {
		[key in TButtonSize]: { general: string; icon: string; rightIcon: string };
	} = {
		xs: {
			general: classNames(
				{
					'px-3': HAS_CHILDREN,
					'px-0.5': !HAS_CHILDREN,
				},
				'py-0.5',
				'text-xs',
			),
			icon: classNames({ 'ltr:mr-1 rtl:ml-1': HAS_CHILDREN }, 'text-[1.125rem]'),
			rightIcon: classNames('ltr:ml-1', 'rtl:mr-1', 'text-[1.125rem]'),
		},
		sm: {
			general: classNames(
				{
					'px-4': HAS_CHILDREN,
					'px-1': !HAS_CHILDREN,
				},
				'py-1',
				'text-sm',
			),
			icon: classNames({ 'ltr:mr-1 rtl:ml-1': HAS_CHILDREN }, 'text-[1.25rem]'),
			rightIcon: classNames('ltr:ml-1', 'rtl:mr-1', 'text-[1.25rem]'),
		},
		default: {
			general: classNames(
				{
					'px-5': HAS_CHILDREN,
					'px-1.5': !HAS_CHILDREN,
				},
				'py-1.5',
				'text-base',
			),
			icon: classNames({ 'ltr:mr-1.5 rtl:ml-1.5': HAS_CHILDREN }, 'text-[1.5rem]'),
			rightIcon: classNames('ltr:ml-1.5', 'rtl:mr-1.5', 'text-[1.5rem]'),
		},
		lg: {
			general: classNames(
				{
					'px-6': HAS_CHILDREN,
					'px-2': !HAS_CHILDREN,
				},
				'py-2',
				'text-lg',
			),
			icon: classNames({ 'ltr:mr-2 rtl:ml-2': HAS_CHILDREN }, 'text-[1.75rem]'),
			rightIcon: classNames('ltr:ml-2', 'rtl:mr-2', 'text-[1.75rem]'),
		},
		xl: {
			general: classNames(
				{
					'px-7': HAS_CHILDREN,
					'px-2.5': !HAS_CHILDREN,
				},
				'py-2.5',
				'text-xl',
			),
			icon: classNames({ 'ltr:mr-2.5 rtl:ml-2.5': HAS_CHILDREN }, 'text-[1.75rem]'),
			rightIcon: classNames('ltr:ml-2.5', 'rtl:mr-2.5'),
		},
	};
	const btnSizeClasses = btnSizes[size].general;
	const btnIconClasses = btnSizes[size].icon;
	const btnRightIconClasses = HAS_CHILDREN ? btnSizes[size].rightIcon : undefined;

	/**
	 * Disable
	 */
	const btnDisabledClasses = 'opacity-50 pointer-events-none';

	const classes = classNames(
		'inline-flex items-center justify-center',
		btnVariantClasses,
		btnSizeClasses,
		rounded,
		themeConfig.transition,
		{ [`${btnDisabledClasses}`]: isDisable || isLoading },
		className,
	);

	return (
		<button ref={ref} data-component-name='Button' type='button' className={classes} {...rest}>
			{(!!icon || isLoading) && (
				<Icon
					icon={isLoading ? 'DuoLoading' : (icon as TIcons)}
					className={classNames({ 'animate-spin': isLoading }, btnIconClasses)}
				/>
			)}
			{children}
			{!!rightIcon && <Icon icon={rightIcon} className={classNames(btnRightIconClasses)} />}
		</button>
	);
});
Button.displayName = 'Button';

export default Button;
