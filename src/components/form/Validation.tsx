import React, { cloneElement, FC, ReactElement } from 'react';

export interface IValidationBaseProps {
	isValidMessage?: boolean;
	isValid: boolean;
	isTouched: boolean | undefined;
	invalidFeedback: string | undefined;
	validFeedback?: string;
}

interface IValidationProps extends IValidationBaseProps {
	children: ReactElement;
}
const Validation: FC<IValidationProps> = (props) => {
	const {
		children,
		isValidMessage = true,
		isValid,
		isTouched,
		invalidFeedback,
		validFeedback,
	} = props;
	return (
		<>
			{cloneElement(children, {
				isValid,
				isTouched,
				invalidFeedback,
			})}
			{isValidMessage && !isValid && isTouched && (
				<>
					{invalidFeedback && (
						<div
							data-component-name='Validation'
							className='mt-2 text-xs text-red-500/70'>
							{invalidFeedback
								.split('.')
								.filter((i) => i !== '')
								.map((i) => (
									<p key={i}>{i}.</p>
								))}
						</div>
					)}
					{!invalidFeedback && validFeedback && (
						<div
							data-component-name='Validation'
							className='mt-2 text-xs text-green-500/70'>
							{validFeedback
								.split('.')
								.filter((i) => i !== '')
								.map((i) => (
									<p key={i}>{i}.</p>
								))}
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Validation;
