/*global module: true, require: true */
var utils = require('./utils');
module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-scriptlinker');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('create', 'Create js files from template', function(target) {
        utils.createFilesByTemplate(target);
    });

    grunt.registerTask('build', 'Create js files from template', function(target) {
        return grunt.task.run(['clean', 'create:'.concat(target), 'scriptlinker', 'concat', 'connect:uses_defaults:keepalive']);
    });

    grunt.initConfig({
        clean: {
            async: 'scripts/*.js',
            concat: 'build/*.js',
        },
        // serve static assets
        connect: {
            'uses_defaults': {},
        },
        scriptlinker: {
            async: {
                options: {
                    fileTmpl: '\n<script src="%s" async onload="timer()"></script>',
                },
                files: {
                    'index-async.html': ['scripts/*.js']
                },
            },
        },
        concat: {
            build: {
                src: ['scripts/*.js'],
                dest: 'build/build.js',
            },
        },
    });
};
