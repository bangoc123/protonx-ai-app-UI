import { TLang } from '@/types/lang.type';

export type ILang = {
	[key in TLang]: {
		text: string;
		lng: TLang;
		icon: string;
	};
};

const LANG: ILang = {
	en: {
		text: 'English',
		lng: 'en',
		icon: 'CustomUsa',
	},
	es: {
		text: 'Spanish',
		lng: 'es',
		icon: 'CustomSpain',
	},
	ar: {
		text: 'عربي',
		lng: 'ar',
		icon: 'CustomSaudiArabia',
	},
	tr: {
		text: 'Türkçe',
		lng: 'tr',
		icon: 'CustomTurkey',
	},
};

export default LANG;
