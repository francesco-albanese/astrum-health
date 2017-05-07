(() => {
  `use strict`;

  const tabs = {

    activeTab: null,

    scrollPosition: 0,

    cacheDom() {
      this.body = $(document.body);
      this.tabs = $('.tabs .tab');
      this.tabsTitle = $('.tabs .tab__title');
      this.contactForm = this.body.find('.footer__top-contact-us');
      this.closeForm = this.contactForm.find('.contact-us__close');
      this.form = this.contactForm.find('form');
      this.findOutMoreBtn = $('.find-out-more');
    },

    getActiveTab() {
      return this.activeTab;
    },

    setActiveTab(tab) {
      this.activeTab = tab;
    },

    setDataTabAttr() {
      this.tabs.each((index, tab) => {
        $(tab).attr('data-tab', index);
        this.tabsTitle[index].setAttribute('data-tab', index);
      });
    },

    toggleActiveClass() {
      this.tabs.removeClass('is-visible');
      let activeTab = this.getActiveTab();
      $(activeTab).addClass('is-visible');
    },

    bindEvents() {
      this.tabsTitle.on('click', (event) => {
        this.setActiveTab($('.tab[data-tab="' + $(event.target).closest('.tab__title').attr('data-tab') + '"]'));
        this.tabsTitle.removeClass('is-active');
        $(event.target).closest('.tab__title').addClass('is-active');
        this.toggleActiveClass();
      });
      this.findOutMoreBtn.on('click', this.openForm.bind(this));
      this.closeForm.on('click', this.closeContactForm.bind(this));
    },

    openForm() {
      this.setScrollPosition();
      this.contactForm.addClass('is-visible');
      this.body.addClass('no-scroll');
      this.form.removeClass('opacity');
      this.form.addClass('bounceInLeft');
      setTimeout(() => {
        this.form.removeClass('bounceInLeft');
      }, 2000);
    },

    closeContactForm() {
      this.contactForm.removeClass('is-visible');
      this.body.removeClass('no-scroll');
      this.getBackToScrollPosition();
    },

    getBackToScrollPosition() {
      $(window).scrollTop(this.scrollPosition);
    },

    setScrollPosition() {
      this.scrollPosition = $(window).scrollTop();
    },

    init() {
      this.cacheDom();
      this.setDataTabAttr();
      this.setActiveTab(this.tabs[0]);
      this.toggleActiveClass(this.activeTab);
      this.bindEvents();
    }
  };

  return tabs.init();
})();