const childProcess = require('child_process');
const fileSystem = require('fs');
const chalk = require("chalk");
const path = require("path");

function run () {
  const wfaceDir = path.join(process.argv[1], '../../../')
  
  if(!fileSystem.existsSync(wfaceDir + '\\client-app')) {
    console.error(chalk.green('@wface/client-app') + " could not be found!");
    console.log("Please firstly install client-app with running command " + chalk.green('wface install'));
    return;
  }

  let clientApp;

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
}

exports.default = run;