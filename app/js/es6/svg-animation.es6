(() => {
  const animation = {
    arr: [],

    cacheDom() {
      this.svg = document.querySelectorAll('.astrumLogo');
      this.pathCentral = document.querySelector('.svg6');
      this.pathCentral2 = document.querySelector('.svg3');
      this.pathCentral3 = document.querySelector('.svg2');
      this.pathCentral4 = document.querySelector('.svg1');
      this.pathLeft = document.querySelector('.svg5');
      this.pathRight = document.querySelector('.svg4');
      this.burgerMenu = document.querySelector('.burger-menu');
      for (let i = 0, index = this.svg.length; i < index; i++) {
        this.arr.push(this.svg[i]);
      }
      this.articles = $('.facing-the-reality__grid-article');
    },

    grabPathLength(path) {
      return path.getTotalLength();
    },

    toggleAnimation() {
      setInterval(() => {
        animation.arr.forEach((svg) => {
          svg.classList.toggle('animate');
        });
      }, 2100);
    },

    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    articlesAnimation() {
      let randomNumber;
      setInterval(() => {
        randomNumber = this.getRandomInt(0, this.articles.length);
        this.articles.removeClass('tada');
        $(this.articles[randomNumber]).addClass('tada');
      }, 1500);
    },

    init() {
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
