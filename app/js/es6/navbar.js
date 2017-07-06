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
            }, 500);
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
      this.testimonialsSection = this.body.find('.testimonials-section');
      this.emailUs = this.body.find('.footer__top-contact-email');
      this.contactForm = this.body.find('.footer__top-contact-us');
      this.closeForm = this.contactForm.find('.contact-us__close');
      this.form = this.contactForm.find('form');
      this.contactUsInNavbar = this.body.find('a[href="#contact-us"]');
      this.backToTop = this.body.find('.back-to-top');
      this.followUs = this.body.find('.footer__centre-follow-us');
      this.followUsOffScreen = this.body.find('.offscreen-menu .follow-us');
      this.followUsContainer = this.body.find('.follow-us-container');
      this.followUsInNavbar = this.body.find('a[href="#follow-us"]');
      this.closeFollowUs = this.body.find('.follow-us__close');
    },
    bindEvents: function bindEvents() {
      var _this = this;

      this.burgerMenu.on('click', this.openOffScreenMenu.bind(this));
      this.closeMenu.on('click', this.closeOffScreenMenu.bind(this));
      this.offScreenLinks.on('click', this.closeOffScreenMenu.bind(this));
      this.window.on('scroll', function () {
        _this.toggleHeader();
        _this.triggerAnimations();
      });
      this.emailUs.on('click', this.openForm.bind(this));
      this.closeForm.on('click', this.closeContactForm.bind(this));
      this.contactUsInNavbar.on('click', this.openForm.bind(this));
      this.followUsInNavbar.on('click', this.openFollowUs.bind(this));
      this.closeFollowUs.on('click', this.closeFollow.bind(this));
      this.followUsOffScreen.on('click', this.openFollowUsOffScreen.bind(this));
    },
    openForm: function openForm() {
      this.contactForm.addClass('is-visible');
      this.body.addClass('no-scroll');
      this.form.removeClass('opacity');
      this.form.addClass('bounceInLeft');
      setTimeout(function () {
        navbar.form.removeClass('bounceInLeft');
      }, 2000);
    },
    closeContactForm: function closeContactForm() {
      this.contactForm.removeClass('is-visible');
      this.body.removeClass('no-scroll');
    },
    openFollowUs: function openFollowUs() {
      this.followUs.addClass('is-visible');
      this.body.addClass('no-scroll');
      this.followUsContainer.removeClass('opacity');
      this.followUsContainer.addClass('bounceInLeft');
      setTimeout(function () {
        navbar.followUsContainer.removeClass('bounceInLeft');
      }, 2000);
    },
    closeFollow: function closeFollow() {
      this.followUs.removeClass('is-visible');
      this.body.removeClass('no-scroll');
    },
    openFollowUsOffScreen: function openFollowUsOffScreen() {
      this.closeContactForm();
      this.openFollowUs();
    },
    isElementVisible: function isElementVisible(element) {
      var visible = false;
      var bottom_of_object = element.offset().top + element.outerHeight() - element.outerHeight() / 2;
      var bottom_of_window = navbar.window.scrollTop() + navbar.window.height();
      /* If the object is completely visible in the window, fade it */
      if (bottom_of_window > bottom_of_object) {
        visible = true;
      }
      return visible;
    },
    triggerAnimations: function triggerAnimations() {
      this.animateSolutionsSection();
      this.animateTestimonialsSection();
    },
    animateSolutionsSection: function animateSolutionsSection() {
      var articles = this.solutionsSection.find('article');
      if (articles.length) {
        articles.each(function (i, elem) {
          var visible = navbar.isElementVisible($(elem));
          if (visible && i % 2 !== 0) {
            $(elem).removeClass('opacity');
            $(elem).addClass('fadeInRightBig');
          } else if (visible && i % 2 === 0) {
            $(elem).removeClass('opacity');
            $(elem).addClass('fadeInLeftBig');
          }
        });
      }
    },
    animateTestimonialsSection: function animateTestimonialsSection() {
      var testimonials = this.testimonialsSection.find('.testimonial');
      testimonials.each(function (i, elem) {
        var visible = navbar.isElementVisible($(elem));
        if (visible && i === 0) {
          $(elem).removeClass('opacity');
          $(elem).addClass('fadeInLeftBig');
        } else if (visible && i === 1) {
          $(elem).removeClass('opacity');
          $(elem).addClass('fadeInDownBig');
        } else if (visible && i === 2) {
          $(elem).removeClass('opacity');
          $(elem).addClass('fadeInRightBig');
        }
      });
    },
    toggleHeader: function toggleHeader() {
      var windowScroll = this.window.scrollTop();
      var headerHeight = this.header.outerHeight();
      if (windowScroll > headerHeight) {
        this.header.addClass('header--fixed-top');
        this.backToTop.removeClass('opacity');
        this.backToTop.addClass('is-visible');
      } else {
        this.header.removeClass('header--fixed-top');
        this.backToTop.addClass('opacity');
        this.backToTop.removeClass('is-visible');
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
      this.backToTop.addClass('opacity');
      this.bindEvents();
      window.isElementVisible = navbar.isElementVisible;
    }
  };

  return navbar.init();
})();
//# sourceMappingURL=navbar.js.map
