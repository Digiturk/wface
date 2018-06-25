const childProcess = require('child_process');
const chalk = require("chalk");

function init() {  
  const dir = process.env.APPDATA + '\\npm\\node_modules\\@wface\\server-app';    

  childProcess.execSync('npm install -g @wface/server-app');
  childProcess.execSync('npm update -g @wface/server-app');

  childProcess.execSync('npm install', {
    stdio:[0,1,2],
    cwd: dir + '\\client-app' 
  });

  childProcess.execSync('npm update', {
    stdio:[0,1,2],
    cwd: dir + '\\client-app' 
  });

  console.log(chalk.green("wface init") + " completed.");
}

exports.default = init;
