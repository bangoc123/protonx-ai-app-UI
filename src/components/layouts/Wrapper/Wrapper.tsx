'use client';

import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import useAsideStatus from '../../../hooks/useAsideStatus';
import themeConfig from '../../../config/theme.config';

interface IWrapperProps {
	children: ReactNode;
	className?: string;
}
const Wrapper: FC<IWrapperProps> = (props) => {
	const { children, className, ...rest } = props;

	const { asideStatus } = useAsideStatus();

	return (
		<section
			data-component-name='Wrapper'
			className={classNames('flex flex-auto flex-col', themeConfig.transition, className, {
				'ltr:peer-[]:md:pl-[20rem] rtl:peer-[]:md:pr-[20rem]': asideStatus,
				// Mobile Design
				'ltr:peer-[]:md:pl-[6.225em] rtl:peer-[]:md:pr-[6.225em]': !asideStatus,
			})}
			{...rest}>
			{children}
		</section>
	);
};

export default Wrapper;
