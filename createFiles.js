'use strict';

var fs = require('fs');
var scriptsPath = __dirname.concat('/scripts');

var filesToCreate = [
    '1.js',
    '2.js',
    '3.js',
    '4.js',
    '5.js',
    '6.js',
    '7.js',
    '8.js',
    '9.js',
    'a.js',
    'b.js',
    'c.js',
    'd.js',
    'e.js',
    'f.js',
    'g.js',
    'h.js',
    'i.js',
    'j.js',
    'k.js',
    'l.js',
    'm.js',
    'o.js',
    'p.js',
 ];

function createFiles() {
    filesToCreate.forEach(function (filename) {
        fs.writeFile(scriptsPath.concat('/').concat(filename), '', function () {
          console.log(filename.concat(' saved!'));
        });
    });
}

createFiles();
