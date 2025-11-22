import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import pluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    // Игнорирование
    { ignores: ['dist'] },

    // Базовый ESLint
    js.configs.recommended,

    // TypeScript
    ...tseslint.configs.recommended,

    // Prettier: отключаем конфликтующие правила ESLint
    eslintConfigPrettier,

    // Основной конфиг для .ts/.tsx файлов
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            // Prettier как плагин — обязателен для правила 'prettier/prettier'
            prettier: pluginPrettier,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            // Включаем правило Prettier (форматирование как ESLint-ошибка)
            'prettier/prettier': 'error',

            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'max-lines-per-function': ['error', { max: 70 }],
            complexity: ['error', 8],
            'no-unused-vars': 'error',
        },
    },
];