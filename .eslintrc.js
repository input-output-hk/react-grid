module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'standard',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended' // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    }
  },
  rules:  {
    indent: 'off',
    '@typescript-eslint/indent': [ 'error', 2 ],
    '@typescript-eslint/member-delimiter-style': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error'
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings:  {
    react:  {
      version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/ignore': [ 'node_modules/*' ]
  }
}
