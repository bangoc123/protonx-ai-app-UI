'use client';

import React, { FC, HTMLAttributes, ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { TRounded } from '@/types/rounded.type';
import useRoundedSize from '@/hooks/useRoundedSize';
import themeConfig from '@/config/theme.config';
import Mounted from '@/components/Mounted';

interface ICardTitleProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
export const CardTitle: FC<ICardTitleProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('flex items-center text-2xl font-semibold', className);

	return (
		<div data-component-name='Card/CardTitle' className={classes} {...rest}>
			{children}
		</div>
	);
};

interface ICardHeaderChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
export const CardHeaderChild: FC<ICardHeaderChildProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('flex flex-wrap items-center gap-4', className);

	return (
		<div data-component-name='Card/CardHeaderChild' className={classes} {...rest}>
			{children}
		</div>
	);
};

interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
export const CardHeader: FC<ICardHeaderProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames(
		'flex flex-wrap items-center justify-between gap-4 px-4 pb-4 [&:first-child]:pt-4',
		className,
	);

	return (
		<div data-component-name='Card/CardHeader' className={classes} {...rest}>
			{children}
		</div>
	);
};

interface ICardBodyProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
export const CardBody: FC<ICardBodyProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('grow px-4 pb-4 [&:first-child]:pt-4', className);

	return (
		<div data-component-name='Card/CardBody' className={classes} {...rest}>
			{children}
		</div>
	);
};

interface ICardBodyCollapseProps {
	children: ReactNode;
	className?: string;
	isOpen: boolean;
}
export const CardBodyCollapse: FC<ICardBodyCollapseProps> = (props) => {
	const { children, className, isOpen, ...rest } = props;

	const classes = classNames('px-4 grow overflow-hidden [&:first-child]:pt-4 pb-4', className);

	return (
		<Mounted>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						data-component-name='Card/CardBodyCollapse'
						key='content'
						initial='collapsed'
						animate='open'
						exit='collapsed'
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{
							duration: 0.8,
							ease: [0.04, 0.62, 0.23, 0.98],
						}}
						className={classes}
						{...rest}>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</Mounted>
	);
};

interface ICardFooterChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
export const CardFooterChild: FC<ICardFooterChildProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('flex flex-wrap items-center gap-4', className);

	return (
		<div data-component-name='Card/CardFooterChild' className={classes} {...rest}>
			{children}
		</div>
	);
};

interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
export const CardFooter: FC<ICardFooterProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames(
		'flex flex-wrap items-center justify-between gap-4 px-4 pb-4 [&:first-child]:pt-4',
		className,
	);

	return (
		<div data-component-name='Card/CardFooter' className={classes} {...rest}>
			{children}
		</div>
	);
};

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	rounded?: TRounded | 'auto';
}
const Card = forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
	const { children, className, rounded = 'auto', ...rest } = props;

	const { roundedCustom } = useRoundedSize(themeConfig.rounded);

	const cardClasses = classNames(
		'flex flex-col bg-white dark:bg-zinc-900',
		{ [`${rounded as TRounded}`]: rounded !== 'auto' },
		{ [`${roundedCustom(1)}`]: rounded === 'auto' },
		className,
	);

	return (
		<div ref={ref} data-component-name='Card' className={cardClasses} {...rest}>
			{children}
		</div>
	);
});

export default Card;
