```tsx
interface IModalHeaderProps extends HTMLAttributes<HTMLDivElement>, IModalHeaderClonedProps {
	children: ReactNode;
	className?: string;
}

interface IModalBodyProps extends HTMLAttributes<HTMLDivElement>, IModalBodyClonedProps {
	children: ReactNode;
	className?: string;
}

interface IModalFooterChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}

interface IModalFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}

interface IModalProps extends MotionProps {
	children:
		| ReactElement<IModalHeaderProps>[]
		| ReactElement<IModalBodyProps>[]
		| ReactElement<IModalFooterProps>[];
	fullScreen?: TScreens | boolean; // 'sm' | 'md' | 'lg' | 'xl' | '2xl' | true | false
	isAnimation?: boolean;
	isCentered?: boolean;
	isOpen: boolean;
	isScrollable?: boolean;
	isStaticBackdrop?: boolean;
	rounded?: TRounded; // 'rounded-none' | 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	size?: TModalSize; // string | number | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}
```
