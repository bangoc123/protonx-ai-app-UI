```tsx
interface IInputProps extends InputHTMLAttributes<HTMLInputElement>, Partial<IValidationBaseProps> {
	borderWidth?: TBorderWidth; // 'border' | 'border-2' | 'border-4' | 'border-8' | 'border-0';
	className?: string;
	color?: TColors; // 'zinc' | 'red' | 'amber' | 'lime' | 'emerald' | 'sky' | 'blue' | 'violet';
	colorIntensity?: TColorIntensity; // '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
	name: string;
	rounded?: TRounded; // 'rounded-none' | 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
	dimension?: TInputDimension; // 'xs' | 'sm' | 'default' | 'lg' | 'xl';
	type?: TInputTypes; // | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'month' | 'number' | 'password' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'
	value?: string | number | readonly string[] | undefined;
	variant?: TInputVariants; // 'solid';
}
```
