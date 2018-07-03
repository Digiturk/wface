const childProcess = require('child_process');
const fileSystem = require('fs');
const chalk = require("chalk");
const readlineSync = require('readline-sync');
const open = require('open');
const path = require("path");



function run () {
  const wfaceDir = path.join(process.argv[1], '../../../')
  
  if(!fileSystem.existsSync(wfaceDir + '\\client-app')) {
    console.error(chalk.green('@wface/client-app') + " could not be found!")
    if (readlineSync.keyInYN("Do you want to install @wface/client-app now?")) {
      childProcess.execSync('npm install -g @wface/client-app', {
        stdio: [0,1,2]
      });

      childProcess.execSync('npm install', {
        stdio: [0,1,2],
        cwd: wfaceDir + "\\client-app"
      });
    } 
  }

  if(!fileSystem.existsSync(wfaceDir + '\\server-app')) {
    console.error(chalk.green('@wface/server-app') + " could not be found!")
    if (readlineSync.keyInYN("Do you want to install @wface/server-app now?")) {
      childProcess.execSync('npm install -g @wface/server-app', {
        stdio: [0,1,2]
      });
    } 
  }

  let clientApp;
  let serverApp;

  fileSystem.readlink(wfaceDir + "\\client-app", (err, linkedPath) => {
    clientApp = childProcess.exec('npm start', {
      cwd: linkedPath || wfaceDir + "\\client-app"
    });
    
    clientApp.stdout.on('data', (data) => {
      console.log(chalk.bgGreen("[C-Trace]") + " " + data);
    });
    
    clientApp.stderr.on('data', (data) => {
      console.log(chalk.bgRed("[C-Error]") + " " +  data);      
    });
    
    clientApp.on('close', (code) => {
      console.log(chalk.bgWhite("[C-Trace]") + ` client app process exited with code ${code}`);      
    });

  });  

  serverApp = childProcess.exec('dotnet run', {
    cwd: wfaceDir + "\\server-app"
  });
  serverApp.stdout.on('data', (data) => {
      console.log(chalk.inverse("[S-Trace]") + " " + chalk.gray(data));
  });
  serverApp.stderr.on('data', (data) => {
      console.log(chalk.bgRed("[S-Error]") + " " + data);      
  });
  serverApp.on('close', (code) => {
      console.log(chalk.bgWhite("[S-Trace]") + ` server app process exited with code ${code}`);      
  });

  console.log("Wface server is running on http://localhost:2018");
  open('http://localhost:2018');
}

exports.default = run;