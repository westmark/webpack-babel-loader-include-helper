const analyze = require( './index.js' );

const { babelDirs, legacyDirs } = analyze( process.cwd() );
babelDirs.forEach( ( dir ) => console.log( 'babel', dir ) );
legacyDirs.forEach( ( dir ) => console.log( 'legacy', dir ) );
