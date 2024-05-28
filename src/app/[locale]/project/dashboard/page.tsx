import React from 'react';
import ProjectDashboardClient from '@/app/[locale]/project/dashboard/client';
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['translation'];
const ProjectDashboardPage = ({ params: { locale } }: { params: { locale: string } }) => {
	return (
		<TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
			<ProjectDashboardClient />
		</TranslationsProvider>
	);
};

export default ProjectDashboardPage;
