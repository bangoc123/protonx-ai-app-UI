```tsx
interface ICheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactElement<ICheckboxProps> | ReactElement<ICheckboxProps>[];
	invalidFeedback?: string; // For FormiK Validation
	isInline?: boolean;
	isTouched?: boolean; // For FormiK Validation
	isValid?: boolean; // For FormiK Validation
	isValidMessage?: boolean; // For FormiK Validation
	validFeedback?: string; // For FormiK Validation
}
```
