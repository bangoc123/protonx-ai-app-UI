import { TRounded } from '@/types/rounded.type';
import themeConfig from '../config/theme.config';

const useRoundedSize = (rounded: TRounded | undefined) => {
	const roundedSizes: TRounded[] = [
		'rounded-none',
		'rounded-sm',
		'rounded',
		'rounded-md',
		'rounded-lg',
		'rounded-xl',
		'rounded-2xl',
		'rounded-3xl',
		'rounded-full',
	];

	const index =
		typeof rounded === 'undefined'
			? roundedSizes.indexOf(themeConfig.rounded)
			: roundedSizes.indexOf(rounded);

	const roundedInner = roundedSizes[index - 1];
	const roundedOuter = roundedSizes[index + 1];

	const roundedCustom = (value: number) => roundedSizes[index + value];

	return { roundedInner, roundedOuter, roundedCustom };
};

export default useRoundedSize;
