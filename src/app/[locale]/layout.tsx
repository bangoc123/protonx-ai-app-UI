import '@/app/styles/index.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '@/app/styles/vendors.css';

import React, { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import AppWrapper from '@/app/[locale]/_app';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { dir } from 'i18next';
import AsideRouter from '@/components/router/AsideRouter';
import HeaderRouter from '@/components/router/HeaderRouter';
import FooterRouter from '@/components/router/FooterRouter';
import Wrapper from '@/components/layouts/Wrapper/Wrapper';
import { Poppins } from 'next/font/google';
import Providers from '@/app/[locale]/_providers';
import CrispChat from '@/components/Crisp';
import i18nConfig from '../../../i18nConfig';

const poppins = Poppins({
	display: 'swap',
	preload: false,
	style: ['normal', 'italic'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['devanagari', 'latin', 'latin-ext'],
});

export const metadata: Metadata = {
	title: 'ProtonX AI Demonstrations',
	description: 'Advanced AI Technologies',
};

export const viewport: Viewport = {
	themeColor: '#18181b',
};

export function generateStaticParams() {
	return i18nConfig.locales.map((locale) => ({ locale }));
}

const RootLayout = ({
	children,
	params: { locale },
}: {
	children: ReactNode;
	params: { locale: string };
}) => {
	dayjs.extend(localizedFormat);

	return (
		<Providers>
			<html suppressHydrationWarning lang={locale} dir={dir(locale)}>
				<CrispChat />
				<body className={poppins.className}>
					<div id='root'>
						<div data-component-name='App' className='flex grow flex-col'>
							<AsideRouter />
							<Wrapper>
								<HeaderRouter />
								<AppWrapper>{children}</AppWrapper>
								<FooterRouter />
							</Wrapper>
						</div>
					</div>
					<div id='portal-root' />
				</body>
			</html>
		</Providers>
	);
};

export default RootLayout;
