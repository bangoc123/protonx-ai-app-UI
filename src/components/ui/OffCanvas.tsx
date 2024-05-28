'use client';

import React, {
	Children,
	cloneElement,
	Dispatch,
	FC,
	forwardRef,
	HTMLAttributes,
	ReactElement,
	ReactNode,
	SetStateAction,
	useId,
	useRef,
} from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import classNames from 'classnames';
import useEventListener from '@/hooks/useEventListener';
import Portal from '@/components/layouts/Portal/Portal';
import CloseButton from '@/components/ui/CloseButton';
import themeConfig from '@/config/theme.config';

type TOffCanvasPositionVertical = 'top' | 'bottom';
type TOffCanvasPositionHorizontal = 'left' | 'right';
export type TOffCanvasPosition = TOffCanvasPositionVertical | TOffCanvasPositionHorizontal;

const defaultProps: { position: TOffCanvasPosition } = {
	position: 'right',
};

const checkComp = (
	componentName: 'OffCanvasHeader' | 'OffCanvasBody' | 'OffCanvasFooter',
	child:
		| ReactElement<IOffCanvasHeaderProps>
		| ReactElement<IOffCanvasBodyProps>
		| ReactElement<IOffCanvasFooterProps>,
): boolean => {
	return [componentName].includes(
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		child?.type?.displayName,
	);
};

interface IOffCanvasHeaderClonedProps {
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	titleId?: string;
}
interface IOffCanvasHeaderProps
	extends HTMLAttributes<HTMLDivElement>,
		IOffCanvasHeaderClonedProps {
	children: ReactNode;
	className?: string;
}
export const OffCanvasHeader: FC<IOffCanvasHeaderProps> = (props) => {
	const { children, className, titleId, setIsOpen, ...rest } = props;

	const classes = classNames(
		'flex items-center justify-between px-4 pb-4 text-2xl font-semibold [&:first-child]:pt-4',
	);

	return (
		<div
			data-component-name='OffCanvas/OffCanvasHeader'
			className={classNames(classes, className)}
			{...rest}>
			<div id={titleId} className='flex items-center'>
				{children}
			</div>
			<div className='flex items-center'>
				<CloseButton setIsOpen={() => (setIsOpen ? setIsOpen(false) : undefined)} />
			</div>
		</div>
	);
};
OffCanvasHeader.displayName = 'OffCanvasHeader';

interface IOffCanvasBodyProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
export const OffCanvasBody: FC<IOffCanvasBodyProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('grow px-4 pb-4 [&:first-child]:pt-4', 'overflow-y-auto');

	return (
		<div
			data-component-name='OffCanvas/OffCanvasBody'
			className={classNames(classes, className)}
			{...rest}>
			{children}
		</div>
	);
};
OffCanvasBody.displayName = 'OffCanvasBody';

interface IOffCanvasFooterChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
export const OffCanvasFooterChild: FC<IOffCanvasFooterChildProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('flex items-center gap-4');

	return (
		<div
			data-component-name='OffCanvas/OffCanvasFooterChild'
			className={classNames(classes, className)}
			{...rest}>
			{children}
		</div>
	);
};
OffCanvasFooterChild.displayName = 'OffCanvasFooterChild';

interface IOffCanvasFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
export const OffCanvasFooter: FC<IOffCanvasFooterProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('flex items-center justify-between px-4 pb-4 [&:first-child]:pt-4');

	return (
		<div
			data-component-name='OffCanvas/OffCanvasFooter'
			className={classNames(classes, className)}
			{...rest}>
			{children}
		</div>
	);
};
OffCanvasFooter.displayName = 'OffCanvasFooter';

/**
 * BackDrop
 * @constructor
 */
const BackDrop = () => {
	const animationProps = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { ease: 'easeInOut', duration: 0.3 },
	};
	return (
		<motion.div
			data-component-name='OffCanvas/BackDrop'
			{...animationProps}
			className='fixed left-0 top-0 z-[1050] h-screen w-screen backdrop-blur-sm'
		/>
	);
};

/**
 * Content
 * @constructor
 */
interface IContentProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
const Content: FC<IContentProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames(
		'pointer-events-auto relative flex h-full w-full flex-col overflow-hidden bg-white/75 dark:bg-zinc-950/95 backdrop-blur-md',
		className,
	);
	return (
		<div data-component-name='OffCanvas/Content' className={classes} {...rest}>
			{children}
		</div>
	);
};

/**
 * Dialog
 * @constructor
 */
