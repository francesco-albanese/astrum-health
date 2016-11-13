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
            }, 1000);
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
    },

    bindEvents() {
      this.burgerMenu.on('click', this.openOffScreenMenu.bind(this));
      this.closeMenu.on('click', this.closeOffScreenMenu.bind(this));
      this.offScreenLinks.on('click', this.closeOffScreenMenu.bind(this));
      this.window.on('scroll', () => {
        this.toggleHeader();
        this.triggerAnimations();
      });
    },

    isElementVisible(element) {
      let visible = false;
      let bottom_of_object = (element.offset().top + element.outerHeight()) - (element.outerHeight() / 2);
      let bottom_of_window = navbar.window.scrollTop() + navbar.window.height();
      /* If the object is completely visible in the window, fade it it */
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
      } else {
        this.header.removeClass('header--fixed-top');
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
      this.bindEvents();
    }
  };

  return navbar.init();
})();
