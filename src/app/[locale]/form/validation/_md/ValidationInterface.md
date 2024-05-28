```tsx
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
```
