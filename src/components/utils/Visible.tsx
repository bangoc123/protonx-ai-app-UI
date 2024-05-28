import React, { FC, ReactNode } from 'react';

interface IVisibleProps {
	children: ReactNode;
	is: boolean;
}
const Visible: FC<IVisibleProps> = (props) => {
	const { children, is } = props;
	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (is) return <>{children}</>;
	return null;
};

export default Visible;
