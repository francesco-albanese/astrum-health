module.exports = {
    build: {
        options: {
            map: true,
            processors: [
                require('autoprefixer')({
                    browsers: 'last 5 versions'
                }),
            ]
        },
        files: {
            'app/css/main.css': 'app/css/main.css',
        }
    },
    minify: {
        options: {
            processors: [
                require('cssnano')()
            ]
        },
        files: {
            'dist/css/main.min.css': 'app/css/main.css',
            'app/css/main.min.css': 'app/css/main.css'
        }
    }
}