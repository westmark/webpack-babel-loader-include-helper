const analyze = require( './index.js' );

const { babelPkgs, legacyPkgs } = analyze( process.cwd() );
babelPkgs.forEach( ( dir ) => console.log( 'babel', dir ) );
//legacyPkgs.forEach( ( dir ) => console.log( 'legacy', dir ) );
