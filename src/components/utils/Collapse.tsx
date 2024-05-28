import React, { FC, ReactNode } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import classNames from 'classnames';

interface ICollapseProps extends MotionProps {
	children: ReactNode;
	className?: string;
	isOpen?: boolean;
}
const Collapse: FC<ICollapseProps> = (props) => {
	const { children, isOpen = false, className, ...rest } = props;
	return (
		<AnimatePresence initial={false}>
			{isOpen && (
				<motion.div
					data-component-name='Collapse'
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
					className={classNames('overflow-hidden', className)}
					{...rest}>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Collapse;
