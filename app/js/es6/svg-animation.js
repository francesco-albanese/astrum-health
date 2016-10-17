'use strict';

(function () {
  var animation = {
    arr: [],

    cacheDom: function cacheDom() {
      this.svg = document.querySelectorAll('.astrumLogo');
      this.pathCentral = document.querySelector('.svg6');
      this.pathCentral2 = document.querySelector('.svg3');
      this.pathCentral3 = document.querySelector('.svg2');
      this.pathCentral4 = document.querySelector('.svg1');
      this.pathLeft = document.querySelector('.svg5');
      this.pathRight = document.querySelector('.svg4');
      this.burgerMenu = document.querySelector('.burger-menu');
      for (var i = 0, index = this.svg.length; i < index; i++) {
        this.arr.push(this.svg[i]);
      }
      this.articles = $('.facing-the-reality__grid-article');
    },
    grabPathLength: function grabPathLength(path) {
      return path.getTotalLength();
    },
    toggleAnimation: function toggleAnimation() {
      setInterval(function () {
        animation.arr.forEach(function (svg) {
          svg.classList.toggle('animate');
        });
      }, 2100);
    },
    getRandomInt: function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    articlesAnimation: function articlesAnimation() {
      var _this = this;

      var randomNumber = void 0;
      setInterval(function () {
        randomNumber = _this.getRandomInt(0, _this.articles.length);
        _this.articles.removeClass('tada');
        $(_this.articles[randomNumber]).addClass('tada');
      }, 1500);
    },
    init: function init() {
      this.cacheDom();
      this.toggleAnimation();
      this.articlesAnimation();
      // console.info(animation.grabPathLength(animation.pathCentral), '.svg6');
      // console.info(animation.grabPathLength(animation.pathLeft), '.svg5');
      // console.info(animation.grabPathLength(animation.pathRight), '.svg4');
      // console.info(animation.grabPathLength(animation.pathCentral2), '.svg3');
      // console.info(animation.grabPathLength(animation.pathCentral3), '.svg2');
      // console.info(animation.grabPathLength(animation.pathCentral4), '.svg1');
    }
  };

  return animation.init();
})();
//# sourceMappingURL=svg-animation.js.map
