import globals from 'globals';
import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		name: '@speedingplanet/eslint-config',
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		files: ['**/*.jsx', '**/*.tsx'],
		rules: {
			'no-unused-private-class-members': 'warn',
			'no-unused-vars': ['warn'],
		},
	},
];
