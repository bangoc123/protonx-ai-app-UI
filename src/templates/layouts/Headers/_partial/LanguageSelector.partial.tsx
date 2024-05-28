'use client';

import React, { useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { TLang } from '@/types/lang.type';
import { ThemeContext } from '@/context/themeContext';
import dayjs from 'dayjs';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/ui/Dropdown';
import Button from '../../../../components/ui/Button';
import LANG from '../../../../constants/lang.constant';
import Icon from '../../../../components/icon/Icon';
import i18nConfig from '../../../../../i18nConfig';

const LanguageSelectorPartial = () => {
	const { setLanguage, setDir } = useContext(ThemeContext);

	const { i18n } = useTranslation();
	const currentLocale = i18n.language;
	const router = useRouter();
	const currentPathname = usePathname();

	const handleChange = (newLocale: TLang) => {
		// set cookie for next-i18n-router
		const days = 30;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = `; expires=${date.toUTCString()}`;
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

		// redirect to the new locale path
		if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
			i18n.changeLanguage(newLocale)
				.then(() => {
					localStorage.setItem('fyr_language', newLocale);
					localStorage.setItem('fyr_dir', i18n.dir());
				})
				.then(() => {
					setLanguage(newLocale);
					setDir(i18n.dir());
				})
				.then(() => {
					// Changing the global locale doesn't affect existing instances.
					// more information: https://day.js.org/docs/en/i18n/changing-locale
					// If you want the current instances to change instantly: dayjs().locale(i18n.language)
					dayjs.locale(newLocale);
				})
				.then(() => {
					router.push(`/${newLocale}${currentPathname}`);
				})
				.catch(() => {});
		} else {
			i18n.changeLanguage(newLocale)
				.then(() => {
					localStorage.setItem('fyr_language', newLocale);
					localStorage.setItem('fyr_dir', i18n.dir());
				})
				.then(() => {
					setLanguage(newLocale);
					setDir(i18n.dir());
				})
				.then(() => {
					// Changing the global locale doesn't affect existing instances.
					// more information: https://day.js.org/docs/en/i18n/changing-locale
					// If you want the current instances to change instantly: dayjs().locale(i18n.language)
					dayjs.locale(newLocale);
				})
				.then(() => {
					router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
				})
				.catch(() => {});
		}

		router.refresh();
	};

	const langArray = Object.values(LANG);

	return (
		<Dropdown>
			<DropdownToggle hasIcon={false}>
				<Button icon='HeroLanguage' aria-label='Select Language' />
			</DropdownToggle>
			<DropdownMenu placement='bottom-end'>
				{langArray.map((item) => (
					<DropdownItem
						isActive={currentLocale === item.lng}
						key={item.lng}
						// onClick={() => setLanguage(item.lng)}
						onClick={() => handleChange(item.lng)}>
						<Icon icon={item.icon} size='text-2xl' className='ltr:mr-2 rtl:ml-2' />
						{item.text}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
};

export default LanguageSelectorPartial;
