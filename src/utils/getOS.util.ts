const getOS = (): 'MacOS' | 'iOS' | 'Windows' | 'Android' | 'Linux' => {
	// @ts-ignore
	const { userAgent } = typeof window !== 'undefined' && window.navigator;
	// @ts-ignore
	const { platform } = typeof window !== 'undefined' && window.navigator;
	const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
	const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
	const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
	let os = null;

	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'MacOS';
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	typeof window !== 'undefined' && os && document.documentElement.setAttribute('os', os);
	// @ts-ignore
	return os;
};

export default getOS;
