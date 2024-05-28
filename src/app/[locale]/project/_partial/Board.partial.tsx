import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface IBoardPartialProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}
const BoardPartial: FC<IBoardPartialProps> = (props) => {
	const { children, className, ...rest } = props;
	return (
		<div
			data-component-name='BoardPart'
			className={classNames('inline-flex min-h-full min-w-full gap-4', className)}
			{...rest}>
			{children}
		</div>
	);
};

export default BoardPartial;
