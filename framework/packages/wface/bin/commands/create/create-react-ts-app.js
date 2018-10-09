#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');

const packageJson = require('../package.json');
const filesToCopy = ['.babelrc', '.gitignore', 'index.tsx', 'tsconfig.json'];
const foldersToCopy = ['configs', 'public', 'src'];

// create folder and initialize npm
exec(`mkdir ${process.argv[2]} && cd ${process.argv[2]}`,
  (initErr, initStdout, initStderr) => {
    if (initErr) {
      console.error(`Everything was fine, then it wasn't: ${initErr}`);
      return;
    }

    // replace the default scripts, with the webpack scripts in package.json
    let newPckJson = {...packageJson};
    newPckJson.name = process.argv[2];
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
    fs.writeFile(`${process.argv[2]}/package.json`, data, err2 => err2 || true);

    for (let i = 0; i < filesToCopy.length; i += 1) {
      fs.createReadStream(path.join(__dirname, `../${filesToCopy[i]}`))
        .pipe(fs.createWriteStream(`${process.argv[2]}/${filesToCopy[i]}`));
    }
    for (let i = 0; i < foldersToCopy.length; i++) {
      fs.copy(path.join(__dirname, '../' + foldersToCopy[i]), `${process.argv[2]}/${foldersToCopy[i]}`)
        .then(() => console.log(`${foldersToCopy[i]} copied ${process.argv[2]} folder`))
        .catch(err => console.error(err));
    }
  
    // installing dependencies
    exec(`cd ${process.argv[2]} && npm install`,
      (npmErr, npmStdout, npmStderr) => {
        if (npmErr) {
          console.error(`it's always npm, ain't it? ${npmErr}`);
          return;
        }
        console.log("Everything ok");
      },
    );
  },
);
