'use strict';

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({

    clean: {
      example: ['dist/*']
    },

    copy: {
      main: {
        cwd: 'src/assets',
        src: '**/*',
        dest: 'dist/assets',
        expand: true
      },
    },

    // Build HTML from templates and data
    assemble: {
      options: {
        flatten: true,
        assets: 'dist/assets',
        partials: ['src/templates/includes/*.hbs'],
        helpers: ['src/templates/helpers/helper-*.js'],
        layoutdir: 'src/templates/layouts',
        layout: 'default.hbs',
        data: 'src/data/*.json',
      },
      files: {
        src: 'src/templates/*.hbs',
        dest: 'dist/',
        data: 'src/data/*.json',
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');


  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'copy', 'assemble']);
};
