const process = require('process');
const childProcess = require('child_process');
const chalk = require("chalk");
const fs = require('fs');
const path = require('path');

if(fs.existsSync(process.cwd() + "/package.json")) {
  var packageInfo = require(process.cwd() + "/package.json")
}

function unlink () {
  if(packageInfo) {    
    const wfaceDir = path.join(process.argv[1], '../../../');

    // öncelikle mevcut projeyi linkleyelim.
    childProcess.execSync('npm unlink', {
      stdio:[0,1,2],
      cwd: process.cwd()  
    });
    childProcess.execSync('npm unlink ' + packageInfo.name, {
      stdio:[0,1,2],
      cwd: path.join(wfaceDir, 'client-app')
    });
    
    const moduleName = packageInfo.name.replace(/(\w)(\w*)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();}).split(/-|@|\//).join(""); 
    const newLine = `try { Projects.${moduleName} = require('${packageInfo.name}'); } catch (ex) {}`
    const codePath = path.join(wfaceDir, 'client-app\\src\\helpers\\GeneratedCode.ts');
    let lines = fs.readFileSync(codePath, 'utf8').split(/\r?\n/);
    var index = lines.indexOf(newLine);
    if (index !== -1) {
      lines.splice(index, 1);
    }

    fs.writeFileSync(codePath, lines.join('\n'));

    console.log(chalk.green(packageInfo.name) + " unlinked from wface.");
  }
  else {
    console.log(chalk.red("package.json") + " couldn't be found. Please run this command on your projects root path.")
  }
}

exports.default = unlink;