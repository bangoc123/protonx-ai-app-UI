'use client';

import React, { FC, HTMLAttributes, ReactNode, useRef } from 'react';
import classNames from 'classnames';
import useDomRect from '../../../hooks/useDomRect';

interface ISubheaderLeftProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}
export const SubheaderLeft: FC<ISubheaderLeftProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Subheader/SubheaderLeft'
			className={classNames('flex flex-wrap items-center gap-4', 'md:me-auto', className)}
			{...rest}>
			{children}
		</div>
	);
};
SubheaderLeft.displayName = 'SubheaderLeft';

interface ISubheaderRightProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}
export const SubheaderRight: FC<ISubheaderRightProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Subheader/SubheaderRight'
			className={classNames(
				'flex flex-shrink-0 flex-wrap items-center gap-4',
				'md:ms-auto',
				className,
			)}
			{...rest}>
			{children}
		</div>
	);
};
SubheaderRight.displayName = 'SubheaderRight';

type ISubheaderSeparatorProps = HTMLAttributes<HTMLDivElement>;
export const SubheaderSeparator: FC<ISubheaderSeparatorProps> = (props) => {
	const { className, ...rest } = props;

	return (
		<div
			data-component-name='Subheader/SubheaderSeparator'
			className={classNames(
				'h-full border-e border-zinc-300/25 dark:border-zinc-800/50',
				className,
			)}
			{...rest}
		/>
	);
};
SubheaderSeparator.displayName = 'SubheaderSeparator';

interface ISubheaderProps {
	children: ReactNode;
	className?: string;
}
const Subheader: FC<ISubheaderProps> = (props) => {
	const { children, className = undefined, ...rest } = props;

	const divRef = useRef<HTMLDivElement>(null);
	const [domRect] = useDomRect(divRef);

	return (
		<>
			<style>{`:root {--subheader-height: ${domRect?.height || 0}px}`}</style>
			<div
				data-component-name='Subheader'
				ref={divRef}
				className={classNames(
					'sticky top-[var(--header-height)] z-[9]',
					'flex flex-wrap justify-between gap-4',
					'border-b border-zinc-300/25 bg-white/75',
					'px-6 py-4',
					'backdrop-blur-md',
					'dark:border-zinc-800/50 dark:bg-zinc-900/75 dark:text-white',
					className,
				)}
				{...rest}>
				{children}
			</div>
		</>
	);
};
Subheader.displayName = 'Subheader';

export default Subheader;
