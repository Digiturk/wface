const chalk = require("chalk");
const inquirer = require('inquirer');
const childProcess = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const create = {
  class: function (name, options) {
  },

  component: function (name, options) {
  },

  screen: function (options) {
    var questions = [
      {
        name: 'name',
        message: "Screen name:",
        type: 'input',
        errorMessage: 'demknads',
        validate: checkName
      },
      {
        type: 'list',
        name: 'template',
        message: 'Template:',
        choices: [
          { key: 'empty', name: 'Empty', disabled: false },
          { key: '2card', name: '2 Card Screen', disabled: 'Temporarily unavailable' },
          { key: '3card', name: '3 Card Screen', disabled: 'Temporarily unavailable' },
          { key: 'criteria', name: 'Criteria Screen', disabled: 'Temporarily unavailable' }
        ],
      }
    ];

    inquirer.prompt(questions)
      .then(function (answers) {
        const dir = options.dir + "/src/" + answers.name;
        if (fs.existsSync(dir)) {
          console.log(chalk.red("Error: ") + "folder is already exist. Please use another name or delete old folder.")
          return;
        }
        else {
          fs.mkdirSync(dir);
        }

        answers.template = questions[1].choices.find(a => a.name == answers.template).key;

        const className = answers.name.replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).split("-").join("");
        let fileText = getTemplate("screen", "screen-" + answers.template, { className });
        !fs.existsSync(dir + "/index.tsx") && fileSystem.writeFileSync(dir + "/index.tsx", fileText);

        console.log(chalk.green("Screen code created successfully."));
        console.log(chalk.yellow("WARNING! Don't forget add your screen to index.ts file to export!"));
      })
      .catch(function (err) {
        console.log(err);
      });
  },

  project: function (options) {
    var questions = [
      {
        name: 'name',
        message: "Project name:",
        type: 'input',
        validate: checkName
      }
    ];

    inquirer.prompt(questions)
      .then(function (answers) {
        const dir = options.dir + "/" + answers.name;
        if (fs.existsSync(dir)) {
          console.log(chalk.red("Error: ") + "folder is already exist. Please use another name or delete old folder.")
          return;
        }
        else {
          fs.mkdirSync(dir);
        }

        const packageJson = require('../../../package.json');
        const filesToCopy = ['.babelrc', '.gitignore', 'index.tsx', 'tsconfig.json'];
        const foldersToCopy = ['assets', 'configs', 'public', 'src'];        

        // create folder and initialize npm


        // replace the default scripts, with the webpack scripts in package.json
        let newPckJson = { ...packageJson };
        newPckJson.name = answers.name;
        newPckJson.version = "1.0.0";
        delete newPckJson.homepage;
        delete newPckJson.repository;
        delete newPckJson.keywords;
        delete newPckJson.author;
        delete newPckJson.license;
        delete newPckJson.bugs;
        delete newPckJson.bin;
        delete newPckJson.dependencies["chalk"];
        delete newPckJson.dependencies["commander"];
        delete newPckJson.dependencies["fs-extra"];
        delete newPckJson.dependencies["npm"];
        const data = JSON.stringify(newPckJson, null, "\t");
        fs.writeFileSync(`${answers.name}/package.json`, data);
        console.log(chalk.green("package.json created..."));

        for (let i = 0; i < filesToCopy.length; i += 1) {
          fs.createReadStream(path.join(__dirname, `../../../${filesToCopy[i]}`))
            .pipe(fs.createWriteStream(`${answers.name}/${filesToCopy[i]}`));          
          console.log(chalk.green(filesToCopy[i] + " created..."));
        }
        
        for (let i = 0; i < foldersToCopy.length; i++) {
          fs.copySync(path.join(__dirname, '../../../' + foldersToCopy[i]), `${answers.name}/${foldersToCopy[i]}`)
          console.log(chalk.green(foldersToCopy[i] + " folder created..."));
        }

        console.log("Installling dependencies. This process could take a few minutes...");
        childProcess.execSync('npm install', {
          stdio: [0,1,2],
          cwd: answers.name 
        });

        console.log("Dependencies installed.");
        console.log();
        console.log();
        console.log(chalk.green("Project created successfully!"));
        console.log()
        console.log("To run project:")
        console.log("\t" + chalk.green("cd " + answers.name) + " && " + chalk.green("npm start"));
      });
  }
}

function getTemplate(folder, name, parameters) {
  const path = __dirname + "\\templates\\" + folder + "\\" + name + ".txt";
  if (fs.existsSync(path)) {
    let text = fs.readFileSync(path, 'utf8');
    if (parameters) {
      for (let key in parameters) {
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

exports.default = create;