"use strict";

(function () {
    var videoPlay = {
        cacheDom: function cacheDom() {
            this.video = $('video');
        },
        playVideo: function playVideo() {
            this.video[0].play();
            this.video[0].loop = true;
        },
        bindEvents: function bindEvents() {
            this.video.on({
                "loadeddata canplay canplaythrough": this.playVideo.bind(this)
            });
        },
        init: function init() {
            this.cacheDom();
            this.bindEvents();
        }
    };
    return videoPlay.init();
})();
//# sourceMappingURL=loadvideo.js.map
