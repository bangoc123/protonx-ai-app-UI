'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n as i18nInterface } from 'i18next';
import initTranslations from '@/i18n';

let i18n: i18nInterface;

const TranslationsProvider = ({
	children,
	locale,
	namespaces,
	fallback = null,
}: {
	children: ReactNode;
	locale: string;
	namespaces: string[];
	fallback?: ReactNode;
}) => {
	const [instance, setInstance] = useState(i18n);

	useEffect(() => {
		const init = async () => {
			if (!i18n) {
				const newInstance = await initTranslations(locale, namespaces);
				// @ts-ignore
				i18n = newInstance;
				// @ts-ignore
				setInstance(newInstance);
			} else if (i18n.language !== locale) {
				await i18n.changeLanguage(locale);
			}
		};

		init()
			.then(() => {})
			.catch(() => {});
	}, [locale, namespaces]);

	if (!instance) {
		return fallback;
	}

	return (
		<I18nextProvider i18n={instance} defaultNS={namespaces[0]}>
			{children}
		</I18nextProvider>
	);
};

export default TranslationsProvider;
