```tsx
interface ISelectProps
	extends SelectHTMLAttributes<HTMLSelectElement>,
		Partial<IValidationBaseProps> {
	borderWidth?: TBorderWidth; // 'border' | 'border-2' | 'border-4' | 'border-8' | 'border-0';
	className?: string;
	children: ReactNode;
	color?: TColors; // 'zinc' | 'red' | 'amber' | 'lime' | 'emerald' | 'sky' | 'blue' | 'violet';
	colorIntensity?: TColorIntensity; // '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
	name: string;
	rounded?: TRounded; // 'rounded-none' | 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
	dimension?: TSelectDimension; // 'xs' | 'sm' | 'default' | 'lg' | 'xl';
	value?: string | number | readonly string[] | undefined;
	variant?: TSelectVariants; // 'solid';
}
```
