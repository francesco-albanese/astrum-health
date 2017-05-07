module.exports = {
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
            notify: false,
            reloadOnRestart: true,
            watchTask: true,
            watchOptions: {
                ignored: ''
            },
            server: './app',
        }
    }
}