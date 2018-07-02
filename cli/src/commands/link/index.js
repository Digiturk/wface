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
      cwd: process.env.APPDATA + '\\npm\\node_modules\\@wface\\client-app'
    });
    
    const moduleName = packageInfo.name.replace(/(\w)(\w*)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();}).split(/-|@|\//).join(""); 
    const newLine = `import * as ${moduleName} from '${packageInfo.name}'; export { ${moduleName} }`;
    console.log(newLine);
    const path = process.env.APPDATA + '\\npm\\node_modules\\@wface\\client-app\\src\\helpers\\GeneratedCode.ts';
    let lines = fs.readFileSync(path, 'utf8').split(/\r?\n/);
    if(!lines.find(a => a == newLine)) {
        lines.push(newLine);

        fs.writeFileSync(path, lines.join('\n'));
    }

    console.log(chalk.green(packageInfo.name) + " linked to wface.");
    console.log("you can run " + chalk.green("wface run") + " command to see your project on browser.");
  }
  else {
    console.log(chalk.red("package.json") + " couldn't be found. Please run this command on your projects root path.")
  }
}

exports.default = link;