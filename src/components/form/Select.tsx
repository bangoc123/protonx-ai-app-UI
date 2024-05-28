import React, { FC, ReactNode, SelectHTMLAttributes } from 'react';
import classNames from 'classnames';
import { TRounded } from '@/types/rounded.type';
import { TBorderWidth } from '@/types/borderWidth.type';
import { TColors } from '@/types/colors.type';
import { TColorIntensity } from '@/types/colorIntensities.type';
import themeConfig from '../../config/theme.config';
import { IValidationBaseProps } from './Validation';

export type TSelectVariants = 'solid';
export type TSelectDimension = 'xs' | 'sm' | 'default' | 'lg' | 'xl';

interface ISelectProps
	extends SelectHTMLAttributes<HTMLSelectElement>,
		Partial<IValidationBaseProps> {
	borderWidth?: TBorderWidth;
	className?: string;
	children: ReactNode;
	color?: TColors;
	colorIntensity?: TColorIntensity;
	name: string;
	rounded?: TRounded;
	dimension?: TSelectDimension;
	value?: string | number | readonly string[] | undefined;
	variant?: TSelectVariants;
	placeholder?: string;
}
const Select: FC<ISelectProps> = (props) => {
	const {
		borderWidth = themeConfig.borderWidth,
		className,
		children,
		color = themeConfig.themeColor,
		colorIntensity = themeConfig.themeColorShade,
		name,
		rounded = themeConfig.rounded,
		dimension = 'default',
		variant = 'solid',
		placeholder,
		isValid,
		isTouched,
		invalidFeedback,
		...rest
	} = props;

	const selectVariants: {
		[key in TSelectVariants]: { general: string; validation: string };
	} = {
		solid: {
			general: classNames(
				// Default
				[`${borderWidth} border-zinc-100 dark:border-zinc-800`],
				'bg-zinc-100 dark:bg-zinc-800',
				// Hover
				[`hover:border-${color}-${colorIntensity}`],
				[`dark:hover:border-${color}-${colorIntensity}`],
				'disabled:!border-zinc-500',
				// Focus
				'focus:border-zinc-300 dark:focus:border-zinc-800',
				'focus:bg-transparent dark:focus:bg-transparent',
			),
			validation: classNames({
				'!border-red-500 ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'!border-green-500 focus:ring-4 focus:ring-green-500/30':
					!isValid && isTouched && !invalidFeedback,
			}),
		},
	};
	const selectVariantClasses = selectVariants[variant as TSelectVariants].general;
	const selectValidationsClasses = selectVariants[variant as TSelectVariants].validation;

	/**
	 * Padding & Font Size & Icon Margin
	 */
	const selectDimension: { [key in TSelectDimension]: { general: string } } = {
		xs: {
			general: classNames('px-1.5', 'py-0.5', 'text-xs'),
		},
		sm: {
			general: classNames('px-1.5', 'py-1', 'text-sm'),
		},
		default: {
			general: classNames('px-1.5', 'py-1.5', 'text-base'),
		},
		lg: {
			general: classNames('px-1.5', 'py-2', 'text-lg'),
		},
		xl: {
			general: classNames('px-1.5', 'py-2.5', 'text-xl'),
		},
	};
	const selectDimensionClasses = selectDimension[dimension].general;

	const classes = classNames(
		'w-full appearance-none outline-0',
		'text-black dark:text-white',
		'disabled:!opacity-25',
		themeConfig.transition,
		selectVariantClasses,
		selectDimensionClasses,
		rounded,
		selectValidationsClasses,
		className,
	);

	return (
		<select data-component-name='select' className={classes} name={name} {...rest}>
			{placeholder && !rest?.value && (
				<option value={undefined} hidden>
					{placeholder}
				</option>
			)}
			{children}
		</select>
	);
};

export default Select;
