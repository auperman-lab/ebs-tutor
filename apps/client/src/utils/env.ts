export const getEnv = (key: string, fallback?: string): string => {
	const value = import.meta.env[key] ?? process.env[key];

	if (!value && fallback === undefined) {
		throw new Error(`Environment variable "${key}" is not defined.`);
	}

	return value ?? fallback!;
};

export const getAdminPanelUrl = () =>
	getEnv('ADMIN_PANEL_URL', 'http://localhost:4201');