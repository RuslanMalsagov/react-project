module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    // import/extensions - отключаем потому что расширения указывать нам необязательно
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    // no-underscore-dangle - нижнее подчеркивание
    'no-underscore-dangle': 'off',
    // jsx-quotes-одинарные кавычки
    'jsx-quotes': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
