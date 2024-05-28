import React, { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '../../components/ui/Card';
import Icon from '../../components/icon/Icon';

interface IDocContentProps {
	children: ReactNode;
	className?: string;
}
export const DocContent = forwardRef<HTMLDivElement, IDocContentProps>((props, ref) => {
	const { children, className, ...rest } = props;

	return (
		<div
			ref={ref}
			className={classNames(
				'col-span-12 md:col-span-8 lg:col-span-9 2xl:col-span-10',
				className,
			)}
			{...rest}>
			<div className='grid grid-cols-12 gap-4'>{children}</div>
		</div>
	);
});
DocContent.displayName = 'DocContent';

interface IDocNavProps {
	children: ReactNode;
	className?: string;
}
export const DocNav = forwardRef<HTMLDivElement, IDocNavProps>((props, ref) => {
	const { children, className, ...rest } = props;

	return (
		<div
			ref={ref}
			className={classNames(
				'hidden md:col-span-4 md:block lg:col-span-3 2xl:col-span-2',
				className,
			)}
			{...rest}>
			<Card className='top-scroll-offset sticky'>
				<CardHeader>
					<CardHeaderChild>
						<CardTitle className='gap-4'>
							<Icon icon='HeroRocketLaunch' />
							Quick Menu
						</CardTitle>
					</CardHeaderChild>
				</CardHeader>
				<CardBody>
					<div className='flex flex-col items-start'>{children}</div>
				</CardBody>
			</Card>
		</div>
	);
});
DocNav.displayName = 'DocNav';

interface IDocProps {
	children: ReactNode;
	className?: string;
}
const Doc = forwardRef<HTMLDivElement, IDocProps>((props, ref) => {
	const { children, className, ...rest } = props;

	return (
		<div ref={ref} className={classNames('grid grid-cols-12 gap-4', className)} {...rest}>
			{children}
		</div>
	);
});
Doc.displayName = 'Doc';

export default Doc;
