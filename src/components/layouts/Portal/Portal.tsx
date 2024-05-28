import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
	children: ReactNode;
	id?: string;
}
const Portal: FC<IPortalProps> = ({ id = 'portal-root', children }) => {
	const mount = typeof window !== 'undefined' && document.getElementById(id);
	if (mount) return ReactDOM.createPortal(children, mount);
	return null;
};

export default Portal;
