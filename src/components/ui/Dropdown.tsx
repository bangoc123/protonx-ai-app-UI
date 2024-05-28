'use client';

import React, {
	cloneElement,
	Dispatch,
	ElementType,
	FC,
	forwardRef,
	HTMLAttributes,
	ReactElement,
	ReactNode,
	SetStateAction,
	useCallback,
	useRef,
	useState,
} from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import classNames from 'classnames';
import * as PopperJS from '@popperjs/core';
import { TBorderWidth } from '@/types/borderWidth.type';
import { TRounded } from '@/types/rounded.type';
import { TColors } from '@/types/colors.type';
import { TColorIntensity } from '@/types/colorIntensities.type';
import { TIcons } from '@/types/icons.type';
import { useRouter, usePathname } from 'next/navigation';
import themeConfig from '@/config/theme.config';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { IButtonProps } from '@/components/ui/Button';
import Icon from '@/components/icon/Icon';

export interface IDropdownProps extends HTMLAttributes<HTMLElement> {
	children: ReactElement<IDropdownToggleProps>[] | ReactElement<IDropdownMenuProps>[];
	className?: string;
	/* If you want to interfere with the open-closed state, you can use it by defining the state. */
	isOpen?: boolean | null;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	tag?: ElementType;
}
const Dropdown: FC<IDropdownProps> = (props) => {
	const { children, className, isOpen = null, setIsOpen, tag: Tag = 'div' } = props;

	const [state, setState] = useState<boolean>(
		!!(isOpen !== null && !!setIsOpen ? isOpen : false),
	);

	const dropdownRef = useRef(null);

	const classes = classNames('inline-flex');

	// Clicking outside to close
	const closeMenu = useCallback(() => {
		if (isOpen !== null && !!setIsOpen) {
			setIsOpen(false);
		} else {
			setState(false);
		}
	}, [isOpen, setIsOpen]);
	useOnClickOutside(dropdownRef, closeMenu);

	return (
		<Manager>
			{/* @ts-ignore */}
			<Tag
				data-component-name='Dropdown'
				ref={dropdownRef}
				className={classNames(classes, className)}>
				{children.map((child: ReactElement, index: number) =>
					// @ts-ignore
					['DropdownMenu', 'DropdownToggle'].includes(child.type.displayName as string)
						? cloneElement(child, {
								isOpen: isOpen !== null && !!setIsOpen ? isOpen : state,
								setIsOpen: isOpen !== null && !!setIsOpen ? setIsOpen : setState,
								// eslint-disable-next-line react/no-array-index-key
								key: index,
							})
						: child,
				)}
			</Tag>
		</Manager>
	);
};
Dropdown.displayName = 'Dropdown';

