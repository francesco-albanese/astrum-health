(function($) {
  var navbar = {

    smoothScroll: function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    },

    cacheDom: function () {
      this.burgerMenu = $('.burger-menu');
      this.offScreenMenu = $('.offscreen-menu');
      this.closeMenu = this.offScreenMenu.children('.offscreen-menu__close');
      this.body = this.burgerMenu.parents('body');
    },

    bindEvents: function () {
      this.burgerMenu.on('click', this.openOffScreenMenu.bind(this));
      this.closeMenu.on('click', this.closeOffScreenMenu.bind(this));
    },

    openOffScreenMenu: function () {
      this.body.addClass('no-scroll');
      this.offScreenMenu.addClass('is-visible');
    },

    closeOffScreenMenu: function () {
      this.body.removeClass('no-scroll');
      this.offScreenMenu.removeClass('is-visible');
    },

    init: function() {
      this.smoothScroll();
      this.cacheDom();
      this.bindEvents();
    }
  };

  return navbar.init();
})(jQuery);
