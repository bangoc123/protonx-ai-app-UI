'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';

const useDir = () => {
	const { dir } = useContext(ThemeContext);
	const isLTR = dir === 'ltr';
	const isRTL = !isLTR;

	return { dir, isLTR, isRTL };
};
export default useDir;
