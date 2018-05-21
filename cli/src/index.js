#!/usr/bin/env node

'use strict';
/**
 * Require dependencies
 *
 */
const program = require('commander'),
    chalk = require("chalk"),
    exec = require('child_process').exec,
    pkg = require('../package.json'),
    create = require('./create/create').default;    

/*****************************************************************************************************************/
/** 
 * Create command
 */    

program
    .version(pkg.version)
    .command('create <toCreate> <name>')
    .option('-d, --dir <dir>', 'Directory', process.cwd())        
    .action((toCreate, name, options)  => {  
        if(create[toCreate]) {
            create[toCreate](name, options);
            console.log(chalk.green(toCreate + " created"));
            console.log(chalk.yellow("WARNING! Don't forget compiling code before using it. To compile:"));
            console.log(chalk.blue("cd ") + name);
            console.log(chalk.blue("tsc"))
        }
        else {
            console.log("Unknown parameter: " + toCreate + ". Please use only one of class|component|screen");
        }
    });   
/*****************************************************************************************************************/


program.parse(process.argv);
// if program was called with no arguments, show help.
if (program.args.length === 0) program.help();