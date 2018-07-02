const fileSystem = require('fs');
const chalk = require("chalk");
const inquirer = require('inquirer');
const childProcess = require('child_process');

const create = {
    class: function(name, options) {
    },

    component: function(name, options) {
    },

    screen: function(options) {
        var questions = [
            {
                name:'name', 
                message: "Screen name:",
                type:'input',
                errorMessage: 'demknads',
                validate: checkName          
            },
            {
                type: 'list',
                name: 'template',
                message: 'Template:',
                choices: [
                    {key: 'empty', name: 'Empty', disabled: false},
                    {key: '2card', name: '2 Card Screen', disabled: 'Temporarily unavailable' },
                    {key: '3card', name: '3 Card Screen', disabled: 'Temporarily unavailable' },
                    {key: 'criteria', name: 'Criteria Screen', disabled: 'Temporarily unavailable' }
                ],  
            }
        ];
           
        inquirer.prompt(questions)
            .then(function(answers) {
                const dir = options.dir + "/src/" + answers.name;
                if(fileSystem.existsSync(dir)) {
                    console.log(chalk.red("Error: ") + "folder is already exist. Please use another name or delete old folder.")                    
                    return;
                }
                else{
                    fileSystem.mkdirSync(dir);
                }

                answers.template = questions[1].choices.find(a => a.name == answers.template).key;

                const className = answers.name.replace(/(\w)(\w*)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();}).split("-").join(""); 
                let fileText = getTemplate("screen", "screen-" + answers.template, {className});
                !fileSystem.existsSync(dir + "/index.tsx") && fileSystem.writeFileSync(dir + "/index.tsx", fileText);

                
                let newLine = "export { " + className + " } from './src/" + answers.name + "';"
                let lines = fileSystem.readFileSync(options.dir + "/index.ts", 'utf8').split(/\r?\n/);
                if(!lines.find(a => a == newLine)) {
                    lines.push(newLine);

                    fileSystem.writeFileSync(options.dir + "/index.ts", lines.join('\n'));
                }

                console.log(chalk.green("Screen code created successfully"));
            })
            .catch(function(err) {
                console.log(err);
            });
    },

    project: function(options) {
        var questions = [
            {
                name:'name', 
                message: "Project name:",
                type:'input',
                validate: checkName          
            }
        ];
           
        inquirer.prompt(questions)
            .then(function(answers) {
                const dir = options.dir + "/" + answers.name;
                if(fileSystem.existsSync(dir)) {
                    console.log(chalk.red("Error: ") + "folder is already exist. Please use another name or delete old folder.")
                    return;
                }
                else{
                    fileSystem.mkdirSync(dir);
                }

                let fileText = getTemplate("project", ".gitignore");
                !fileSystem.existsSync(dir + "/.gitignore") && fileSystem.writeFileSync(dir + "/.gitignore", fileText);

                !fileSystem.existsSync(dir + "/src") && fileSystem.mkdirSync(dir + "/src");
                !fileSystem.existsSync(dir + "/index.ts") && fileSystem.writeFileSync(dir + "/index.ts", "");

                fileText = getTemplate("project", "package.json", {projectName: answers.name});
                !fileSystem.existsSync(dir + "/package.json") && fileSystem.writeFileSync(dir + "/package.json", fileText);

                fileText = getTemplate("project", "tsconfig.json");
                !fileSystem.existsSync(dir + "/tsconfig.json") && fileSystem.writeFileSync(dir + "/tsconfig.json", fileText);

                console.log(chalk.green("Project folder was created"));
                console.log("To see on browser: " + chalk.green("cd " + answers.name) + " & " + chalk.green("wface link") + " & " + chalk.green("wface run"));
            })
            .catch(function(err) {
                console.log(err);
            });
    }
}

function getTemplate(folder, name, parameters) {
    const path = __dirname + "\\templates\\" + folder + "\\" + name + ".txt";
    if(fileSystem.existsSync(path)) {
        let text = fileSystem.readFileSync(path, 'utf8');
        if(parameters) {
            for(let key in parameters) {
                text = text.split("%" + key + "%").join(parameters[key]);
            }
        }
        return text;
    }
}

function checkName(name) {
    let regex = /^[a-z][a-z0-9]+([-][a-z0-9]+)*$/g;
    let result = name.match(regex) == name; 
    return result || 'Wrong naming! Please specify a name that is contains only lowercase letters, number and - as delimeter.");'
}

function replaceAll (text, search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

exports.default = create;