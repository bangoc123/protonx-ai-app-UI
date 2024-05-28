import React, { Dispatch, FC, SetStateAction } from 'react';
import classNames from 'classnames';
import Button, { IButtonProps } from '@/components/ui/Button';

interface ICloseButtonProps extends IButtonProps {
	className?: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CloseButton: FC<ICloseButtonProps> = (props) => {
	const { className, setIsOpen, ...rest } = props;

	const classes = classNames(className);

	return (
		<Button
			data-component-name='CloseButton'
			icon='HeroXMark'
			color='red'
			className={classes}
			onClick={() => (setIsOpen ? setIsOpen(false) : undefined)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...rest}
		/>
	);
};
CloseButton.displayName = 'CloseButton';

export default CloseButton;
