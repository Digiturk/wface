const childProcess = require('child_process');
const chalk = require("chalk");

function uninstall () {
  childProcess.execSync('npm uninstall -g @wface/client-app', {
    stdio: [0,1,2]
  });

  console.log(chalk.green("@wface/client-app") + " deleted");
}

exports.default = uninstall;