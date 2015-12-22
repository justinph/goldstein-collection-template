'use strict';

module.exports = function (grunt) {

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');



  // Project configuration.
  grunt.initConfig({

    clean: {
      main: ['dist/*']
    },

    less: {
      main: {
        options: {
            sourceMap: true,
            relativeUrls: false,
            compress: false,
            paths: [
              'src/assets/css',
              'node_modules/bootstrap/less'
              ]
        },
        files: {
          'dist/assets/css/main.css': 'src/less/main.less'
        }
      }
    },

    copy: {
      main: {
        cwd: 'src/assets',
        src: '**/*',
        dest: 'dist/assets',
        expand: true
      },
      jquery: {
        src: 'node_modules/jquery/dist/jquery.min.js',
        dest: 'dist/assets/js/jquery.min.js'
      },
      bootstrap_js: {
        src: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
        dest: 'dist/assets/js/bootstrap.min.js'
      },
      bootstrap_fonts: {
        cwd: 'node_modules/bootstrap/dist/fonts',
        src: '*',
        dest: 'dist/assets/fonts',
        expand: true
      }
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

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'copy', 'less', 'assemble']);
};
