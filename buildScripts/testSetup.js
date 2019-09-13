//register babel to transpile before our tests run
require('babel-register')();
//disable webpack features that Mocha doesn's understand
require.extensions['.css'] = function(){};
