module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          ['app', 'dist'] : 'app/jade/*.jade'
        }
      },
    }, // end jade

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      files: ['Gruntfile.js', 'app/js/*.js'],
    }, // end jshint

    uglify: {
      my_target: {
        options: {
          sourceMap: true,
          sourceMapName: 'app/js/jsSourceMap.map',
          beautify: {
            width: 80,
            beautify: true
          }
        },
        files: {
          'dist/bundle.min.js' : ['app/index.js']
        }
      },
    }, // end uglify

    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'app/css'
        },
        processors: [
          require('pixrem')(),
          require('autoprefixer')({browsers: ['last 10 versions']}),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'app/css/*.css'
      }
    }, // end postcss

    concat: {
      options: {
        separator: ';\n',
        banner: 'Begin JS files concatenation',
        footer: 'end JS files concatenation',
        sourceMap: true,
      },
      dist: {
        src: ['app/js/index.js', 'app/js/index2.js'],
        dest: ['dist/js/bundle.js', 'app/js/bundle.js']
      },
    }, // end concat

    imagemin: {
      options: {
        optimizationLevel: 5,
        progressive: true,
        interlaced: true,
      },
      files: {
        src: ['app/images/**/*.{png,jpg,gif,svg}'],
        dest: 'dist/images'
      },
    }, // end imagemin

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'app/css/*.css',
            'app/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './app'
        },
      },
    }, // end browserSync

  });
  // Tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
