(function() {
  var animation = {
    cacheDom: function () {
      this.svg = document.querySelectorAll('.astrumLogo');
      this.pathCentral = document.querySelector('.svg6');
      this.pathCentral2 = document.querySelector('.svg3');
      this.pathCentral3 = document.querySelector('.svg2');
      this.pathCentral4 = document.querySelector('.svg1');
      this.pathLeft = document.querySelector('.svg5');
      this.pathRight = document.querySelector('.svg4');
      this.burgerMenu = document.querySelector('.burger-menu');
    },
    grabPathLength: function (path) {
      return path.getTotalLength();
    },
    toggleAnimation: function () {
      setInterval(function() {
        animation.svg.forEach(function(svg) {
          svg.classList.toggle('animate');
        });
      }, 1500);
    },
    init: function() {
      this.cacheDom();
      this.toggleAnimation();
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
