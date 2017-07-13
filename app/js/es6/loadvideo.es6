(() => {
    const videoPlay = {
        cacheDom() {
            this.video = $('video');
        },
        playVideo() {
            this
                .video[0]
                .play();
            this.video[0].loop = true;
        },
        bindEvents() {
            this
                .video
                .on({
                    "loadeddata canplay canplaythrough": this
                        .playVideo
                        .bind(this)
                });
        },
        init() {
            this.cacheDom();
            this.bindEvents();
        }
    };
    return videoPlay.init();
})();