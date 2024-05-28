'use client';

import React, { FC, HTMLAttributes, ReactNode, useEffect, useId, useState } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { TIcons } from '@/types/icons.type';
import { TColors } from '@/types/colors.type';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useCurrentLocale } from 'next-i18n-router/client';
import TranslationsProvider from '@/components/TranslationsProvider';
import { useTranslation } from 'react-i18next';
import { StaticImageData } from 'next/image';
import purePathnameUtil from '@/utils/purePathname.util';
import Icon, { IIconProps } from '../../icon/Icon';
import useAsideStatus from '../../../hooks/useAsideStatus';
import themeConfig from '../../../config/theme.config';
import Tooltip from '../../ui/Tooltip';
import Avatar from '../../Avatar';
import i18nConfig from '../../../../i18nConfig';

const i18nNamespaces = ['translation'];

const navItemClasses = {
	default: classNames(
		'mb-2 p-3',
		'flex items-center',
		'cursor-pointer',
		'overflow-hidden',
		'rounded-xl',
		'border',
		'text-zinc-500',
		'hover:text-zinc-950 dark:hover:text-zinc-100',
		'grow',
		themeConfig.transition,
	),
	inactive: 'border-transparent',
	active: 'border-zinc-300 text-zinc-950 dark:border-zinc-800 dark:text-zinc-100',
	here: 'text-zinc-950 dark:text-zinc-100 border-transparent',
};

const navItemChildCheck = (
	children:
		| React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
		| string
		| number
		| Iterable<React.ReactNode>
		| React.ReactPortal
		| boolean
		| null
		| undefined
		| INavButtonProps,
): boolean => {
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return children?.length > 1
		? // @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
			children?.map((child) => child.type.displayName).includes('NavButton')
		: // @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
			children?.type?.displayName === 'NavButton';
};

interface INavItemTextProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
const NavItemText: FC<INavItemTextProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Nav/NavItemText'
			className={classNames('overflow-hidden truncate whitespace-nowrap', className)}
			{...rest}>
			{children}
		</div>
	);
};
NavItemText.displayName = 'NavItemText';

interface INavItemContentProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
const NavItemContent: FC<INavItemContentProps> = (props) => {
	const { children, className, ...rest } = props;

	const { asideStatus } = useAsideStatus();

	return (
		<div
			data-component-name='Nav/NavItemContent'
			className={classNames(
				'flex w-full items-center justify-between truncate',
				{
					hidden: !asideStatus,
				},
				className,
			)}
			{...rest}>
			{children}
		</div>
	);
};
NavItemContent.displayName = 'NavItemContent';

interface INavIconProps extends Partial<IIconProps> {
	icon?: TIcons;
	className?: string;
}
const NavIcon: FC<INavIconProps> = (props) => {
	const { className, icon = 'HeroMinus' } = props;

	const { asideStatus } = useAsideStatus();

	return (
		<Icon
			data-component-name='Nav/NavIcon'
			icon={icon}
			className={classNames(
				'w-6 flex-none text-2xl',
				{
					'me-3': asideStatus,
				},
				className,
			)}
		/>
	);
};
NavIcon.displayName = 'NavIcon';

interface INavButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	icon: TIcons;
	iconColor?: TColors;
	iconClassName?: string;
	title: string;
}
export const NavButton: FC<INavButtonProps> = (props) => {
	const { icon, iconColor, className, iconClassName, ...rest } = props;

	return (
		<button
			data-component-name='Nav/NavButton'
			type='button'
			className={classNames(className)}
			{...rest}>
			<Icon
				icon={icon}
				color={iconColor}
				size='text-2xl'
				className={classNames(
					{
						'text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100': !iconColor,
					},
					themeConfig.transition,
					iconClassName,
				)}
			/>
		</button>
	);
};
NavButton.displayName = 'NavButton';

