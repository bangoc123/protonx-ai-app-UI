```tsx
interface ITooltipProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
	text: string;
	placement?: PopperJS.Placement;
	borderWidth?: TBorderWidth;
	rounded?: TRounded;
}
```
