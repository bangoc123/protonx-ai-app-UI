'use client';

import React, { FC } from 'react';
import { TIcons } from '@/types/icons.type';
import { TDarkMode } from '@/types/darkMode.type';
import useDarkMode from '@/hooks/useDarkMode';
import useAsideStatus from '@/hooks/useAsideStatus';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import themeConfig from '@/config/theme.config';
import Icon from '@/components/icon/Icon';
import TranslationsProvider from '@/components/TranslationsProvider';
import { useCurrentLocale } from 'next-i18n-router/client';
import DARK_MODE from '../../../../constants/darkMode.constant';
import i18nConfig from '../../../../../i18nConfig';

interface IStyledButtonProps {
	text: string;
	icon: TIcons;
	status: TDarkMode;
}
const StyledButton: FC<IStyledButtonProps> = ({ text, icon, status }) => {
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();
	const { asideStatus } = useAsideStatus();

	const { t } = useTranslation();

	const handeClick = () => {
		if (!asideStatus) {
			if (darkModeStatus === DARK_MODE.DARK) {
				setDarkModeStatus(DARK_MODE.LIGHT);
			} else if (darkModeStatus === DARK_MODE.LIGHT) {
				setDarkModeStatus(DARK_MODE.SYSTEM);
			} else {
				setDarkModeStatus(DARK_MODE.DARK);
			}
		} else {
			setDarkModeStatus(status);
		}
	};

	if (!asideStatus && darkModeStatus !== status) return null;
	return (
		<button
			type='button'
			aria-label={`${text} Mode`}
			className={classNames(
				'p-1.5',
				'rounded-full',
				'text-zinc-500 dark:hover:text-zinc-100',
				'flex flex-auto items-center justify-center',
				'truncate',
				{
					'bg-white shadow-lg dark:bg-zinc-800 dark:text-white':
						darkModeStatus === status,
					'hover:text-zinc-950': darkModeStatus !== status,
				},
				themeConfig.transition,
			)}
			onClick={handeClick}>
			<Icon
				icon={icon}
				className={classNames('text-xl', {
					'ltr:mr-1.5 rtl:ml-1.5': asideStatus,
				})}
			/>
			{asideStatus && (
				<span className='overflow-hidden truncate whitespace-nowrap'>{t(text)}</span>
			)}
		</button>
	);
};

const i18nNamespaces = ['translation'];
const DarkModeSwitcherPart = () => {
	const locale = useCurrentLocale(i18nConfig);

	return (
		<TranslationsProvider
			namespaces={i18nNamespaces}
			locale={locale || 'en'}
			fallback={
				<div className='flex h-12 w-full overflow-hidden rounded-full bg-zinc-100 p-2 text-sm dark:bg-zinc-950' />
			}>
			<div className='flex w-full overflow-hidden rounded-full bg-zinc-100 p-2 text-sm dark:bg-zinc-950'>
				<StyledButton icon='HeroMoon' status={DARK_MODE.DARK} text='theme.dark' />
				<StyledButton icon='HeroSun' status={DARK_MODE.LIGHT} text='theme.light' />
				<StyledButton
					icon='HeroComputerDesktop'
					status={DARK_MODE.SYSTEM}
					text='theme.system'
				/>
			</div>
		</TranslationsProvider>
	);
};

export default DarkModeSwitcherPart;
