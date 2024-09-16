import globals from 'globals';
import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		ignores: ['**/backups'],
	},
	{
		name: '@speedingplanet/eslint-config',
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'no-unused-private-class-members': 'warn',
			'no-unused-vars': ['warn'],
			'prefer-const': 'off',
		},
	},
];
