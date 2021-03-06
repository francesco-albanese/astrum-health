(() => {
  const navbar = {

    smoothScroll() {
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

    cacheDom() {
      this.window = $(window);
      this.burgerMenu = $('.burger-menu');
      this.$homeSection = $('.home-section');
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
      this.date = this.body.find('.footer__bottom-copyright .date');
    },

    bindEvents() {
      this.burgerMenu.on('click', this.openOffScreenMenu.bind(this));
      this.closeMenu.on('click', this.closeOffScreenMenu.bind(this));
      this.offScreenLinks.on('click', this.closeOffScreenMenu.bind(this));
      this.window.on('scroll', () => {
        this.toggleHeader();
        this.triggerAnimations();
        this.backgroundImageScroll();
        this.appendLogoHeader();
      });
      this.window.on('resize orientationchange', () => {
        this.appendLogoHeader();
      })
      this.emailUs.on('click', this.openForm.bind(this));
      this.closeForm.on('click', this.closeContactForm.bind(this));
      this.contactUsInNavbar.on('click', this.openForm.bind(this));
      this.followUsInNavbar.on(`click`, this.openFollowUs.bind(this));
      this.closeFollowUs.on(`click`, this.closeFollow.bind(this));
      this.followUsOffScreen.on(`click`, this.openFollowUsOffScreen.bind(this));
    },

    backgroundImageScroll() {
      if (this.window.width() < 800) {
        return;
      }
      let $scrollTop = this.window.scrollTop();
      this.$homeSection.css('background-position', 'center ' + parseInt(-($scrollTop - (-(window.pageYOffset / 2))) ) + 'px');
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
      if (bottom_of_window > bottom_of_object) {
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
          } else if (visible && (i % 2 === 0)) {
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
        } else if (visible && i === 1) {
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

    toggleAnimation(svg) {
      setInterval(() => {
        svg.toggleClass('animate');
      }, 2100);
    },

    appendLogoHeader() {
      const logoHeader = `<svg xmlns="http://www.w3.org/2000/svg" class="astrumLogo" viewBox="0 0 464 230"><style>.a{stop-color:#67C7EC;}.b{stop-color:#42A2D5;}.c{stop-color:#54BFE9;}.d{stop-color:#6E2383;}.e{stop-color:#350841;}.f{stop-color:#641F78;}.g{stop-color:#831F82;}.h{stop-color:#9E1981;}</style><switch><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" width="1" height="1"/><g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="100.8" y1="83" x2="355.2" y2="83"><stop offset="0" class="a"/><stop offset="0.4845" class="b"/><stop offset="0.9989" class="c"/><stop offset="1" class="c"/></linearGradient><path class="svg1" d="M230.7 64.5c-12.4 9.5-23.1 18.4-23.1 18.4s10.9 9 23.4 18.6C243.3 92 254 83.1 254 83.1S243.2 74.1 230.7 64.5z" fill="url(#SVGID_1_)"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="100.8" y1="83" x2="355.2" y2="83"><stop offset="0" class="a"/><stop offset="0.4845" class="b"/><stop offset="0.9989" class="c"/><stop offset="1" class="c"/></linearGradient><path class="svg2" d="M230.7 64.5c-12.4 9.5-23.1 18.4-23.1 18.4s10.9 9 23.4 18.6C243.3 92 254 83.1 254 83.1S243.2 74.1 230.7 64.5z" fill="url(#SVGID_2_)"/><g><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="86.5" y1="83" x2="375.6" y2="83"><stop offset="0" class="d"/><stop offset="2.582420e-03" class="d"/><stop offset="0.5181" class="e"/><stop offset="1" class="f"/></linearGradient><path class="svg3" d="M230.7 64.5c-12.4 9.5-23.1 18.4-23.1 18.4s10.9 9 23.4 18.6C243.3 92 254 83.1 254 83.1S243.2 74.1 230.7 64.5z" fill="url(#SVGID_3_)"/><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="86.5" y1="82.9" x2="375.6" y2="82.9"><stop offset="0" class="d"/><stop offset="2.582420e-03" class="d"/><stop offset="0.5181" class="e"/><stop offset="1" class="f"/></linearGradient><path class="svg4" d="M313.4 33.1c-16-4.5-32.9-1.8-56.3 12.5 -7.3 4.5-17.3 11.9-26.5 18.9 12.5 9.6 23.4 18.6 23.4 18.6S243.3 92 231 101.5c9.1 7 19 14.3 26.2 18.7 23.3 14.3 40.3 17 56.3 12.5 12.5-3.5 37.3-18.1 37.3-49.8C350.7 51.1 325.9 36.6 313.4 33.1zM301.2 105.3c-7.1 2-14.7 0.8-25.1-5.6 -1.2-0.8-2.7-1.7-4.2-2.8 -7.8-5.5-18.1-14-18.1-14s14.4-11.9 22.1-16.6c10.4-6.4 17.9-7.6 25.1-5.6 1.9 0.5 4.5 1.7 7.1 3.5 4.9 3.4 9.7 9.5 9.7 18.8C317.9 97.3 306.8 103.8 301.2 105.3z" fill="url(#SVGID_4_)"/><linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="86.5" y1="83.1" x2="375.6" y2="83.1"><stop offset="0" class="d"/><stop offset="2.582420e-03" class="d"/><stop offset="0.5181" class="e"/><stop offset="1" class="f"/></linearGradient><path class="svg5" d="M230.7 64.5c-9.1-7-19-14.3-26.2-18.7 -23.3-14.3-40.3-17-56.3-12.5 -12.5 3.5-37.3 18.1-37.3 49.8 0 31.8 24.8 46.3 37.3 49.8 16 4.5 32.9 1.8 56.3-12.5 7.3-4.5 17.3-11.9 26.5-18.9 -12.5-9.6-23.4-18.6-23.4-18.6S218.3 74 230.7 64.5zM185.5 99.6c-10.4 6.4-17.9 7.6-25.1 5.6 -4.2-1.2-11.5-5.1-14.9-13.1 -1.1-2.6-1.8-5.7-1.8-9.3 0-14.2 11-20.7 16.6-22.2 7.1-2 14.7-0.8 25.1 5.6 7.6 4.7 22.1 16.6 22.1 16.6s0 0-0.1 0c0.1 0.1 0.1 0.1 0.1 0.1S193.1 95 185.5 99.6z" fill="url(#SVGID_5_)"/></g><linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="89.2" y1="83" x2="378.6" y2="83"><stop offset="0" class="d"/><stop offset="2.582420e-03" class="g"/><stop offset="0.5181" class="h"/><stop offset="1" class="g"/></linearGradient><path class="svg6" d="M259 87.1c0 0-2-1.6-5-4L254 83c-1.4-1.1-2.8-2.1-4.2-3.2 -7.2-5.8-16.4-13.1-19.2-15.3l0 0c-0.6-0.5-1.3-1-1.9-1.5 -0.1-0.1-0.2-0.2-0.3-0.3 -2.5-2-5.1-3.9-7.7-5.8 -2.5-1.9-5.1-3.8-7.7-5.5 -5.4-3.7-11-7.2-16.8-10.4 -5.5-3-11.2-5.5-17.2-7.3 -8.8-2.6-18.2-3.3-27.2-1.4 -1.1 0.2-2.2 0.5-3.3 0.8 -15.1 4.6-21 12.5-21.7 12.5 36.9 1.5 75.7 33.3 75.7 33.3s2 1.6 5 4l-0.1 0.1c1.4 1.1 2.8 2.1 4.2 3.2 7.2 5.8 16.4 13.1 19.2 15.3l0 0c0.6 0.5 1.3 1 1.9 1.5 0.1 0.1 0.2 0.2 0.3 0.3 2.5 2 5.1 3.9 7.7 5.8 2.5 1.9 5.1 3.8 7.7 5.5 5.4 3.7 11 7.2 16.8 10.4 5.5 3 11.2 5.5 17.2 7.3 8.8 2.6 18.2 3.3 27.2 1.4 1.1-0.2 2.2-0.5 3.3-0.8 15.1-4.6 21-12.5 21.7-12.5C297.8 118.9 259 87.1 259 87.1z" fill="url(#SVGID_6_)"/><linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="-193.3" y1="395.5" x2="-192.3" y2="395.5" gradientTransform="matrix(5.000000e-15 76.6651 76.6651 -5.000000e-15 -30093.3574 14973.0889)"><stop offset="0" class="h"/><stop offset="2.582420e-03" class="h"/><stop offset="1" class="e"/></linearGradient><path d="M67.1 181.7v0.2 17.5h-4.7v-5.5c-3.8 4.4-8.5 6.5-14.1 6.3 -4.9-0.2-9-2-12.4-5.6 -3.4-3.6-5.1-7.9-5.1-12.8 0-5.2 1.8-9.6 5.5-13.3 3.7-3.7 8.1-5.4 13.2-5.2 5 0.2 9.2 2.1 12.6 5.7C65.6 172.5 67.3 176.7 67.1 181.7zM62.4 181.3c-0.1-3.7-1.4-6.9-4-9.6 -2.6-2.7-5.7-4-9.3-4 -3.8 0-7 1.3-9.6 4 -2.7 2.7-4 5.9-4 9.6 -0.1 3.7 1.1 7 3.7 9.8 2.5 2.8 5.6 4.3 9.2 4.4 3.9 0.2 7.2-1.2 10-4.1C61.1 188.7 62.5 185.2 62.4 181.3zM86.3 179.4c4.7 1.6 7.2 4.8 7.6 9.4 0.2 3.2-0.9 5.9-3.3 8.3 -2.5 2.3-5.3 3.4-8.6 3.2 -3-0.2-5.5-1.4-7.5-3.6 -2-2.2-3-4.8-3-7.8h4.9v1.2c0 1.2 0.7 2.5 2 3.8 1.3 1.3 2.7 1.9 4.2 1.9 2 0 3.6-0.6 4.7-1.8 1-1.1 1.6-2.5 1.6-4.2 0-3-1.7-5.1-5.2-6.2l-4.1-1.3c-4.3-1.4-6.6-4.3-6.8-8.9 -0.1-2.7 0.8-5.1 2.8-7 2-1.9 4.3-3 7.1-3.1 2.4-0.1 4.7 0.7 6.7 2.3 2.1 1.7 3.2 3.8 3.4 6.2v1.1h-5V172c0-1.3-0.5-2.3-1.6-3 -1.1-0.8-2.3-1.2-3.6-1.2 -1.3 0-2.5 0.5-3.4 1.4 -1 0.9-1.5 2.1-1.5 3.4 -0.2 2.5 1.3 4.3 4.5 5.4L86.3 179.4 86.3 179.4zM111.4 200.1c-8.6 0-12.9-3.7-12.9-11v-37.5h4.7V164h8.2v4.4h-8.2v20c0 5.2 2.7 7.9 8.2 7.9V200.1zM131.1 168.1c-2.2 0.1-4 0.7-5.3 1.8 -1.4 1.1-2.3 2.1-2.8 2.9 -0.8 1.4-1.2 3.2-1.2 5.5v21.1h-5V164h4.4v5c1-1.9 2.5-3.4 4.4-4.4 1.8-1 3.6-1.4 5.5-1.3V168.1zM167.6 184.2c0 4.6-1.5 8.4-4.4 11.5 -3 3.1-6.7 4.6-11.2 4.6 -4.5 0-8.2-1.5-11.2-4.6 -3-3.1-4.4-6.9-4.4-11.5V164h4.7v20.7c0 3 1.1 5.5 3.3 7.7 2.2 2.1 4.7 3.2 7.6 3.2s5.5-1.1 7.6-3.2c2.2-2.1 3.3-4.7 3.3-7.7V164h4.7V184.2zM224 199.4h-4.9v-21.7c0-2.7-0.8-5.1-2.4-7 -1.6-1.9-3.6-2.9-6.2-2.9 -2.6 0-4.8 0.8-6.7 2.5 -1.9 1.7-2.8 3.8-2.8 6.3v22.8h-5v-22.8c0-2.5-0.9-4.6-2.8-6.3 -1.9-1.7-4.1-2.5-6.7-2.5 -2.6 0-4.6 1-6.1 2.9 -1.5 1.9-2.3 4.3-2.3 7v21.7h-4.9v-21.1c0-4.4 1.3-8 3.8-10.7 2.4-2.5 5.5-3.9 9.3-4.3 5.1-0.4 9.2 1.8 12.3 6.6 3.1-4.8 7.2-7 12.3-6.6 3.8 0.3 7 1.8 9.4 4.3 2.6 2.7 3.8 6.2 3.8 10.7V199.4zM281.7 199.4H277v-20.6c0-3-1.1-5.5-3.3-7.7 -2.2-2.2-4.8-3.2-7.8-3.1 -3 0-5.5 1-7.6 3 -2.1 2-3.1 4.5-3.1 7.5v21h-4.7v-47.8h4.7v17.5c2.7-3.5 6.2-5.4 10.4-5.6 4.4-0.2 8.2 1.2 11.3 4.3 3.2 3.1 4.8 6.9 4.8 11.5V199.4zM323.6 183.3h-31.7c0.4 3.6 1.9 6.5 4.5 8.8 2.6 2.3 5.8 3.5 9.4 3.4 5.6-0.1 9.6-2.7 12-7.8h5c-1.3 3.8-3.6 6.8-6.7 9.1 -3.1 2.2-6.6 3.4-10.5 3.4 -4.8 0.1-9.1-1.7-12.8-5.3 -3.7-3.6-5.6-7.9-5.7-12.9 -0.1-5.3 1.7-9.8 5.6-13.7 3.9-3.8 8.4-5.6 13.7-5.3 4.7 0.3 8.8 2.2 12.3 5.8 3.3 3.6 5 7.5 5 11.9V183.3zM319 179c-0.7-3.3-2.2-6-4.7-8 -2.4-2-5.4-3.1-8.7-3.1 -3.4 0-6.4 1-8.9 3 -2.5 2.1-4.1 4.8-4.8 8.1H319zM364.1 181.7v0.2 17.5h-4.7v-5.5c-3.8 4.4-8.5 6.5-14.1 6.3 -4.9-0.2-9-2-12.4-5.6 -3.4-3.6-5.1-7.9-5.1-12.8 0-5.2 1.8-9.6 5.5-13.3 3.7-3.7 8.1-5.4 13.2-5.2 5 0.2 9.2 2.1 12.6 5.7C362.6 172.5 364.3 176.7 364.1 181.7zM359.4 181.3c-0.1-3.7-1.4-6.9-4-9.6 -2.6-2.7-5.7-4-9.3-4 -3.8 0-7 1.3-9.6 4 -2.7 2.7-4 5.9-4 9.6 -0.1 3.7 1.1 7 3.7 9.8 2.5 2.8 5.6 4.3 9.2 4.4 3.9 0.2 7.2-1.2 10-4.1C358.2 188.7 359.5 185.2 359.4 181.3zM374.5 199.4h-4.7v-47.8h4.7V199.4zM393.5 200.1c-8.6 0-12.9-3.7-12.9-11v-37.5h4.7V164h8.2v4.4h-8.2v20c0 5.2 2.7 7.9 8.2 7.9V200.1zM430.2 199.4h-4.7v-20.6c0-3-1.1-5.5-3.3-7.7 -2.2-2.2-4.8-3.2-7.8-3.1 -3 0-5.5 1-7.6 3 -2.1 2-3.1 4.5-3.1 7.5v21H399v-47.8h4.7v17.5c2.7-3.5 6.2-5.4 10.4-5.6 4.4-0.2 8.2 1.2 11.3 4.3 3.2 3.1 4.8 6.9 4.8 11.5V199.4z" fill="url(#SVGID_7_)"/></g></switch></svg>`;
      let windowWidth = this.window.width() <= 768;
      let svgLength = this.header.find('svg').length > 0;

      if (windowWidth && this.header.hasClass('header--fixed-top')) {
        if (!svgLength) {
          this.header.append(logoHeader);
          this.toggleAnimation(this.header.find('svg'));
        }
      } else {
        if (svgLength) {
          this.header.find('svg').remove();
        }
      }
    },

    init() {
      this.smoothScroll();
      this.cacheDom();
      this.backToTop.addClass('opacity');
      this.bindEvents();
      this.date.text(new Date().getFullYear());
      window.isElementVisible = navbar.isElementVisible;
    }
  };

  return navbar.init();
})();