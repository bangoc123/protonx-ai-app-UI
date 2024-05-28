```tsx
export interface IDropdownProps extends HTMLAttributes<HTMLElement> {
	children: ReactElement<IDropdownToggleProps>[] | ReactElement<IDropdownMenuProps>[];
	className?: string;
	/* If you want to interfere with the open-closed state, you can use it by defining the state. */
	isOpen?: boolean | null;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	tag?: ElementType;
}

interface IDropdownToggleProps {
	children: ReactElement<IButtonProps | IDropdownItemProps>;
	hasIcon?: boolean;
	isOpen?: boolean;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

interface IDropdownMenuProps extends HTMLAttributes<HTMLUListElement> {
	borderWidth?: TBorderWidth;
	children: ReactNode | ReactNode[];
	className?: string;
	fallbackPlacements?: PopperJS.Placement[];
	isCloseAfterLeave?: boolean;
	isOpen?: boolean;
	placement?: PopperJS.Placement;
	rounded?: TRounded;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

interface IDropdownItemProps extends HTMLAttributes<HTMLLIElement> {
	children: ReactNode;
	className?: string;
	color?: TColors;
	colorIntensity?: TColorIntensity;
	isActive?: boolean;
	icon?: TIcons;
	rightIcon?: TIcons;
}
interface IDropdownNavLinkItemProps extends IDropdownItemProps {
	to: string;
}
```
