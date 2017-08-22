module.exports = {
    main: {
        expand: true,
        cwd: './app/font',
        src: '**',
        dest: 'dist/font',
    },

    json: {
        expand: true,
        cwd: './app/js/es6',
        src: 'table-data.json',
        dest: 'dist/js',
    },

    videos: {
        expand: true,
        cwd: './app/videos/',
        src: 'diateg-professional-isolations.mp4',
        dest: 'dist/videos',
    }
}