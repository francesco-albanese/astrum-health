module.exports = {
    options: {
        sourceMap: true
    },
    build: {
        options: {
            style: 'expanded',
            sourcemap: 'auto'
        },
        files: [{
            cwd: './app/scss/',
            src: 'main.scss',
            expand: true,
            dest: './app/css',
            ext: '.css'
        }]
    },
}