interface IDialogProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	position?: TOffCanvasPosition;
	className?: string;
}
const Dialog = forwardRef<HTMLDivElement, IDialogProps>((props, ref) => {
	const { children, position = defaultProps.position, className, ...rest } = props;

	const classes = classNames(
		'pointer-events-none fixed w-full h-full shadow-2xl',
		{
			'max-w-[30rem]': ['right', 'left'].includes(position as TOffCanvasPositionHorizontal),
			'left-0': position === 'left',
			'right-0': position === 'right',
			'max-h-[30rem]': ['top', 'bottom'].includes(position as TOffCanvasPositionVertical),
			'top-0': position === 'top',
			'bottom-0': position === 'bottom',
		},
		className,
	);

	return (
		<div data-component-name='OffCanvas/Dialog' ref={ref} className={classes} {...rest}>
			{children}
		</div>
	);
});

export interface IOffCanvasProps extends MotionProps {
	children:
		| ReactElement<IOffCanvasHeaderProps>[]
		| ReactElement<IOffCanvasBodyProps>[]
		| ReactElement<IOffCanvasFooterProps>[];
	isAnimation?: boolean;
	isOpen: boolean;
	isStaticBackdrop?: boolean;
	position?: TOffCanvasPosition;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	dialogClassName?: string;
	contentClassName?: string;
}
const OffCanvas: FC<IOffCanvasProps> = (props) => {
	const {
		children,
		isOpen,
		setIsOpen,
		isStaticBackdrop = false,
		isAnimation = true,
		position = defaultProps.position,
		dialogClassName,
		contentClassName,
		...rest
	} = props;
	const refOffCanvas = useRef(null);
	const ref = useRef(null);

	const titleId = useId();

	// Backdrop close function
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const closeOffCanvas = (event: { target: any }) => {
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		if (ref.current && !ref.current.contains(event.target) && !isStaticBackdrop) {
			setIsOpen(false);
		}
	};
	useEventListener('mousedown', closeOffCanvas);
	useEventListener('touchstart', closeOffCanvas); // Touchscreen

	// Backdrop static function
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const offCanvasStatic = (event: { target: any }) => {
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		if (ref.current && !ref.current.contains(event.target) && isStaticBackdrop) {
			// @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
			refOffCanvas.current.classList.add('!scale-105');
			// @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
			setTimeout(() => refOffCanvas.current.classList.remove('!scale-105'), 300);
		}
	};
	useEventListener('mousedown', offCanvasStatic);
	useEventListener('touchstart', offCanvasStatic); // Touchscreen

	// Keypress close function
	const escFunction = (event: { key: string }) => {
		if (event.key === 'Escape') {
			setIsOpen(false);
		}
	};
	useEventListener('keydown', escFunction);

	const animationProps = isAnimation
		? {
				animate: { opacity: 1, x: '0%', y: '0%' },
				transition: { ease: 'easeInOut', duration: 0.3 },
			}
		: null;

	const animationPositionProps = isAnimation
		? {
				top: {
					initial: { opacity: 0, y: '-50%' },
					exit: { opacity: 0, y: '-50%' },
				},
				right: {
					initial: { opacity: 0, x: '50%' },
					exit: { opacity: 0, x: '50%' },
				},
				bottom: {
					initial: { opacity: 0, y: '50%' },
					exit: { opacity: 0, y: '50%' },
				},
				left: {
					initial: { opacity: 0, x: '-50%' },
					exit: { opacity: 0, x: '-50%' },
				},
			}
		: null;

	const classes = classNames(
		'fixed left-0 top-0 z-[1055] block h-full w-full overflow-y-auto overflow-x-hidden',
		{ [`${themeConfig.transition}`]: isStaticBackdrop },
	);

	return (
		<Portal>
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							data-component-name='OffCanvas'
							ref={refOffCanvas}
							key='offCanvas'
							className={classes}
							role='dialog'
							tabIndex={-1}
							aria-labelledby={titleId}
							aria-hidden='true'
							{...animationProps}
							{...animationPositionProps?.[position || 'right']}
							{...rest}>
							<Dialog ref={ref} position={position} className={dialogClassName}>
								<Content className={contentClassName}>
									{Children.map(
										children,
										(child) =>
											(checkComp('OffCanvasHeader', child) &&
												cloneElement(child, {
													// @ts-ignore
													setIsOpen,
													titleId,
												})) ||
											child,
									)}
								</Content>
							</Dialog>
						</motion.div>
						<BackDrop />
					</>
				)}
			</AnimatePresence>
		</Portal>
	);
};

export default OffCanvas;