interface IDropdownToggleProps {
	children: ReactElement<IButtonProps | IDropdownItemProps>;
	hasIcon?: boolean;
	isOpen?: boolean;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
}
export const DropdownToggle: FC<IDropdownToggleProps> = (props) => {
	const { children, isOpen = false, setIsOpen, hasIcon = true } = props;

	const dropdownButtonRef = useRef(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const setButtonRef = useCallback((node: null, ref: (arg0: any) => any) => {
		dropdownButtonRef.current = node;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return ref(node);
	}, []);

	return (
		<Reference>
			{({ ref }) =>
				cloneElement(children, {
					// @ts-ignore
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					'data-component-name': `Dropdown/DropdownToggle [${children.type.displayName}]`,
					// @ts-ignore
					// eslint-disable-next-line @typescript-eslint/no-unsafe-return
					ref: (node: null) => setButtonRef(node, ref),
					onClick: () => {
						// @ts-ignore
						// eslint-disable-next-line no-unused-expressions,@typescript-eslint/no-unused-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
						children?.props?.onClick ? children.props.onClick() : null;
						if (setIsOpen) {
							setIsOpen(!isOpen);
						}
					},
					rightIcon: hasIcon
						? // @ts-ignore
							(children.type.displayName === 'Button' && 'HeroChevronDown') ||
							'HeroChevronRight'
						: undefined,
					isActive: isOpen,
					className: classNames(
						{
							// Only presentation
							show: isOpen,
						},
						// @ts-ignore
						// eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
						children?.props?.className,
					),
					'aria-expanded': isOpen,
				})
			}
		</Reference>
	);
};
DropdownToggle.displayName = 'DropdownToggle';

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
export const DropdownMenu: FC<IDropdownMenuProps> = (props) => {
	const {
		isOpen = false,
		setIsOpen,
		children,
		className,
		placement = 'bottom-start',
		isCloseAfterLeave = true,
		borderWidth = themeConfig.borderWidth,
		rounded = themeConfig.rounded,
		fallbackPlacements = [`top-start`, `bottom-start`],
		...rest
	} = props;

	const dropdownListRef = useRef(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const setListRef = useCallback((node: null, ref: (arg0: any) => any) => {
		dropdownListRef.current = node;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return ref(node);
	}, []);

	const modifiers = [
		{
			name: 'flip',
			options: {
				fallbackPlacements,
			},
		},
	];

	const onMouseLeave = isCloseAfterLeave && setIsOpen ? () => setIsOpen(false) : undefined;

	if (isOpen) {
		return (
			<Popper placement={placement} modifiers={modifiers}>
				{({ ref, style }) => (
					<ul
						data-component-name='Dropdown/DropdownMenu'
						role='presentation'
						// @ts-ignore
						// eslint-disable-next-line @typescript-eslint/no-unsafe-return
						ref={(node) => setListRef(node, ref)}
						// dynamic positioning must be disabled for responsive alignment
						style={style}
						data-placement={placement}
						className={classNames(
							classNames(
								'py-2',
								'z-[9999]',
								'border-zinc-300/25 bg-white shadow-lg dark:border-zinc-800/50 dark:bg-zinc-900',
								[`${borderWidth}`, `${rounded}`],
							),
							className,
						)}
						onMouseLeave={onMouseLeave}
						{...rest}>
						{children}
					</ul>
				)}
			</Popper>
		);
	}
	return null;
};
DropdownMenu.displayName = 'DropdownMenu';

interface IDropdownItemProps extends HTMLAttributes<HTMLLIElement> {
	children: ReactNode;
	className?: string;
	color?: TColors;
	colorIntensity?: TColorIntensity;
	isActive?: boolean;
	icon?: TIcons;
	rightIcon?: TIcons;
}
export const DropdownItem = forwardRef<HTMLLIElement, IDropdownItemProps>((props, ref) => {
	const {
		children,
		className,
		color = themeConfig.themeColor,
		colorIntensity = themeConfig.themeColorShade,
		isActive = false,
		icon,
		rightIcon,
		...rest
	} = props;
	const classes = classNames(
		'px-4 py-2',
		'flex items-center',
		'whitespace-nowrap',
		'cursor-pointer',
		'border-zinc-300/25 dark:border-zinc-800/50',
		{
			[`text-${color}-${colorIntensity}`]: isActive,
			'text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100': !isActive,
		},
		themeConfig.transition,
	);
	return (
		<li
			data-component-name='Dropdown/DropdownItem'
			ref={ref}
			className={classNames(classes, className)}
			{...rest}>
			{icon && <Icon icon={icon} className='inline-flex text-xl ltr:mr-1.5 rtl:ml-1.5' />}
			{children}
			{rightIcon && (
				<Icon icon={rightIcon} className='inline-flex text-xl ltr:ml-1.5 rtl:mr-1.5' />
			)}
		</li>
	);
});
DropdownItem.displayName = 'DropdownItem';

interface IDropdownNavLinkItemProps extends IDropdownItemProps {
	to: string;
}
export const DropdownNavLinkItem: FC<IDropdownNavLinkItemProps> = (props) => {
	const { to, children, ...rest } = props;

	const router = useRouter();
	const pathname = usePathname();
	const match = pathname === to;

	return (
		<DropdownItem {...rest} onClick={() => router.push(to)} isActive={match}>
			{children}
		</DropdownItem>
	);
};

export default Dropdown;
