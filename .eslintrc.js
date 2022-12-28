module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': ['warn', { 'max': 2, 'maxEOF': 0, 'maxBOF': 0 }],
  },
};
