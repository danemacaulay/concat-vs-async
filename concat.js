'use strict';

var fs = require('fs');
var compressor = require('node-minify');

var scriptsPath = __dirname.concat('/scripts');

function updateFilenames (filename) {
    return 'scripts/'.concat(filename);
}

function compress (err, filenames) {
    new compressor.minify({
        type: 'no-compress',
        fileIn: filenames.map(updateFilenames),
        fileOut: 'build/build.js',
    });
}

fs.readdir(scriptsPath, compress);

