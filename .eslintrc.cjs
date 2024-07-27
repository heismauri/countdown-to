module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'arrow-body-style': 'off',
    'comma-dangle': ['error', 'never'],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2
      }
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': 'off',
    'no-restricted-globals': 'off',
    'quote-props': [
      'error',
      'consistent'
    ],
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'semi': ['error', 'always'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
};
