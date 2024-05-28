'use client';

import { useEffect, useState } from 'react';

type TDeviceScreen = {
	width: number | undefined;
	height: number | undefined;
	screenWidth: number | undefined;
	screenHeight: number | undefined;
	portrait: boolean | undefined;
	landscape: boolean | undefined;
};

export default function useDeviceScreen() {
	const isClient = typeof window === 'object';

	function getProperties() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
			screenWidth: isClient ? window.screen.width : undefined,
			screenHeight: isClient ? window.screen.height : undefined,
			portrait: isClient ? window.matchMedia('(orientation: portrait)').matches : undefined,
			landscape: isClient ? window.matchMedia('(orientation: landscape)').matches : undefined,
		};
	}

	const [deviceScreen, setDeviceScreen] = useState<TDeviceScreen>(getProperties);

	useEffect(() => {
		function handleResize() {
			setDeviceScreen(getProperties());
		}

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, []);

	const { width, height, screenWidth, screenHeight, portrait, landscape } = deviceScreen;

	return { width, height, screenWidth, screenHeight, portrait, landscape };
}
