
var path = require('path');
var serverBaseDir = '../server';
var appRoot = 'src/';
var outputRoot = 'dist/';
var nodeStartupScript = 'app';
module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: outputRoot,
  sourceMapRelativePath: '/src',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  nodeJsPort:5000,
  webServerPort : 4000,
  serverBaseDir : serverBaseDir,
  nodeStartUpScriptPath : serverBaseDir + '/'  + nodeStartupScript
};

