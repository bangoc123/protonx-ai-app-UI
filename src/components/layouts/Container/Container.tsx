import React, { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';

type TContainerBreakpoint =
	| 'container'
	| 'sm:container'
	| 'md:container'
	| 'lg:container'
	| 'xl:container'
	| '2xl:container'
	| null;

interface IContainerProps {
	children: ReactNode;
	className?: string;
	breakpoint?: TContainerBreakpoint;
}

const Container = forwardRef<HTMLDivElement, IContainerProps>((props, ref) => {
	const { children, className, breakpoint = 'container', ...rest } = props;

	return (
		<div
			ref={ref}
			data-component-name='Container'
			className={classNames('mx-auto p-4', breakpoint, className)}
			{...rest}>
			{children}
		</div>
	);
});
Container.displayName = 'Container';

export default Container;
