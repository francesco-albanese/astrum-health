(() => {
  const navbar = {

    smoothScroll() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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

    cacheDom() {
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
      this.followUsOffScreen = this.body.find('.offscreen-menu .follow-us')
      this.followUsContainer = this.body.find('.follow-us-container');
      this.followUsInNavbar = this.body.find('a[href="#follow-us"]');
      this.closeFollowUs = this.body.find('.follow-us__close');
    },

    bindEvents() {
      this.burgerMenu.on('click', this.openOffScreenMenu.bind(this));
      this.closeMenu.on('click', this.closeOffScreenMenu.bind(this));
      this.offScreenLinks.on('click', this.closeOffScreenMenu.bind(this));
      this.window.on('scroll', () => {
        this.toggleHeader();
        this.triggerAnimations();
      });
      this.emailUs.on('click', this.openForm.bind(this));
      this.closeForm.on('click', this.closeContactForm.bind(this));
      this.contactUsInNavbar.on('click', this.openForm.bind(this));
      this.followUsInNavbar.on(`click`, this.openFollowUs.bind(this));
      this.closeFollowUs.on(`click`, this.closeFollow.bind(this));
      this.followUsOffScreen.on(`click`, this.openFollowUsOffScreen.bind(this));
    },

    openForm() {
      this.contactForm.addClass('is-visible');
      this.body.addClass('no-scroll');
      this.form.removeClass('opacity');
      this.form.addClass('bounceInLeft');
      setTimeout(() => {
        navbar.form.removeClass('bounceInLeft');
      }, 2000);
    },

    closeContactForm() {
      this.contactForm.removeClass('is-visible');
      this.body.removeClass('no-scroll');
    },

    openFollowUs() {
      this.followUs.addClass('is-visible');
      this.body.addClass('no-scroll');
      this.followUsContainer.removeClass('opacity');
      this.followUsContainer.addClass('bounceInLeft');
      setTimeout(() => {
        navbar.followUsContainer.removeClass('bounceInLeft');
      }, 2000);
    },

    closeFollow() {
      this.followUs.removeClass('is-visible');
      this.body.removeClass('no-scroll');
    },

    openFollowUsOffScreen() {
      this.closeContactForm();
      this.openFollowUs();
    },

    isElementVisible(element) {
      let visible = false;
      let bottom_of_object = (element.offset().top + element.outerHeight()) - (element.outerHeight() / 2);
      let bottom_of_window = navbar.window.scrollTop() + navbar.window.height();
      /* If the object is completely visible in the window, fade it */
      if( bottom_of_window > bottom_of_object ){
        visible = true;
      }
      return visible;
    },

    triggerAnimations() {
      this.animateSolutionsSection();
      this.animateTestimonialsSection();
    },

    animateSolutionsSection() {
      const articles = this.solutionsSection.find('article');
      if (articles.length) {
        articles.each((i, elem) => {
          let visible = navbar.isElementVisible($(elem));
          if (visible && (i % 2 !== 0)) {
            $(elem).removeClass('opacity');
            $(elem).addClass('fadeInRightBig');
          } else if(visible && (i % 2 === 0)) {
            $(elem).removeClass('opacity');
            $(elem).addClass('fadeInLeftBig');
          }
        });
      }
    },

    animateTestimonialsSection() {
      const testimonials = this.testimonialsSection.find('.testimonial');
      testimonials.each((i, elem) => {
        let visible = navbar.isElementVisible($(elem));
        if (visible && (i === 0)) {
          $(elem).removeClass('opacity');
          $(elem).addClass('fadeInLeftBig');
        } else if(visible && i === 1) {
          $(elem).removeClass('opacity');
          $(elem).addClass('fadeInDownBig');
        } else if (visible && i === 2) {
          $(elem).removeClass('opacity');
          $(elem).addClass('fadeInRightBig');
        }
      });
    },

    toggleHeader() {
      let windowScroll = this.window.scrollTop();
      const headerHeight = this.header.outerHeight();
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

    openOffScreenMenu() {
      this.body.addClass('no-scroll');
      this.offScreenMenu.addClass('is-visible');
    },

    closeOffScreenMenu() {
      this.body.removeClass('no-scroll');
      this.offScreenMenu.removeClass('is-visible');
    },

    init() {
      this.smoothScroll();
      this.cacheDom();
      this.backToTop.addClass('opacity');
      this.bindEvents();
      window.isElementVisible = navbar.isElementVisible;
    }
  };

  return navbar.init();
})();
