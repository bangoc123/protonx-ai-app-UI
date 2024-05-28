```tsx
interface IRadioProps extends HTMLAttributes<HTMLInputElement>, Partial<IValidationBaseProps> {
	className?: string;
	children?: ReactNode;
	color?: TColors; // 'zinc' | 'red' | 'amber' | 'lime' | 'emerald' | 'sky' | 'blue' | 'violet';
	colorIntensity?: TColorIntensity; // '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
	id?: string;
	inputClassName?: string;
	isInline?: boolean;
	label?: ReactNode;
	name: string;
	rounded?: TRounded; // 'rounded-none' | 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
	selectedValue: string | number | undefined;
	dimension?: TRadioDimension; // 'sm' | 'default' | 'lg' | 'xl'
	value: string | number;
	disabled?: boolean;
}
```
