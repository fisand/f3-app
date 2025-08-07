import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig(
  {
    react: 'expo',
    restrictedSyntax: ['jsx', 'tsx'],
    strict: true,
    tailwindCSS: true,
    unocss: false,
    ignores: ['**/*.d.ts', '**/components/ui/**', 'package.json'],
  },
  {
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-refresh/only-export-components': 'off',
      'react-google-translate/no-conditional-text-nodes-with-siblings': 'off',

      'unicorn/prefer-add-event-listener': 'off',
      'unicorn/prefer-node-protocol': 'off',
      'unused-imports/no-unused-vars': 'off',
      'unicorn/no-useless-undefined': 'off',

      'max-params': 'off',
      'no-console': 'off',

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',

      '@eslint-react/naming-convention/filename-extension': 'off',
      '@eslint-react/no-complex-conditional-rendering': 'off',
      '@eslint-react/dom/no-missing-button-type': 'off',
      '@eslint-react/no-array-index-key': 'off',
      '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'off',
      '@eslint-react/jsx-no-undef': 'off',

      '@stylistic/multiline-ternary': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/brace-style': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',
    },
  },
)
