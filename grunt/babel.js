module.exports = {
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
}