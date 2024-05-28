export interface IValidationProps {
	invalidFeedback?: string;
	isTouched?: boolean;
	isValid?: boolean;
	isValidMessage?: boolean;
	validFeedback?: string;
}

export const validationDefaultProps = {
	invalidFeedback: undefined,
	isTouched: false,
	isValid: false,
	isValidMessage: true,
	validFeedback: undefined,
};
