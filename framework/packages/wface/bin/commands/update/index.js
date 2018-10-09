const childProcess = require('child_process');
const chalk = require("chalk");
const path = require("path");


function update () {
  childProcess.execSync('npm update -g @wface/client-app', {
    stdio: [0,1,2]
  });

  const wfaceDir = path.join(process.argv[1], '../../../')
  childProcess.execSync('npm install', {
    stdio: [0,1,2],
    cwd: wfaceDir + "\\client-app"
  });

  console.log(chalk.green("@wface/client-app") + " updated");
}

exports.default = update;