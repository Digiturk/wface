#!/usr/bin/env node

'use strict';
/**
 * Require dependencies
 *
 */
const program = require('commander'),
    chalk = require("chalk"),
    pkg = require('../package.json'),
    create = require('./create/create').default,
    run = require('./run/run').default,
    init = require('./init/init').default;    

/*****************************************************************************************************************/
/** 
 * commands
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

program
    .command("run")
    .action(() => {
        run();
    });

program
    .command("init")
    .action(() => {
        init();
    });    
/*****************************************************************************************************************/

program.parse(process.argv);
// if program was called with no arguments, show help.
if (program.args.length === 0) program.help();