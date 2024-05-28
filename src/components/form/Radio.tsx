import React, {
	Children,
	cloneElement,
	FC,
	InputHTMLAttributes,
	ReactElement,
	ReactNode,
	useId,
} from 'react';
import classNames from 'classnames';
import { TRounded } from '@/types/rounded.type';
import { TColors } from '@/types/colors.type';
import { TColorIntensity } from '@/types/colorIntensities.type';
import themeConfig from '../../config/theme.config';
import { IValidationBaseProps } from './Validation';

export type TRadioDimension = 'sm' | 'default' | 'lg' | 'xl';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement>, Partial<IValidationBaseProps> {
	className?: string;
	children?: ReactNode;
	color?: TColors;
	colorIntensity?: TColorIntensity;
	id?: string;
	inputClassName?: string;
	isInline?: boolean;
	label?: ReactNode;
	name: string;
	rounded?: TRounded;
	selectedValue: string | number | undefined;
	dimension?: TRadioDimension;
	value: string | number;
	disabled?: boolean;
}
const Radio: FC<IRadioProps> = (props) => {
	const {
		className,
		children,
		color = themeConfig.themeColor,
		colorIntensity = themeConfig.themeColorShade,
		id,
		inputClassName,
		isInline = false,
		label,
		name,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		rounded = themeConfig.rounded,
		selectedValue,
		dimension = 'default',
		value,
		disabled = false,
		isValid,
		isTouched,
		invalidFeedback,
		isValidMessage,
		validFeedback,
		...rest
	} = props;

	const inputHintId = useId();

	/**
	 * Width&Height & Margin & Font Size
	 */
	const radioDimensions: { [key in TRadioDimension]: { general: string; label: string } } = {
		sm: {
			general: classNames('w-5', 'h-5', 'ltr:mr-1 rtl:ml-1'),
			label: classNames('text-sm'),
		},
		default: {
			general: classNames('w-7', 'h-7', 'ltr:mr-1.5 rtl:ml-1.5'),
			label: classNames('text-base'),
		},
		lg: {
			general: classNames('w-9', 'h-9', 'ltr:mr-2 rtl:ml-2'),
			label: classNames('text-lg'),
		},
		xl: {
			general: classNames('w-10', 'h-10', 'ltr:mr-2.5 rtl:ml-2.5'),
			label: classNames('text-xl'),
		},
	};
	const radioDimensionClasses = radioDimensions[dimension].general;
	const labelDimensionClasses = radioDimensions[dimension].label;

	const radioClasses = classNames(
		'peer',
		'cursor-pointer appearance-none',
		'rounded-full',
		// border
		'border-zinc-100 dark:border-zinc-800',
		// hover:border
		[`hover:border-${color}-${colorIntensity}`],
		[`dark:hover:border-${color}-${colorIntensity}`],
		'disabled:!border-zinc-500',
		// checked:ring
		'checked:ring-4 checked:ring-inset checked:ring-white dark:checked:ring-zinc-900',
		// checked:bg
		[`checked:bg-${color}-${colorIntensity}`],
		{ 'sr-only': children },
		themeConfig.borderWidth,
		themeConfig.transition,
		radioDimensionClasses,
		inputClassName,
		// disabled
		'disabled:pointer-events-none disabled:opacity-50',
	);

	return (
		<div
			data-component-name='Radio'
			className={classNames(
				'items-center py-1.5',
				{ flex: !isInline, 'inline-flex': isInline, 'me-4': isInline },
				'disabled:!opacity-25',
				className,
			)}>
			<input
				id={id || inputHintId}
				type='radio'
				name={name}
				className={radioClasses}
				checked={selectedValue === value}
				value={value}
				disabled={disabled}
				{...rest}
			/>
			{!!label && (
				<label
					htmlFor={id || inputHintId}
					className={classNames(
						'cursor-pointer text-base peer-disabled:pointer-events-none peer-disabled:opacity-50',
						labelDimensionClasses,
					)}>
					{label}
				</label>
			)}

			{!!children && (
				<label
					className={classNames(
						'cursor-pointer overflow-hidden rounded-md border-4 border-transparent outline outline-4 outline-offset-2 outline-zinc-100 dark:outline-zinc-800',
						[`peer-checked:border-${color}-${colorIntensity}`],
					)}
					htmlFor={id || inputHintId}>
					{children}
				</label>
			)}
		</div>
	);
};

interface IRadioGroupProps {
	children: ReactElement<IRadioProps> | ReactElement<IRadioProps>[];
	invalidFeedback?: string;
	isInline?: boolean;
	isTouched?: boolean;
	isValid?: boolean;
	isValidMessage?: boolean;
	validFeedback?: string;
}
export const RadioGroup: FC<IRadioGroupProps> = (props) => {
	const {
		children,
		invalidFeedback,
		isInline = false,
		isTouched = false,
		isValid = false,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isValidMessage = true,
		validFeedback,
		...rest
	} = props;
	return (
		<div data-component-name='Radio/RadioGroup' {...rest}>
			{Children.map(children, (child) =>
				cloneElement(child, {
					isInline: child.props.isInline || isInline,
					isValid,
					isTouched,
					invalidFeedback,
					validFeedback,
					isValidMessage: false,
				}),
			)}
		</div>
	);
};

export default Radio;
