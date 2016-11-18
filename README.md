# webpack-babel-loader-include-helper

Quick haxx to solve my problem where babel-loader seems to claim too much CPU time watching lots and lots of non-ES2015+ packages.

```
const analyze = require( 'webpack-babel-loader-include-helper' );
const {
  babelPkgs,
  legacyPkgs,
} = analyze( './node_modules', { recursive: true } );

...

module: {
  loaders: [
    // Process JS with Babel.
    {
      test: /\.(js|jsx)$/,
      exclude: [
        ...legacyPkgs,
      ],
      include: [
        './src',
        ...babelPkgs,
      ],
      loader: 'babel',
    },
  ],
}
```
