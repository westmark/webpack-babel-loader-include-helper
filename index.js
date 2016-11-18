const fs = require( 'fs' );
const path = require( 'path' );

const defaultOptions = {
  recursive: true,
};

function getDirectories( srcPath ) {
  return fs.readdirSync( srcPath ).filter( ( file ) => fs.statSync( path.join( srcPath, file ) ).isDirectory() );
}

function analyzeDir( dirPath, options ) {
  const directories = getDirectories( dirPath );
  let babelDirs = [];
  let legacyDirs = [];

  directories.forEach( ( dir ) => {
    const packageJsonPath = path.join( dirPath, dir, 'package.json' );
    if ( fs.existsSync( packageJsonPath ) ) {
      const packageJson = require( path.join( dirPath, dir, 'package.json' ) );
      if ( Reflect.has( packageJson, 'js:next' ) || Reflect.has( packageJson, 'module' ) ) {
        babelDirs.push( path.join( dirPath, dir ) );
      } else {
        legacyDirs.push( path.join( dirPath, dir ) );
      }

      if ( options.recursive ) {
        const nestedNodeModules = path.join( dirPath, dir, 'node_modules' );
        if ( fs.existsSync( nestedNodeModules ) ) {
          const result = analyzeDir( nestedNodeModules, options );
          babelDirs = [ ...babelDirs, ...result.babelDirs ];
          legacyDirs = [ ...legacyDirs, ...result.legacyDirs ];
        }
      }
    }
  } );

  return {
    babelDirs,
    legacyDirs,
  };
}

module.exports = function analyze( nodeModulesPath, opts = {} ) {
  const options = Object.assign( {}, defaultOptions, opts );
  return analyzeDir( nodeModulesPath, options );
};
