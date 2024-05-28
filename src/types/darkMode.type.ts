export type TDarkModeKEY = 'DARK' | 'LIGHT' | 'SYSTEM';
export type TDarkMode = 'dark' | 'light' | 'system';

export type TDarkModes = {
	[key in TDarkModeKEY]: TDarkMode;
};
