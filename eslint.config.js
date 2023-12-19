// eslint.config.js
import format from 'eslint-plugin-format'

export default [
  {
    files: ['**/*.css'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      'format/prettier': ['error', { parser: 'css', tabWidth: 2 }],
    },
  },

  {
    files: ['**/*.blade.php'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      'format/prettier': ['error', { language: 'blade', languageOptions: { tabWidth: 4 } }],
    },
  },
]