interface INavItemProps extends HTMLAttributes<HTMLLIElement> {
	children?: ReactNode;
	icon?: TIcons;
	text: string;
	to?: string;
	className?: string;
}
export const NavItem: FC<INavItemProps> = (props) => {
	const { children, icon, text, to, className, ...rest } = props;

	const { t } = useTranslation();

	const { asideStatus, setAsideStatus } = useAsideStatus();

	// @ts-ignore
	const isChildrenNavButton = navItemChildCheck(children);

	const CONTENT = (
		<>
			<NavIcon icon={icon} />
			<NavItemContent>
				<NavItemText>{t(text)}</NavItemText>
				{children && !isChildrenNavButton && <div>{children as ReactNode}</div>}
			</NavItemContent>
		</>
	);

	const pathname = usePathname();
	const purePath = purePathnameUtil(pathname);

	return (
		<Tooltip text={asideStatus ? '' : t(text)} placement='right'>
			<li
				data-component-name='Nav/NavItem'
				className={classNames(
					'flex list-none items-center overflow-hidden whitespace-nowrap',
					className,
				)}
				{...rest}>
				{to ? (
					<>
						{/* For Desktop */}
						<Link
							href={to}
							className={
								purePath === to
									? classNames(
											navItemClasses.default,
											navItemClasses.active,
											'max-md:hidden',
										)
									: classNames(
											navItemClasses.default,
											navItemClasses.inactive,
											'max-md:hidden',
										)
							}>
							{CONTENT}
						</Link>
						{/* For Mobile */}
						<Link
							href={to}
							onClick={() => setAsideStatus(false)}
							className={
								purePath === to
									? classNames(
											navItemClasses.default,
											navItemClasses.active,
											'md:hidden',
										)
									: classNames(
											navItemClasses.default,
											navItemClasses.inactive,
											'md:hidden',
										)
							}>
							{CONTENT}
						</Link>
					</>
				) : (
					<>
						{/* For Desktop */}
						<div
							className={classNames(
								navItemClasses.default,
								navItemClasses.inactive,
								'max-md:hidden',
							)}>
							{CONTENT}
						</div>
						{/* For Mobile */}
						<div
							className={classNames(
								navItemClasses.default,
								navItemClasses.inactive,
								'md:hidden',
							)}>
							{CONTENT}
						</div>
					</>
				)}
				{asideStatus && children && isChildrenNavButton && (
					<div className='mb-2 flex items-center gap-3 px-3'>{children as ReactNode}</div>
				)}
			</li>
		</Tooltip>
	);
};
NavItem.displayName = 'NavItem';

interface INavCollapseProps extends HTMLAttributes<HTMLLIElement> {
	children: ReactNode;
	icon?: TIcons;
	text: string;
	to: string;
	className?: string;
}
export const NavCollapse: FC<INavCollapseProps> = (props) => {
	const { children, icon, text, className, to, ...rest } = props;

	const { t } = useTranslation();

	const id = useId();
	const [isActive, setIsActive] = useState<boolean>(false);

	const { asideStatus } = useAsideStatus();

	const pathname = usePathname();

	const here = to !== '/' && pathname.includes(to);

	useEffect(() => {
		setIsActive(here);
	}, [here, pathname]);

	return (
		<li
			data-component-name='Nav/NavCollapse'
			className={classNames('list-none overflow-hidden', className)}
			{...rest}>
			<Tooltip text={asideStatus ? '' : t(text)} placement='right'>
				<div
					role='presentation'
					className={
						isActive || here
							? classNames(navItemClasses.default, navItemClasses.here)
							: classNames(navItemClasses.default, navItemClasses.inactive)
					}
					onClick={() => setIsActive(!isActive)}>
					<NavIcon icon={icon} />

					<NavItemContent>
						<NavItemText>{t(text)}</NavItemText>
						<div>
							<Icon
								icon='HeroChevronDown'
								className={classNames(
									'text-2xl',
									{
										'rotate-180': isActive,
									},
									themeConfig.transition,
								)}
							/>
						</div>
					</NavItemContent>
				</div>
			</Tooltip>
			<AnimatePresence>
				{isActive && (
					<motion.ul
						key={id}
						initial='collapsed'
						animate='open'
						exit='collapsed'
						variants={{
							open: { height: 'auto' },
							collapsed: { height: 0 },
						}}
						transition={{ duration: 0.3 }}
						className={classNames('!transition-margin !duration-300 !ease-in-out', {
							'ms-4': asideStatus,
						})}>
						{children}
					</motion.ul>
				)}
			</AnimatePresence>
		</li>
	);
};
NavCollapse.displayName = 'NavCollapse';

