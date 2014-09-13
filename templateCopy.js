'use strict';

var fs = require('fs');
var scriptsPath = __dirname.concat('/scripts');

function writeToScripts(err, template) {
    fs.readdir(scriptsPath, function (err, filenames) {
        filenames.forEach(function (filename) {
            fs.writeFile(scriptsPath.concat('/').concat(filename), template, function () {
              console.log(filename.concat(' saved!'));
            });
        });
    });
}

fs.readFile('template.js', 'utf8', writeToScripts);

