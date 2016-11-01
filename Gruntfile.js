'use strict';

var yfm = require('assemble-yaml');

module.exports = function (grunt) {

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Project configuration.
  grunt.initConfig({

    clean: {
      main: ['dist/*','!dist/example/**', '!dist/handlebars.html', '!dist/README.md']
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
      interaction_js: {
        src: 'src/js/interaction.js',
        dest: 'dist/assets/js/interaction.js'
      },
      jquery: {
        src: 'node_modules/jquery/dist/jquery.min.js',
        dest: 'dist/assets/js/jquery.min.js'
      },
      handlebars: {
        src: 'node_modules/handlebars/dist/handlebars.min.js',
        dest: 'dist/assets/js/handlebars.min.js'
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
        partials: ['src/templates/partials/*.hbs'],
        helpers: ['handlebars-helper-add-commas'], //'src/templates/helpers/helper-*.js'
        layoutdir: 'src/templates/layouts',
        layout: 'default.hbs',
        data: 'src/data/*.json',
      },
      files: {
        src: 'src/templates/*.hbs',
        dest: 'dist/',
        data: 'src/data/*.json',
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: 'GOLDSTEIN.templates',

          //remove yfm from tempaltes, removing assemble stuff
          processContent: function (content, filepath) {
            return yfm.strip(content, {fromFile: false});
          },
          partialRegex: /.*/,
          partialsPathRegex: /\/partials\//,

          //turn /src/templates/something.hbs into something
          processName: function (filePath) {
             return filePath.replace(/^src\/templates\//, '').replace(/\.hbs$/, '');
          }
        },
        files: {
          'dist/assets/js/templates.js' : [
            'src/templates/**/*.hbs',
            '!src/templates/layouts/*.hbs' //skip assemble layouts
          ]
        }
      }
    },

    concat: {
        options: {
          separator: ';',
          stripBanners: true,
        },
        top: {
            src: [
              'dist/assets/js/umnhf-2015.js',
              'dist/assets/js/html5shiv-printshiv.js',
              'dist/assets/js/jquery.min.js',
              'node_modules/d3-dsv/build/d3-dsv.min.js',
              'dist/assets/js/handlebars.min.js',
              'dist/assets/js/templates.js',
              'src/js/helpers.is.js'
            ],
            dest: 'dist/assets/js/libs.top.js',
        },
        bottom: {
            src: [
              'dist/assets/js/bootstrap.min.js',
              'dist/assets/js/bootstrap-tabcollapse.js',
              'dist/assets/js/interaction.js'
            ],
            dest: 'dist/assets/js/libs.bottom.js',
        },

    },

    watch: {
      less: {
        files: ['src/less/**/*.less'],
        tasks: 'less'
      },
      js: {
        files: [
          'Gruntfile.js',
          'js/*.js'
        ]//,
        //tasks: 'jshint'
      },
      assemble: {
        files: ['src/templates/**/*.hbs', 'src/data/*.json', 'src/js/*.js'],
        tasks: 'assemble'
      },
      copy: {
        files: ['src/js/*.js'],
        tasks: 'copy'
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'dist/*.html',
          'dist/assets/css/*.css',
          'dist/assets/js/*.js'
        ]
      }
    },
  });

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'copy', 'less', 'assemble', 'handlebars', 'concat']);
};
