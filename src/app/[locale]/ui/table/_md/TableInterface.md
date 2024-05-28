```tsx
interface ITHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
	children: ReactNode;
	className?: string;
}

interface ITBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
	children: ReactNode;
	className?: string;
}

interface ITFootProps extends HTMLAttributes<HTMLTableSectionElement> {
	children: ReactNode;
	className?: string;
}

interface ITrProps extends HTMLAttributes<HTMLTableRowElement> {
	children: ReactNode;
	className?: string;
}

interface IThProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
	children: ReactNode;
	className?: string;
	isResizable?: boolean;
	isColumnBorder?: boolean;
}

interface IThResizerProps extends HTMLAttributes<HTMLDivElement> {
	isResizing: boolean;
	className?: string;
	color?: TColors;
	colorIntensity?: TColorIntensity;
}

interface ITdProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
	children: ReactNode;
	className?: string;
}

interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
	children: ReactNode;
	className?: string;
}
```
