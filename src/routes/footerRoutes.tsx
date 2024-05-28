import React from 'react';
import { authPages } from '@/config/pages.config';
import { TRoute } from '@/types/route.type';
import DefaultFooterTemplate from '../templates/layouts/Footers/DefaultFooter.template';

const footerRoutes: TRoute[] = [
	{ path: authPages.loginPage.to, element: null },
	{ path: '/*', element: <DefaultFooterTemplate /> },
];

export default footerRoutes;
