module.exports = {
    options: {
        separator: ';',
    },
    dist: {
        src: ['./dist/js/**.js', '!./dist/js/displaymode.min.js', '!./dist/js/tables.min.js'],
        dest: 'dist/js/bundle.js',
    },
}