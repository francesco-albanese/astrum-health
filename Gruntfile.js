module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); // required to load cssnano and sass and babel
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks); // automatically load all grunt plugins

    // Project configuration
    grunt.initConfig({

        jade: {
            build: {
                files: [ {
                    cwd: './app/jade/',
                    src: '*.jade',
                    dest: 'dist/',
                    expand: true,
                    ext: '.html'
                }, {
                    cwd: './app/jade/',
                    src: '*.jade',
                    dest: './app',
                    expand: true,
                    ext: '.html'
                } ]
            },
        }, // end jade

        sass: {
            options: {
			        sourceMap: true
    		    },
            build: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto'
                },
                files: [ {
                    cwd: './app/scss/',
                    src: 'main.scss',
                    expand: true,
                    dest: './app/css',
                    ext: '.css'
                } ]
            },
        }, // end sass

        postcss: {
            build: {
                options: {
                  map: true,
                    processors: [
                        require('autoprefixer')({browsers: 'last 5 versions'}),
                    ]
                },
                files: {
                    'app/css/main.css' : 'app/css/main.css',
                }
            },
            minify: {
                options: {
                    processors: [
                        require('cssnano')()
                    ]
                },
                files: {
                    'dist/css/main.min.css' : 'app/css/main.css',
                    'app/css/main.min.css' : 'app/css/main.css'
                }
            }
        }, // end postcss

        jshint: {
            build: {
                options: {
                    reporter: require('jshint-stylish')
                },
                files: {
                    src: ['Gruntfile.js','./app/js/*.js',]
                }
            }
        }, // end jshint

        babel: {
            options: {
              sourceMap: true,
              presets: ['babel-preset-es2015']
            },
            files: {
              expand: true,
              src: ['./app/js/es6/*.es6'],
              dest: './',
              ext: '.js'
            }
        }, // end babel

        uglify: {
            build: {
                options: {
                    mangle: false
                },
                files: [ {
                    cwd: './app/js/es6',
                    src: '*.js',
                    dest: 'dist/js',
                    expand: true,
                    ext: '.min.js'
                } ]
            }
        }, // end uglify

        imagemin: {
            build: {
                options: {
                    optimizationLevel: 5,
                    progressive: true,
                    interlaced: true,
                },
                files: [ {
                    cwd: './app/images/',
                    src: '**/*.{png,jpg,gif,svg,jpeg}',
                    dest: 'dist/images',
                    expand: true,
                } ]
            }
        }, // end imagemin

        clean:  {
          cleanDist: ['dist'],
          cleanJS: ['dist/js/**.js', '!dist/js/bundle.js']
        }, // end clean

        copy: {
          main: {
            expand: true,
            cwd: './app/font',
            src: '**',
            dest: 'dist/font',
          },
        }, // end copy

        concat: {
          options: {
            separator: ';',
          },
          dist: {
            src: ['./dist/js/**.js'],
            dest: 'dist/js/bundle.js',
          },
        }, // end concat

        browserSync: {
            build: {
                bsFiles: {
                    src: [
                        'app/*.html',
                        'app/css/*.css',
                        'app/js/**/*.js'
                    ]
                },
                options: {
                    keepalive: true,
                    notify:false,
                    reloadOnRestart: true,
                    watchTask: true,
                    watchOptions: {
                        ignored: ''
                    },
                    server: './app',
                }
            }
        }, // end browserSync

        watch: {
            jade: {
                files: './app/jade/**/*.jade',
                tasks: ['jade']
            },
            stylesheet: {
                files: './app/scss/**/*.scss',
                tasks: ['sass', 'postcss:build', 'postcss:minify']
            },
            babel: {
              files: '.app/js/es6/*.es6',
              tasks: ['babel']
            },
            scripts: {
                files: './app/js/es6/*.js',
                tasks: ['jshint', 'uglify']
            },
            images: {
                files: ['./app/images/**/*.{png,jpg,gif,svg}'],
                tasks: ['imagemin:build']
            }

        } // end watch


    });

    // register tasks
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('production', ['clean:cleanDist', 'jade', 'copy', 'sass','postcss:build', 'postcss:minify', 'uglify', 'concat', 'imagemin:build', 'clean:cleanJS']);

};
