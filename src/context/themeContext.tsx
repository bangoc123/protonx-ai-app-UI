'use client';

import React, {
	createContext,
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from 'react';
import theme from 'tailwindcss/defaultTheme';
// import { useTranslation } from 'react-i18next';
// import dayjs from 'dayjs';
import { TDarkMode } from '@/types/darkMode.type';
// import { TLang } from '@/types/lang.type';
import { TLang } from '@/types/lang.type';
import DARK_MODE from '../constants/darkMode.constant';
import themeConfig from '../config/theme.config';
import useDeviceScreen from '../hooks/useDeviceScreen';

export interface IThemeContextProps {
	isDarkTheme: boolean;
	darkModeStatus: TDarkMode | null;
	setDarkModeStatus: Dispatch<SetStateAction<TDarkMode | null>>;
	asideStatus: boolean;
	setAsideStatus: Dispatch<SetStateAction<boolean>>;
	fontSize: number;
	setFontSize: Dispatch<SetStateAction<number>>;
	language: TLang;
	setLanguage: Dispatch<SetStateAction<TLang>>;
	dir: string;
	setDir: Dispatch<SetStateAction<string>>;
}
export const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps);

interface IThemeContextProviderProps {
	children: ReactNode;
}
export const ThemeContextProvider: FC<IThemeContextProviderProps> = ({ children }) => {
	/**
	 * Language
	 */
	const [language, setLanguage] = useState<TLang>(
		(typeof window !== 'undefined' && (localStorage.getItem('fyr_language') as TLang)) ||
			themeConfig.language,
	);

	const [dir, setDir] = useState<string>(
		(typeof window !== 'undefined' && (localStorage.getItem('fyr_dir') as string)) || 'ltr',
	);

	/**
	 * Dark Mode
	 */
	const [darkModeStatus, setDarkModeStatus] = useState<TDarkMode | null>(
		((typeof window !== 'undefined' && localStorage.getItem('theme')) ||
			themeConfig.theme) as TDarkMode,
	);
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(darkModeStatus === DARK_MODE.DARK);
	useLayoutEffect(() => {
		localStorage.setItem('theme', darkModeStatus as string);

		if (
			localStorage.getItem('theme') === DARK_MODE.DARK ||
			(localStorage.getItem('theme') === DARK_MODE.SYSTEM &&
				window.matchMedia(`(prefers-color-scheme: ${DARK_MODE.DARK})`).matches)
		) {
			document.documentElement.classList.add(DARK_MODE.DARK);
			setIsDarkTheme(true);
		} else {
			document.documentElement.classList.remove(DARK_MODE.DARK);
			setIsDarkTheme(false);
		}
	}, [darkModeStatus]);

	/**
	 * Aside Status
	 */
	const { width } = useDeviceScreen();
	const [asideStatus, setAsideStatus] = useState(
		typeof window !== 'undefined' && localStorage.getItem('fyr_asideStatus')
			? localStorage.getItem('fyr_asideStatus') === 'true'
			: true,
	);
	useLayoutEffect(() => {
		if (Number(theme.screens.md.replace('px', '')) <= Number(width))
			localStorage.setItem('fyr_asideStatus', asideStatus?.toString());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [asideStatus]);
	useEffect(() => {
		if (Number(theme.screens.md.replace('px', '')) > Number(width)) setAsideStatus(false);
		return () => {
			setAsideStatus(
				localStorage.getItem('fyr_asideStatus')
					? localStorage.getItem('fyr_asideStatus') === 'true'
					: true,
			);
		};
	}, [width]);

	/**
	 * Font Size
	 */
	const [fontSize, setFontSize] = useState<number>(
		typeof window !== 'undefined' && Number(localStorage.getItem('fyr_fontSize'))
			? Number(localStorage.getItem('fyr_fontSize'))
			: themeConfig.fontSize,
	);
	useLayoutEffect(() => {
		localStorage.setItem('fyr_fontSize', fontSize?.toString());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fontSize]);

	const values: IThemeContextProps = useMemo(
		() => ({
			isDarkTheme,
			darkModeStatus,
			setDarkModeStatus,
			asideStatus,
			setAsideStatus,
			fontSize,
			setFontSize,
			language,
			setLanguage,
			dir,
			setDir,
		}),
		[isDarkTheme, darkModeStatus, asideStatus, fontSize, language, dir],
	);

	return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
