import { TAllColors } from '@/types/colors.type';
import { TColorIntensity } from '@/types/colorIntensities.type';

export const bgColor = (color: TAllColors | undefined, shade: TColorIntensity | undefined) => {
	if (typeof color === 'undefined') return null;
	if (['inherit', 'current', 'transparent', 'black', 'white'].includes(color)) {
		return `bg-${color}`;
	}
	if (typeof shade === 'undefined') return `bg-${color}-500`;
	return `bg-${color}-${shade}`;
};

const bgColorUtil = (
	color: TAllColors | undefined,
	shade: TColorIntensity | undefined,
	opacity?: string,
	cond?: string,
) => {
	const value = bgColor(color, shade) as string;
	const conditional = typeof cond === 'string' ? cond : '';

	if (opacity) return `${conditional}${value}/${opacity}`;
	return `${conditional}${value}`;
};

export default bgColorUtil;
