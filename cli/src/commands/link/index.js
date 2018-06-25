const process = require('process');
const childProcess = require('child_process');
const chalk = require("chalk");
const fs = require('fs');

if(fs.existsSync(process.cwd() + "/package.json")) {
  var packageInfo = require(process.cwd() + "/package.json")
}

function link () {
  if(packageInfo) {    

    // öncelikle mevcut projeyi linkleyelim.
    childProcess.execSync('npm link', {
      stdio:[0,1,2],
      cwd: process.cwd()  
    });
    childProcess.execSync('npm link ' + packageInfo.name, {
      stdio:[0,1,2],
      cwd: process.env.APPDATA + '\\npm\\node_modules\\@wface\\server-app\\client-app'
    });

    // mevcut projeden @wface/components'in typescript ile load edilebilmesi icin 
    // componentsi bu mevcut projeye linkleyelim
    // childProcess.execSync('npm link', {
    //   stdio:[0,1,2],
    //   cwd: __dirname + '/../../../node_modules/@wface/server-app/client-app/node_modules/@wface/components'  
    // });
    // childProcess.execSync('npm link @wface/components', {
    //   stdio:[0,1,2],
    //   cwd: process.cwd()  
    // });

    console.log(chalk.green(packageInfo.name) + " projesi wface'e linklendi.");
    console.log("you can run " + chalk.green("wface run") + " command to see your project on browser.");
  }
  else {
    console.log(chalk.red("package.json") + " couldn't be found. Please run this command on your projects root path.")
  }
}

exports.default = link;