```tsx
interface ICardProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	rounded?: TRounded | 'auto'; // 'rounded-none' | 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full' | 'auto'
}

interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
interface ICardHeaderChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
interface ICardTitleProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}

interface ICardBodyProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}

interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
interface ICardFooterChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
```
