module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); // required to load cssnano and sass

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

        uglify: {
            build: {
                options: {
                    mangle: false
                },
                files: [ {
                    cwd: './app/js/',
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
                    src: '**/*.{png,jpg,gif,svg}',
                    dest: 'dist/images',
                    expand: true,
                } ]
            }
        }, // end imagemin

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
            scripts: {
                files: './app/js/*.js',
                tasks: ['jshint', 'uglify']
            },
            images: {
                files: ['./app/images/**/*.{png,jpg,gif,svg}'],
                tasks: ['imagemin:build']
            }

        }, // end watch


    });

    // enable plugins with call
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    grunt.registerTask('default', ['browserSync', 'watch']);

};
