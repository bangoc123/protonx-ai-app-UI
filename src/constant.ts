export const PROTONX_LOGO = {
	DARK: 'https://storage.googleapis.com/protonx-cloud-storage/protonx-mle/Logo-SVG-white-horizontal.svg',
	LIGHT: 'https://storage.googleapis.com/protonx-cloud-storage/cropped-cropped-ProtonX-logo-1-1-300x100.png',
};

export const getHOST = () => {
	return process.env.REACT_APP_STAGE === 'production'
		? 'http://localhost:5001'
		: 'http://localhost:5001';
};

export const HOST = getHOST();

export const AI_DEMOS_URI = '/ai-demos';

export const SYSTEM = 'system';
export const ASSISTANT = 'assistant';
export const USER = 'user';

export const CREATED = 'CREATED';
export const PENDING = 'PENDING';
export const FAILED = 'FAILED';
export const SUCCESSFUL = 'SUCCESSFUL';
