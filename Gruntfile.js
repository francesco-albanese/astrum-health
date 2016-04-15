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
            build: {
                options: {
                    style: 'expanded'
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
                    map: {
                        inline: false,
                        annotation: 'app/css/'
                    },
                    processors: [
                        require('autoprefixer')({browsers: 'last 10 versions'}),
                        require('cssnano')()
                    ]
                },
                files: {
                    'app/css/main.min.css' : 'app/css/main.css',
                    'dist/css/main.min.css' : 'app/css/main.css'
                }
            },
        }, // end postcss

        jshint: {
            build: {
                options: {
                    reporter: require('jshint-stylish')
                },
                files: {
                    src: ['Gruntfile.js','./app/js/*.js', 'dist/js/*.js']
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
                        'app/css/main.css',
                        'app/js/**/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        }, // end browserSync

        watch: {
            jade: {
                files: 'app/jade/*.jade',
                tasks: ['jade']
            },
            stylesheet: {
                files: 'app/scss/main.scss',
                tasks: ['sass', 'postcss']
            },
            scripts: {
                files: 'app/js/*.js',
                tasks: ['jshint', 'uglify']
            },
            images: {
                files: ['app/images/**/*.{png,jpg,gif,svg}'],
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
