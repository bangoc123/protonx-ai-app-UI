import i18nConfig from '../../i18nConfig';

const purePathnameUtil = (pathname: string): string => {
	const changePattern = (lng: string): string => `/${lng}/`;

	const otherThanDefaultLanguage =
		i18nConfig.locales.map(changePattern).includes(pathname.substring(0, 4)) ||
		!!i18nConfig.locales.find((key) => pathname === `/${key}`);

	return otherThanDefaultLanguage ? pathname.substring(3, pathname.length) || '/' : pathname;
};
export default purePathnameUtil;
