module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt); // required to load cssnano and sass and babel

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load grunt config
    require('load-grunt-config')(grunt);

    // register tasks
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('development', ['clean:cleanDist', 'jade', 'sass', 'babel', 'postcss:build']);
    grunt.registerTask('production', ['clean:cleanDist', 'jade', 'copy', 'sass', 'postcss:build', 'postcss:minify', 'uglify', 'concat', 'imagemin:build', 'clean:cleanJS']);

};