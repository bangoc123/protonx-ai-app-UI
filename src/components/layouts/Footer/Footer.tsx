import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface IFooterLeftProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}
export const FooterLeft: FC<IFooterLeftProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Footer/FooterLeft'
			className={classNames(
				'flex items-center gap-4',
				'ltr:md:mr-auto rtl:md:ml-auto',
				className,
			)}
			{...rest}>
			{children}
		</div>
	);
};
FooterLeft.displayName = 'FooterLeft';

interface IFooterRightProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}
export const FooterRight: FC<IFooterRightProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Footer/FooterRight'
			className={classNames(
				'flex items-center gap-4',
				'ltr:md:ml-auto rtl:md:mr-auto',
				className,
			)}
			{...rest}>
			{children}
		</div>
	);
};
FooterRight.displayName = 'FooterRight';

interface IFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
const Footer: FC<IFooterProps> = (props) => {
	const { children, className = undefined, ...rest } = props;

	return (
		<footer
			data-component-name='Footer'
			className={classNames('flex justify-between gap-4 p-6 text-sm', className)}
			{...rest}>
			{children}
		</footer>
	);
};
Footer.displayName = 'Footer';

export default Footer;
