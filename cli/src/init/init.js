const process = require('child_process');
const fileSystem = require('fs');
const chalk = require("chalk");

function init() {
  process.execSync('npm install', {
    stdio:[0,1,2],
    cwd: __dirname + '/../../node_modules/@wface/server-app/client-app'    
  });

  process.execSync('npm update', {
    stdio:[0,1,2],
    cwd: __dirname + '/../../node_modules/@wface/server-app/client-app'    
  });
}

exports.default = init;
