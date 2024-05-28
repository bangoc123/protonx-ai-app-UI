```tsx
export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
	borderWidth?: TBorderWidth; // 'border' | 'border-2' | 'border-4' | 'border-8' | 'border-0';
	children?: ReactNode;
	className?: string;
	color?: TColors; // 'zinc' | 'red' | 'amber' | 'lime' | 'emerald' | 'sky' | 'blue' | 'violet';
	colorIntensity?: TColorIntensity; // '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
	icon?: TIcons; // TDuotoneIcons | THeroIcons | string;
	isActive?: boolean;
	isDisable?: boolean;
	isLoading?: boolean;
	rightIcon?: TIcons;
	rounded?: TRounded; // 'rounded-none' | 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
	size?: TButtonSize; // 'xs' | 'sm' | 'default' | 'lg' | 'xl';
	variant?: TButtonVariants; // 'solid' | 'outline' | 'default';
}
```
