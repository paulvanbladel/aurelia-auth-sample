
var path = require('path');
var clientBaseDir = '';
var serverBaseDir = '../server';
var appRoot = clientBaseDir + '/src/';
var outputRoot = clientBaseDir + '/dist/';
var nodeStartupScript = 'app';
module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: clientBaseDir +'/styles/**/*.css',
  output: outputRoot,
  sourceMapRelativePath: '/src',
  doc:'./doc',
  e2eSpecsSrc: clientBaseDir +'/test/e2e/src/*.js',
  e2eSpecsDist: clientBaseDir +'/test/e2e/dist/',
  nodeJsPort:5000,
  webServerPort : 4000,
  clientBaseDir : clientBaseDir,
  serverBaseDir : serverBaseDir,
  nodeStartUpScriptPath : serverBaseDir + '/'  + nodeStartupScript
};

