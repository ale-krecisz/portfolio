module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    "indent": ["error", 2],
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/jsx-props-no-spreading": ["off"],
    "no-nested-ternary": "off",
    "no-restricted-imports": [
      "error",
      {
        "paths": [{
          "name": "styled-components",
          "message": "Please import from styled-components/macro."
        }],
        "patterns": [
          "!styled-components/macro"
        ]
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],

  }
};
