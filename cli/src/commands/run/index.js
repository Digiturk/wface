const childProcess = require('child_process');
const fileSystem = require('fs');
const chalk = require("chalk");
const readlineSync = require('readline-sync');
const init = require("../init").default;

function run () {
  const dir = process.env.APPDATA + '\\npm\\node_modules\\@wface\\server-app';    
  if(!fileSystem.existsSync(dir)) {
    console.log(chalk.green("wface init") + " command needs to be run and it may take about 5 minutes.")
    if (readlineSync.keyInYN("Do you want to run " + chalk.green("wface init") + " command now?")) {
      init();
    } 
    else {
      return;
    }
  }

  childProcess.execSync('dotnet run', {
    stdio: [0,1,2],
    cwd: dir
  });
}

exports.default = run;