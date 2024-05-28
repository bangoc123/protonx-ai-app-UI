import React from 'react';
import TranslationsProvider from '@/components/TranslationsProvider';
import HomeClient from '@/app/[locale]/(home)/_client';
import PageFallbackTemplate from '@/templates/PageFallback.template';
import HomePageHeaderTemplate from '@/templates/layouts/Headers/HomePageHeader.template';
import AiDashboardClient from '../ai/dashboard/client';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]';

const i18nNamespaces = ['translation'];

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
	// const session = await getServerSession(authOptions);
	// console.log(session);

	return (
		<TranslationsProvider
			namespaces={i18nNamespaces}
			locale={locale}
			fallback={<PageFallbackTemplate />}>
			<HomePageHeaderTemplate />
			<AiDashboardClient />
		</TranslationsProvider>
	);
};

export default Home;
