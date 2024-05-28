'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';

export default function useFontSize() {
	const { fontSize, setFontSize } = useContext(ThemeContext);

	return { fontSize, setFontSize };
}
