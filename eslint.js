const path = require( 'path' );

const nodeModules = [
  path.resolve( __dirname, 'node_modules' ),
];

module.exports = {
  extends: 'airbnb',
  settings: {
    ecmascript: 6,
    jsx: true,
    'import/external-module-folders': nodeModules,
    'import/resolver': {
      node: {
        paths: nodeModules,
      },
    },
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'array-bracket-spacing': [
      2,
      'always',
    ],
    'arrow-body-style': [
      1,
    ],
    'arrow-parens': [
      2,
      'always',
    ],
    'computed-property-spacing': [
      2,
      'always',
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'max-len': 0,
    'no-debugger': 1,
    'no-unused-vars': 1,
    'space-before-blocks': [
      1,
      'always',
    ],
    'space-in-parens': [
      1,
      'always',
    ],
    'spaced-comment': [
      1,
    ],
    'template-curly-spacing': [
      1,
      'always',
    ],
    'react/jsx-curly-spacing': [
      1,
      'always',
    ],
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unused-prop-types': [ 1, { skipShapeProps: true } ],
  },
};
