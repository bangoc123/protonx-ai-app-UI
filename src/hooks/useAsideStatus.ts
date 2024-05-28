'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';

export default function useAsideStatus() {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	return { asideStatus, setAsideStatus };
}
