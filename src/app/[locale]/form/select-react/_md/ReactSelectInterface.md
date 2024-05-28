```tsx
import { PublicBaseSelectProps } from 'react-select/base';

type TSelectOption =
	| { value: string; label: string; isFixed?: boolean; isDisabled?: boolean }
	| undefined;
export type TSelectOptions = TSelectOption[];
export type TSelectGroups = GroupBase<TSelectOption>[];

type TReactSelect = Partial<
	PublicBaseSelectProps<TSelectOption, boolean, GroupBase<TSelectOption>>
>;

interface ISelectReactProps extends TReactSelect, Partial<IValidationBaseProps> {
	borderWidth?: TBorderWidth;
	className?: string;
	color?: TColors; // 'zinc' | 'red' | 'amber' | 'lime' | 'emerald' | 'sky' | 'blue' | 'violet';
	colorIntensity?: TColorIntensity; // '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
	name: string;
	rounded?: TRounded; // 'rounded-none' | 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
	dimension?: TSelectDimension; // 'xs' | 'sm' | 'default' | 'lg' | 'xl';
	variant?: TSelectVariant; // 'solid';
}
```
