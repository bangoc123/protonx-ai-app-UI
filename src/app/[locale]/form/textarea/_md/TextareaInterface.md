```tsx
interface ITextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement>,
		Partial<IValidationBaseProps> {
	borderWidth?: TBorderWidth; // 'border' | 'border-2' | 'border-4' | 'border-8' | 'border-0';
	className?: string;
	color?: TColors; // 'zinc' | 'red' | 'amber' | 'lime' | 'emerald' | 'sky' | 'blue' | 'violet';
	colorIntensity?: TColorIntensity; // '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
	rounded?: TRounded; // 'rounded-none' | 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
	dimension?: TTextareaDimension; // 'xs' | 'sm' | 'default' | 'lg' | 'xl';
	value?: string | number | readonly string[] | undefined;
	variant?: TTextareaVariants; // 'solid';
}
```
