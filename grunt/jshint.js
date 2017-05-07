module.exports = {
    build: {
        options: {
            reporter: require('jshint-stylish')
        },
        files: {
            src: ['Gruntfile.js', './app/js/*.js', ]
        }
    }
}