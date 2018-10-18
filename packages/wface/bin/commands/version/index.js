
const fs = require('fs');
const chalk = require("chalk");
const path = require("path");
const _ = require("lodash");
const npm = require("npm");

function version() {
  const wfaceDir = path.join(process.cwd(), "node_modules");
  const global = path.join(process.env.APPDATA, "npm/node_modules");

  console.log();
  logPackage("wface", path.join(global, "wface/package.json"));  
  logPackage("@wface/components", path.join(wfaceDir, "@wface/components/package.json"));  
  logPackage("@wface/container", path.join(wfaceDir, "@wface/container/package.json"));  
  logPackage("@wface/ioc", path.join(wfaceDir, "@wface/ioc/package.json"));  
  logPackage("@wface/store", path.join(wfaceDir, "@wface/store/package.json"));  
  logPackage("@wface/system", path.join(wfaceDir, "@wface/system/package.json"));   
  
  console.log();
  logPackage("react", path.join(wfaceDir, "react/package.json")); 
  logPackage("redux", path.join(wfaceDir, "redux/package.json")); 
  logPackage("@material-ui/core", path.join(wfaceDir, "@material-ui/core/package.json")); 

}

function logPackage(name, pckPath) {
  const pckInfo = pckPath && fs.existsSync(pckPath) && require(pckPath);

  let str = _.padEnd(name, 20, ' ') + " -> Current: ";
  str += _.padEnd((pckInfo ? pckInfo.version : "(-)"), 6, ' ');
  const latestVersion = getLatest(name);
  str += " Latest: " + latestVersion;

  if(pckInfo && pckInfo.version == latestVersion) {
    console.log(chalk.green(str));
  }
  else {
    console.log(chalk.red(str));
  }
}

function getLatest(packageName) {
  var sync = true;
  var data = null;
  npm.load({ parseable: true }, function (er, npm) {
    if (er) {
      sync = false;
      return cb(er);
    }
    npm.commands.show([packageName, "version"], true, (version,x) => {      
      data = x;
      sync = false;
    });
  })
  while(sync) {require('deasync').sleep(100);}
  return  Object.keys(data)[0];
}

exports.default = version;

