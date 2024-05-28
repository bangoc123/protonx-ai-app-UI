'use client';

import React, { ReactNode } from 'react';
import useFontSize from '@/hooks/useFontSize';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import getOS from '@/utils/getOS.util';

const AppWrapper = ({ children }: { children: ReactNode }) => {
	const { fontSize } = useFontSize();
	dayjs.extend(localizedFormat);

	getOS();

	return (
		<>
			<style>{`:root {font-size: ${fontSize}px}`}</style>
			{children}
		</>
	);
};

export default AppWrapper;
