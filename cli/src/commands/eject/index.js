const childProcess = require('child_process');
const chalk = require("chalk");
const rimraf = require('rimraf');

function eject() {
  rimraf.sync(__dirname + '/../../../node_modules/@wface/server-app/client-app/node_modules')
  // childProcess.execSync('rimraf node_modules/', {
  //   stdio:[0,1,2],
  //   cwd: __dirname + '/../../../node_modules/@wface/server-app/client-app'      
  // });

  console.log(chalk.green("wface eject") + " completed.");
}

exports.default = eject;
