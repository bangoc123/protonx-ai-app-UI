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
import { TRounded } from '@/types/rounded.type';
import { TScreens } from '@/types/screens.type';
import useEventListener from '@/hooks/useEventListener';
import Portal from '@/components/layouts/Portal/Portal';
import themeConfig from '@/config/theme.config';
import CloseButton from '@/components/ui/CloseButton';

type TModalCustomSize = string | number;
type TModalStableSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TModalSize = TModalStableSize | TModalCustomSize;

const defaultProps = {
	isCentered: false,
	rounded: themeConfig.rounded,
	fullScreen: false,
	isScrollable: false,
};

const checkComp = (
	componentName: 'ModalHeader' | 'ModalBody' | 'ModalFooter',
	child:
		| ReactElement<IModalHeaderProps>
		| ReactElement<IModalBodyProps>
		| ReactElement<IModalFooterProps>,
): boolean => {
	return [componentName].includes(
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		child?.type?.displayName,
	);
};

interface IModalHeaderClonedProps {
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	titleId?: string;
}
interface IModalHeaderProps extends HTMLAttributes<HTMLDivElement>, IModalHeaderClonedProps {
	children: ReactNode;
	className?: string;
}
export const ModalHeader: FC<IModalHeaderProps> = (props) => {
	const { children, className, titleId, setIsOpen, ...rest } = props;

	const classes = classNames(
		'flex items-center justify-between px-4 pb-4 text-2xl font-semibold [&:first-child]:pt-4',
	);

	return (
		<div
			data-component-name='Modal/ModalHeader'
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
ModalHeader.displayName = 'ModalHeader';

interface IModalBodyClonedProps {
	isScrollable?: boolean;
}
interface IModalBodyProps extends HTMLAttributes<HTMLDivElement>, IModalBodyClonedProps {
	children: ReactNode;
	className?: string;
}
export const ModalBody: FC<IModalBodyProps> = (props) => {
	const { children, className, isScrollable = defaultProps.isScrollable, ...rest } = props;

	const classes = classNames('grow px-4 pb-4 [&:first-child]:pt-4', {
		'overflow-y-auto': isScrollable,
	});

	return (
		<div
			data-component-name='Modal/ModalBody'
			className={classNames(classes, className)}
			{...rest}>
			{children}
		</div>
	);
};
ModalBody.displayName = 'ModalBody';

interface IModalFooterChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
export const ModalFooterChild: FC<IModalFooterChildProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('flex items-center gap-4');

	return (
		<div
			data-component-name='Modal/ModalFooterChild'
			className={classNames(classes, className)}
			{...rest}>
			{children}
		</div>
	);
};
ModalFooterChild.displayName = 'ModalFooterChild';

interface IModalFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
export const ModalFooter: FC<IModalFooterProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('flex items-center justify-between px-4 pb-4 [&:first-child]:pt-4');

	return (
		<div
			data-component-name='Modal/ModalFooter'
			className={classNames(classes, className)}
			{...rest}>
			{children}
		</div>
	);
};
ModalFooter.displayName = 'ModalFooter';

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
			data-component-name='Modal/BackDrop'
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
	fullScreen?: TScreens | boolean;
	isScrollable?: boolean;
	rounded?: TRounded;
}
const Content: FC<IContentProps> = (props) => {
	const {
		children,
		fullScreen = defaultProps.fullScreen,
		isScrollable = defaultProps.isScrollable,
		rounded = defaultProps.rounded,
		...rest
	} = props;

	const classes = classNames(
		'pointer-events-auto relative flex w-full flex-col bg-white dark:bg-zinc-950',
		'shadow-2xl',
		[`${rounded}`],
		{
			'max-h-full overflow-hidden': isScrollable,
			'h-full': !!fullScreen,
			'rounded-none': typeof fullScreen !== 'string' && fullScreen,
			'max-2xl:rounded-none': fullScreen === '2xl',
			'max-xl:rounded-none': fullScreen === 'xl',
			'max-lg:rounded-none': fullScreen === 'lg',
			'max-md:rounded-none': fullScreen === 'md',
			'max-sm:rounded-none': fullScreen === 'sm',
		},
	);
	return (
		<div data-component-name='Modal/Content' className={classes} {...rest}>
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
	fullScreen?: TScreens | boolean;
	isCentered?: boolean;
	isScrollable?: boolean;
}
const Dialog = forwardRef<HTMLDivElement, IDialogProps>((props, ref) => {
	const {
		children,
		fullScreen = defaultProps.fullScreen,
		isCentered = defaultProps.isCentered,
		isScrollable = defaultProps.isScrollable,
		...rest
	} = props;

	const classes = classNames(
		'pointer-events-none relative mx-auto my-6 max-w-[var(--theme-modal-width)] w-full',
		{
			'h-[calc(100%-theme(margin.6)*2)]': isScrollable,
			'flex min-h-[calc(100%-theme(margin.6)*2)] items-center': isCentered && !fullScreen,
			'!m-0 !h-full !max-w-full': typeof fullScreen !== 'string' && fullScreen,
			'max-2xl:m-0 max-2xl:h-full max-2xl:!max-w-full': fullScreen === '2xl',
			'max-xl:m-0 max-xl:h-full max-xl:!max-w-full': fullScreen === 'xl',
			'max-lg:m-0 max-lg:h-full max-lg:!max-w-full': fullScreen === 'lg',
			'max-md:m-0 max-md:h-full max-md:!max-w-full': fullScreen === 'md',
			'max-sm:m-0 max-sm:h-full max-sm:!max-w-full': fullScreen === 'sm',
		},
	);

	return (
		<div data-component-name='Modal/Dialog' ref={ref} className={classes} {...rest}>
			{children}
		</div>
	);
});

export interface IModalProps extends MotionProps {
	children:
		| ReactElement<IModalHeaderProps>[]
		| ReactElement<IModalBodyProps>[]
		| ReactElement<IModalFooterProps>[];
	fullScreen?: TScreens | boolean;
	isAnimation?: boolean;
	isCentered?: boolean;
	isOpen: boolean;
	isScrollable?: boolean;
	isStaticBackdrop?: boolean;
	rounded?: TRounded;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	size?: TModalSize;
}
const Modal: FC<IModalProps> = (props) => {
	const {
		children,
		isOpen,
		setIsOpen,
		isStaticBackdrop = false,
		isScrollable = defaultProps.isScrollable,
		isCentered = defaultProps.isCentered,
		size = 'md',
		fullScreen = defaultProps.fullScreen,
		isAnimation = true,
		rounded = defaultProps.rounded,
		...rest
	} = props;
	const refModal = useRef(null);
	const ref = useRef(null);

	const titleId = useId();

	const modalSizes: {
		[key in TModalStableSize]: string;
	} = { sm: '40rem', md: '48rem', lg: '64rem', xl: '80rem', '2xl': '96rem' };
	const modalSize =
		(typeof size === 'number' && `${size}px`) ||
		(['sm', 'md', 'lg', 'xl', '2xl'].includes(size as TModalStableSize) &&
			modalSizes[size as TModalStableSize]) ||
		size;

	// Backdrop close function
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const closeModal = (event: { target: any }) => {
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		if (ref.current && !ref.current.contains(event.target) && !isStaticBackdrop) {
			setIsOpen(false);
		}
	};
	useEventListener('mousedown', closeModal);
	useEventListener('touchstart', closeModal); // Touchscreen

	// Backdrop static function
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const modalStatic = (event: { target: any }) => {
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		if (ref.current && !ref.current.contains(event.target) && isStaticBackdrop) {
			// @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
			refModal.current.classList.add('!scale-105');
			// @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
			setTimeout(() => refModal.current.classList.remove('!scale-105'), 300);
		}
	};
	useEventListener('mousedown', modalStatic);
	useEventListener('touchstart', modalStatic); // Touchscreen

	// Keypress close function
	const escFunction = (event: { key: string }) => {
		if (event.key === 'Escape') {
			setIsOpen(false);
		}
	};
	useEventListener('keydown', escFunction);

	const animationProps = isAnimation
		? {
				initial: { opacity: 0, y: '-50%' },
				animate: { opacity: 1, x: '0%', y: '0%' },
				exit: { opacity: 0, y: '-50%' },
				transition: { ease: 'easeInOut', duration: 0.3 },
			}
		: null;

	return (
		<Portal>
			<AnimatePresence>
				{isOpen && (
					<>
						<style>{`:root {--theme-modal-width: ${modalSize as string}}`}</style>
						<motion.div
							data-component-name='Modal'
							ref={refModal}
							key='modal'
							className={classNames(
								'fixed left-0 top-0 z-[1055] block h-full w-full overflow-y-auto overflow-x-hidden',
								{
									[`${themeConfig.transition}`]: isStaticBackdrop,
								},
							)}
							role='dialog'
							tabIndex={-1}
							aria-labelledby={titleId}
							aria-hidden='true'
							{...animationProps}
							{...rest}>
							<Dialog
								ref={ref}
								isCentered={isCentered}
								fullScreen={fullScreen}
								isScrollable={isScrollable}>
								<Content
									rounded={rounded}
									fullScreen={fullScreen}
									isScrollable={isScrollable}>
									{Children.map(
										children,
										(child) =>
											(checkComp('ModalHeader', child) &&
												cloneElement(child, {
													// @ts-ignore
													setIsOpen,
													titleId,
												})) ||
											(checkComp('ModalBody', child) &&
												cloneElement(child, {
													// @ts-ignore
													isScrollable,
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

export default Modal;
