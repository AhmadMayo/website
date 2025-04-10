export function load({ cookies }) {
	const cookieThemeMode = cookies.get('theme-mode');
	let initialThemeMode: 'light' | 'dark';
	if (cookieThemeMode == 'light' || cookieThemeMode == 'dark') {
		initialThemeMode = cookieThemeMode;
	} else {
		initialThemeMode = 'dark';
	}

	return { initialThemeMode };
}
