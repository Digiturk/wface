#!/usr/bin/env node

'use strict';
/**
 * Require dependencies
 *
 */
const program = require('commander'),
    chalk = require("chalk"),
    pkg = require('../package.json'),
    eject = require('./commands/eject').default,
    link = require('./commands/link').default,
    create = require('./commands/create/create').default,
    run = require('./commands/run').default,
    init = require('./commands/init').default;    

/*****************************************************************************************************************/
/** 
 * commands
 */  

program
    .version(pkg.version)
    .command('create <toCreate>')
    .option('-d, --dir <dir>', 'Directory', process.cwd())        
    .action((toCreate, options)  => {  
        if(create[toCreate]) {
            create[toCreate](options);
            // console.log(chalk.green(name + " was created"));
        }
        else {
            console.log(chalk.red("Unknown parameter: ") + toCreate);
            console.log("Please use only one of project|class|component|screen");
        }
    });   



program.command("eject").action(() => { eject(); });     
program.command("init").action(() => { init(); });     
program.command("link").action(() => { link(); });     
program.command("run").action(() => { run(); });     
   
/*****************************************************************************************************************/

program.parse(process.argv);
// if program was called with no arguments, show help.
if (program.args.length === 0) program.help();