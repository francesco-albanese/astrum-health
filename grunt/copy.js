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

    php: {
        expand: true,
        cwd: './app/mail/',
        src: '*.php',
        dest: 'dist/mail',
    },

    videos: {
        expand: true,
        cwd: './app/videos/',
        src: 'diateg-professional-isolations.mp4',
        dest: 'dist/videos',
    }
}