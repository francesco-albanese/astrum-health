'use strict';

(function () {
  var navbar = {
    smoothScroll: function smoothScroll() {
      $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('body').removeClass('no-scroll');
            $('.offscreen-menu').removeClass('is-visible');
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    },
    cacheDom: function cacheDom() {
      this.window = $(window);
      this.burgerMenu = $('.burger-menu');
      this.offScreenMenu = this.burgerMenu.parents('body').find('.offscreen-menu');
      this.closeMenu = this.offScreenMenu.children('.offscreen-menu__close');
      this.body = this.burgerMenu.parents('body');
      this.offScreenLinks = this.offScreenMenu.find('a[href="#"]');
      this.header = this.burgerMenu.parent();
      this.solutionsSection = this.body.find('.solutions-section');
    },
    bindEvents: function bindEvents() {
      this.burgerMenu.on('click', this.openOffScreenMenu.bind(this));
      this.closeMenu.on('click', this.closeOffScreenMenu.bind(this));
      this.offScreenLinks.on('click', this.closeOffScreenMenu.bind(this));
      this.window.on('scroll', this.toggleHeader.bind(this));
      this.window.on('scroll', this.animateSolutionsSection.bind(this));
    },
    isElementVisible: function isElementVisible(element) {
      var visible = false;
      var bottom_of_object = element.offset().top + element.outerHeight() - element.outerHeight() / 2;
      var bottom_of_window = navbar.window.scrollTop() + navbar.window.height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        visible = true;
      }
      return visible;
    },
    animateSolutionsSection: function animateSolutionsSection() {
      var articles = this.solutionsSection.find('article');
      articles.each(function (i, elem) {
        var visible = navbar.isElementVisible($(elem));
        if (visible && i % 2 !== 0) {
          $(elem).addClass('fadeInRightBig');
        } else if (visible && i % 2 === 0) {
          $(elem).addClass('fadeInLeftBig');
        }
      });
    },
    toggleHeader: function toggleHeader() {
      var windowScroll = this.window.scrollTop();
      var headerHeight = this.header.outerHeight();
      if (windowScroll > headerHeight) {
        this.header.addClass('header--fixed-top');
      } else {
        this.header.removeClass('header--fixed-top');
      }
    },
    openOffScreenMenu: function openOffScreenMenu() {
      this.body.addClass('no-scroll');
      this.offScreenMenu.addClass('is-visible');
    },
    closeOffScreenMenu: function closeOffScreenMenu() {
      this.body.removeClass('no-scroll');
      this.offScreenMenu.removeClass('is-visible');
    },
    init: function init() {
      this.smoothScroll();
      this.cacheDom();
      this.bindEvents();
    }
  };

  return navbar.init();
})();
//# sourceMappingURL=navbar.js.map
