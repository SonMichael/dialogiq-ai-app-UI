import { LightLogoDialog, DarkLogoDialog } from '@/assets/images';
export const DIALOGIQ_LOGO = {
	DARK:	DarkLogoDialog,
	LIGHT: LightLogoDialog
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
