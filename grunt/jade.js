module.exports = {
    build: {
        files: [{
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
        }]
    },
}