interface INavTitleProps extends HTMLAttributes<HTMLLIElement> {
	children: string;
	className?: string;
}
export const NavTitle: FC<INavTitleProps> = (props) => {
	const { children, className, ...rest } = props;

	const { t } = useTranslation();

	const { asideStatus } = useAsideStatus();

	return (
		<Tooltip text={asideStatus ? '' : t(children)} placement='right'>
			<li
				data-component-name='Nav/NavTitle'
				className={classNames(
					'list-none overflow-hidden truncate whitespace-nowrap px-3 py-1.5 text-sm font-semibold text-zinc-500',
					className,
				)}
				{...rest}>
				{asideStatus ? (
					children
				) : (
					<div className='my-1.5 h-2 w-full max-w-[6rem] rounded-full bg-zinc-500' />
				)}
			</li>
		</Tooltip>
	);
};
NavTitle.displayName = 'NavTitle';

interface INavUserProps extends HTMLAttributes<HTMLLIElement> {
	children?: ReactNode;
	image?: string | StaticImageData;
	text: string;
	to?: string;
	className?: string;
}
export const NavUser: FC<INavUserProps> = (props) => {
	const { children, image, text, to, className, ...rest } = props;

	const { t } = useTranslation();

	const { asideStatus, setAsideStatus } = useAsideStatus();

	// @ts-ignore
	const isChildrenNavButton = navItemChildCheck(children);

	const CONTENT = (
		<>
			<Avatar
				src={image}
				name={text}
				className={classNames('w-6 rounded-full', {
					'me-3': asideStatus,
				})}
				rounded='rounded'
			/>
			<NavItemContent>
				<NavItemText>{t(text)}</NavItemText>
				{children && !isChildrenNavButton && <div>{children as ReactNode}</div>}
			</NavItemContent>
		</>
	);

	const pathname = usePathname();
	const purePath = purePathnameUtil(pathname);

	return (
		<Tooltip text={asideStatus ? '' : t(text)} placement='right'>
			<li
				data-component-name='Nav/NavUser'
				className={classNames(
					'flex list-none items-center overflow-hidden whitespace-nowrap',
					className,
				)}
				{...rest}>
				{to ? (
					<>
						{/* For Desktop */}
						<Link
							href={to}
							className={
								purePath === to
									? classNames(
											navItemClasses.default,
											navItemClasses.active,
											'max-md:hidden',
										)
									: classNames(
											navItemClasses.default,
											navItemClasses.inactive,
											'max-md:hidden',
										)
							}>
							{CONTENT}
						</Link>
						{/* For Mobile */}
						<Link
							href={to}
							onClick={() => setAsideStatus(false)}
							className={
								purePath === to
									? classNames(
											navItemClasses.default,
											navItemClasses.active,
											'md:hidden',
										)
									: classNames(
											navItemClasses.default,
											navItemClasses.inactive,
											'md:hidden',
										)
							}>
							{CONTENT}
						</Link>
					</>
				) : (
					<>
						{/* For Desktop */}
						<div
							className={classNames(
								navItemClasses.default,
								navItemClasses.inactive,
								'max-md:hidden',
							)}>
							{CONTENT}
						</div>
						{/* For Mobile */}
						<div
							className={classNames(
								navItemClasses.default,
								navItemClasses.inactive,
								'md:hidden',
							)}>
							{CONTENT}
						</div>
					</>
				)}
				{asideStatus && children && isChildrenNavButton && (
					<div className='mb-2 flex items-center gap-3 px-3'>{children as ReactNode}</div>
				)}
			</li>
		</Tooltip>
	);
};
NavUser.displayName = 'NavUser';

interface INavSeparatorProps extends HTMLAttributes<HTMLLIElement> {
	className?: string;
}
export const NavSeparator: FC<INavSeparatorProps> = (props) => {
	const { className, ...rest } = props;
	return (
		<li
			data-component-name='Nav/NavSeparator'
			className={classNames(
				'mb-2 list-none rounded-full border-b border-zinc-500/25',
				className,
			)}
			{...rest}
		/>
	);
};
NavSeparator.displayName = 'NavSeparator';

interface INavProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
const Nav: FC<INavProps> = (props) => {
	const { children, className, ...rest } = props;
	const locale = useCurrentLocale(i18nConfig);

	return (
		<TranslationsProvider namespaces={i18nNamespaces} locale={locale || 'en'}>
			<nav data-component-name='Nav' className={classNames(className)} {...rest}>
				<ul>{children}</ul>
			</nav>
		</TranslationsProvider>
	);
};
Nav.displayName = 'Nav';

export default Nav;
