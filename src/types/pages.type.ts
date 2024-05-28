import { TIcons } from './icons.type';

export type TPage = {
	id: string;
	to: string;
	/**
	 * text: can also be used as an i18n key
	 */
	text: string;
	icon: TIcons;
};

export type TPages = {
	[key: string]: TPage;
};
