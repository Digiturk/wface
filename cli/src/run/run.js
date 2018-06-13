const process = require('process');
const childProcess = require('child_process');
const fileSystem = require('fs');
const chalk = require("chalk");
const readlineSync = require('readline-sync');
const init = require("../init/init").default;
// const packageInfo = require(process.cwd() + "/package.json")

function run () {
  if(!fileSystem.existsSync(__dirname + '/../../node_modules/@wface/server-app/client-app/node_modules')) {
    console.log(chalk.green("wface init") + " komutunun çalıştırılması gerekiyor ve 1-2 dk sürebilir.")
    if (readlineSync.keyInYN(chalk.green("wface init") + " komutunu simdi calistirmak ister misiniz?")) {
      init();
    } 
    else {
      return
    }
  }

  // Bu blok wface bind içerisine tasınmalıdır.
  if(packageInfo) {    
    childProcess.execSync('npm link', {
      stdio:[0,1,2],
      cwd: process.cwd()  
    });

    childProcess.execSync('npm link ' + packageInfo.name, {
      stdio:[0,1,2],
      cwd: __dirname + '/../../node_modules/@wface/server-app/client-app'  
    });
  }

  childProcess.execSync('dotnet run', {
    stdio:[0,1,2],
    cwd: __dirname + '/../../node_modules/@wface/server-app'  
  });
}

exports.default = run;