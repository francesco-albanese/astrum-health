module.exports = {
    jade: {
        files: './app/jade/**/*.jade',
        tasks: ['jade']
    },
    stylesheet: {
        files: './app/scss/**/*.scss',
        tasks: ['sass', 'postcss:build', 'postcss:minify']
    },
    babel: {
        files: '.app/js/**/*.es6',
        tasks: ['babel']
    },
    scripts: {
        files: './app/js/es6/*.js',
        tasks: ['jshint', 'uglify']
    },
    images: {
        files: ['./app/images/**/*.{png,jpg,gif,svg}'],
        tasks: ['imagemin:build']
    },
    typescript: {
        files: ['./app/typescript/**/*.ts'],
        tasks: ['typescript']
    }

}