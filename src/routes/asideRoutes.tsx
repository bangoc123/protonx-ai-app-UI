import React from 'react';
import { authPages } from '@/config/pages.config';
import { TRoute } from '@/types/route.type';
import DefaultAsideTemplate from '../templates/layouts/Asides/DefaultAside.template';

const asideRoutes: TRoute[] = [
	{ path: authPages.loginPage.to, element: null },
	{ path: '/*', element: <DefaultAsideTemplate /> },
];

export default asideRoutes;
