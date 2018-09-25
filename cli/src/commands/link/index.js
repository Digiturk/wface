const process = require('process');
const childProcess = require('child_process');
const chalk = require("chalk");
const fs = require('fs');
const path = require('path');

if(fs.existsSync(process.cwd() + "/package.json")) {
  var packageInfo = require(process.cwd() + "/package.json")
}

function link () {
  if(packageInfo) {    
    const wfaceDir = path.join(process.argv[1], '../../../');

    // öncelikle mevcut projeyi linkleyelim.
    childProcess.execSync('npm link', {
      stdio:[0,1,2],
      cwd: process.cwd()  
    });
    childProcess.execSync('npm link ' + packageInfo.name, {
      stdio:[0,1,2],
      cwd: path.join(wfaceDir, 'client-app')
    });
    
    const moduleName = packageInfo.name.replace(/(\w)(\w*)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();}).split(/-|@|\//).join(""); 
    const newLine = `try { Projects.${moduleName} = require('${packageInfo.name}').default; } catch (ex) {}`
    const codePath = path.join(wfaceDir, 'client-app\\src\\helpers\\GeneratedCode.ts');
    let lines = fs.readFileSync(codePath, 'utf8').split(/\r?\n/);
    if(!lines.find(a => a == newLine)) {
        lines.push(newLine);

        fs.writeFileSync(codePath, lines.join('\n'));
    }

    console.log(chalk.green(packageInfo.name) + " linked to wface.");
    console.log("you can run " + chalk.green("wface run") + " command to see your project on browser.");
  }
  else {
    console.log(chalk.red("package.json") + " couldn't be found. Please run this command on your projects root path.")
  }
}

exports.default = link;