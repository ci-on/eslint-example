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
      'format/prettier': ['error', { parser: 'css', tabWidth: 4 }],
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
      'format/prettier': ['error', { parser: 'blade', tabWidth: 4 }],
    },
  },

  // use dprint to format TOML
  {
    files: ['**/*.toml'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      'format/dprint': ['error', { language: 'toml', languageOptions: { indentWidth: 2 } }],
    },
  },
]