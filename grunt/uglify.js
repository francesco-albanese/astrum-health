module.exports = {
    build: {
        options: {
            mangle: false
        },
        files: [{
            cwd: './app/js/es6',
            src: '*.js',
            dest: 'dist/js',
            expand: true,
            ext: '.min.js'
        }]
    }
}