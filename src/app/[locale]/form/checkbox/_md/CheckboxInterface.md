```tsx
interface ICheckboxProps extends HTMLAttributes<HTMLInputElement>, Partial<IValidationBaseProps> {
	checked?: boolean;
	className?: string;
	color?: TColors; // 'zinc' | 'red' | 'amber' | 'lime' | 'emerald' | 'sky' | 'blue' | 'violet';
	colorIntensity?: TColorIntensity; // '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' |'950';
	id?: string;
	inputClassName?: string;
	isInline?: boolean;
	label?: ReactNode;
	name?: string;
	rounded?: TRounded; // 'rounded-none' | 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
	dimension?: TCheckboxDimension; // 'xs' | 'sm' | 'default' | 'lg' | 'xl';
	variant?: TCheckboxVariants; // 'default' | 'switch';
}
```
