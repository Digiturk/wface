const fileSystem = require('fs');

const create = {
    class: function(name, options) {
        const dir = options.dir + "/" + name;
        const dirSrc = dir + "/src";

        // Create folder
        !fileSystem.existsSync(dir) && fileSystem.mkdirSync(dir);
        // Create src folder
        !fileSystem.existsSync(dirSrc) && fileSystem.mkdirSync(dirSrc);

        // Create class code in index.ts
        const className = name.replace(/(\w)(\w*)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();}).split("-").join("");    
        let fileText = getTemplate("class", {className: className})
        !fileSystem.existsSync(dirSrc + "/index.ts") && fileSystem.writeFileSync(dirSrc + "/index.ts", fileText);

        // Create .npmignore file
        fileText = `tsconfig.json\nsrc`;
        !fileSystem.existsSync(dir + "/.npmignore") && fileSystem.writeFileSync(dir + "/.npmignore", fileText);

        // Create package.json
        fileText = getTemplate("classPackageJson", {name: name});
        !fileSystem.existsSync(dir + "/package.json") && fileSystem.writeFileSync(dir + "/package.json", fileText);

        // Create package.json
        fileText = getTemplate("classTsconfigJson");
        !fileSystem.existsSync(dir + "/tsconfig.json") && fileSystem.writeFileSync(dir + "/tsconfig.json", fileText);
    },

    component: function(name, options) {
        const dir = options.dir + "/" + name;
        const dirSrc = dir + "/src";

        // Create folder
        !fileSystem.existsSync(dir) && fileSystem.mkdirSync(dir);
        // Create src folder
        !fileSystem.existsSync(dirSrc) && fileSystem.mkdirSync(dirSrc);

        // Create class code in index.ts
        const className = name.replace(/(\w)(\w*)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();}).split("-").join("");     
        let fileText = getTemplate("component", {className: className})
        !fileSystem.existsSync(dirSrc + "/index.tsx") && fileSystem.writeFileSync(dirSrc + "/index.tsx", fileText);

        // Create .npmignore file
        fileText = `tsconfig.json\nsrc`;
        !fileSystem.existsSync(dir + "/.npmignore") && fileSystem.writeFileSync(dir + "/.npmignore", fileText);

        // Create package.json
        fileText = getTemplate("componentPackageJson", {name: name});
        !fileSystem.existsSync(dir + "/package.json") && fileSystem.writeFileSync(dir + "/package.json", fileText);

        // Create package.json
        fileText = getTemplate("componenttsconfigJson");
        !fileSystem.existsSync(dir + "/tsconfig.json") && fileSystem.writeFileSync(dir + "/tsconfig.json", fileText);
    },

    screen: function(options) {
        console.log("screen create called");
    }
}

function getTemplate(name, parameters) {
    const path = __dirname + "\\templates\\" + name + ".txt";
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

function replaceAll (text, search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

exports.default = create;