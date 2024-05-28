export type TColorFlat = 'inherit' | 'current' | 'transparent' | 'black' | 'white';
export type TColors =
	// | 'slate'
	// | 'gray'
	| 'zinc'
	// | 'neutral'
	// | 'stone'
	| 'red'
	// | 'orange'
	| 'amber'
	// | 'yellow'
	| 'lime'
	// | 'green'
	| 'emerald'
	// | 'teal'
	// | 'cyan'
	| 'sky'
	| 'blue'
	// | 'indigo'
	| 'violet';
// | 'purple'
// | 'fuchsia'
// | 'pink'
// | 'rose';

export type TAllColors = TColorFlat | TColors;

export const arrColorFlat: TColorFlat[] = ['inherit', 'current', 'transparent', 'black', 'white'];
export const arrColors: TColors[] = [
	'zinc',
	'red',
	'amber',
	'lime',
	'emerald',
	'sky',
	'blue',
	'violet',
];

export const arrAllColors: TAllColors[] = [...arrColorFlat, ...arrColors];
