'use strict';

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // Build HTML from templates and data
    assemble: {
      options: {
        flatten: true,
        assets: 'dist/assets',
        partials: ['src/templates/includes/*.hbs'],
        helpers: ['src/templates/helpers/helper-*.js'],
        layoutdir: 'src/templates/layouts',
        layout: 'default.hbs',
        data: ['src/data/*.json']
      },
      pages: {
        src: 'src/templates/*.hbs',
        dest: 'dist/'
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');

  // Default tasks to be run.
  grunt.registerTask('default', ['assemble']);
};
