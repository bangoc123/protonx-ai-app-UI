import { TColorIntensity } from '@/types/colorIntensities.type';

function useColorIntensity(shade: TColorIntensity | undefined) {
	const colorShades: TColorIntensity[] = [
		'50',
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
		'950',
	];

	const index = typeof shade === 'undefined' ? 5 : colorShades.indexOf(shade);

	const textColor = index <= 4 ? 'text-black' : 'text-white';

	const calculateIntensity = (process: 'tint' | 'shade') => {
		if (process === 'tint') {
			return colorShades[index - 1];
		}
		if (process === 'shade') {
			return colorShades[index + 1];
		}
		return shade;
	};

	const tintColorIntensity = calculateIntensity('tint');
	const shadeColorIntensity = calculateIntensity('shade');

	return { textColor, tintColorIntensity, shadeColorIntensity };
}

export default useColorIntensity;
