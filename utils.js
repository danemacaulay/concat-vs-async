/*global module: true, require: true, __dirname: true */
var fs = require('fs');
var scriptsPath = __dirname.concat('/scripts');

function generateFileList(x) {
    x = x ? x : 25;
    var n = 0;
    var filesToCreate = [];

    while (x > n++) {
      filesToCreate.push(Math.random().toString(36).slice(2).concat('.js'));
    }
    return filesToCreate;
}

function createFiles(filesToCreate, template) {
    if (!fs.existsSync('scripts')) {
        fs.mkdirSync('scripts');
    }
    if (!fs.existsSync('build')) {
        fs.mkdirSync('build');
    }
    filesToCreate.forEach(function (filename) {
        fs.writeFileSync(scriptsPath.concat('/').concat(filename), template);
    });
}

module.exports = {
    createFilesByTemplate: function (count) {
        count = count ? count : 5;
        var list = generateFileList(count);
        var template = fs.readFileSync('template.js', 'utf8');
        createFiles(list, template);
    }
}
