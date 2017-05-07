module.exports = {
    build: {
        options: {
            optimizationLevel: 5,
            progressive: true,
            interlaced: true,
        },
        files: [{
            cwd: './app/images/',
            src: '**/*.{png,jpg,gif,svg,jpeg}',
            dest: 'dist/images',
            expand: true,
        }]
    }
}