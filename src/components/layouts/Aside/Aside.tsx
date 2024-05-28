import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import useAsideStatus from '../../../hooks/useAsideStatus';
import themeConfig from '../../../config/theme.config';

interface IAsideHeadProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}
export const AsideHead: FC<IAsideHeadProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Aside/AsideHead'
			className={classNames(
				'flex items-center justify-between px-6 pb-6 max-md:flex-row-reverse',
				className,
			)}
			{...rest}>
			{children}
		</div>
	);
};

interface IAsideBodyProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}
export const AsideBody: FC<IAsideBodyProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Aside/AsideBody'
			className={classNames('h-full overflow-x-scroll px-6', 'no-scrollbar', className)}
			{...rest}>
			{children}
		</div>
	);
};

interface IAsideFooterProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}
export const AsideFooter: FC<IAsideFooterProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Aside/AsideFooter'
			className={classNames('px-6', className)}
			{...rest}>
			{children}
		</div>
	);
};

interface IAsideProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
}
const Aside: FC<IAsideProps> = (props) => {
	const { children, className, ...rest } = props;

	const { asideStatus } = useAsideStatus();
	return (
		<aside
			data-component-name='Aside'
			className={classNames(
				'peer',
				'fixed bottom-0 top-0 z-30 md:z-20',
				'flex flex-col',
				'border-zinc-300/25 bg-white',
				'py-6',
				'ltr:border-r rtl:border-l',
				'dark:border-zinc-800/50 dark:bg-zinc-900 dark:text-white',
				themeConfig.transition,
				className,
				// Mobile Design
				'max-md:w-[20rem] max-md:shadow-2xl ltr:max-md:-left-[20rem] rtl:max-md:-right-[20rem]',
				{
					'md:w-[20rem]': asideStatus,
					'md:w-[6.225em]': !asideStatus,
					'ltr:max-md:-left-[20rem] rtl:max-md:-right-[20rem]': !asideStatus,
					'ltr:max-md:left-0 rtl:max-md:right-0': asideStatus,
				},
			)}
			{...rest}>
			{children}
		</aside>
	);
};

export default Aside;
