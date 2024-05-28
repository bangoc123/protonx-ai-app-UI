```tsx
interface IOffCanvasHeaderProps
	extends HTMLAttributes<HTMLDivElement>,
		IOffCanvasHeaderClonedProps {
	children: ReactNode;
	className?: string;
}

interface IOffCanvasBodyProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}

interface IOffCanvasFooterChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
interface IOffCanvasFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}

interface IOffCanvasProps extends MotionProps {
	children:
		| ReactElement<IOffCanvasHeaderProps>[]
		| ReactElement<IOffCanvasBodyProps>[]
		| ReactElement<IOffCanvasFooterProps>[];
	isAnimation?: boolean;
	isOpen: boolean;
	isStaticBackdrop?: boolean;
	position?: TOffCanvasPosition; // 'left' | 'right' | 'top' | 'bottom'
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}
```
