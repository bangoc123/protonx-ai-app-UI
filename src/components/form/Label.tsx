import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import Tooltip from '../ui/Tooltip';

interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
	children: ReactNode;
	description?: string;
	className?: string;
	htmlFor: string;
}
const Label: FC<ILabelProps> = (props) => {
	const { children, className, description, ...rest } = props;
	return (
		<label
			data-component-name='Label'
			className={classNames('mb-2 inline-block w-full cursor-pointer text-sm', className)}
			{...rest}>
			{children}
			{description && <Tooltip className='ms-2 align-baseline' text={description} />}
		</label>
	);
};

export default Label;
