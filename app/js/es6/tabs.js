'use strict';

(function () {
  'use strict';

  var tabs = {

    activeTab: null,

    scrollPosition: 0,

    cacheDom: function cacheDom() {
      this.body = $(document.body);
      this.tabs = $('.tabs .tab');
      this.tabsTitle = $('.tabs .tab__title');
      this.contactForm = this.body.find('.footer__top-contact-us');
      this.closeForm = this.contactForm.find('.contact-us__close');
      this.form = this.contactForm.find('form');
      this.findOutMoreBtn = $('.find-out-more');
    },
    getActiveTab: function getActiveTab() {
      return this.activeTab;
    },
    setActiveTab: function setActiveTab(tab) {
      this.activeTab = tab;
    },
    setDataTabAttr: function setDataTabAttr() {
      var _this = this;

      this.tabs.each(function (index, tab) {
        $(tab).attr('data-tab', index);
        _this.tabsTitle[index].setAttribute('data-tab', index);
      });
    },
    toggleActiveClass: function toggleActiveClass() {
      this.tabs.removeClass('is-visible');
      var activeTab = this.getActiveTab();
      $(activeTab).addClass('is-visible');
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      this.tabsTitle.on('click', function (event) {
        _this2.setActiveTab($('.tab[data-tab="' + $(event.target).closest('.tab__title').attr('data-tab') + '"]'));
        _this2.tabsTitle.removeClass('is-active');
        $(event.target).closest('.tab__title').addClass('is-active');
        _this2.toggleActiveClass();
      });
      this.findOutMoreBtn.on('click', this.openForm.bind(this));
      this.closeForm.on('click', this.closeContactForm.bind(this));
    },
    openForm: function openForm() {
      var _this3 = this;

      this.setScrollPosition();
      this.contactForm.addClass('is-visible');
      this.body.addClass('no-scroll');
      this.form.removeClass('opacity');
      this.form.addClass('bounceInLeft');
      setTimeout(function () {
        _this3.form.removeClass('bounceInLeft');
      }, 2000);
    },
    closeContactForm: function closeContactForm() {
      this.contactForm.removeClass('is-visible');
      this.body.removeClass('no-scroll');
      this.getBackToScrollPosition();
    },
    getBackToScrollPosition: function getBackToScrollPosition() {
      $(window).scrollTop(this.scrollPosition);
    },
    setScrollPosition: function setScrollPosition() {
      this.scrollPosition = $(window).scrollTop();
    },
    init: function init() {
      this.cacheDom();
      this.setDataTabAttr();
      this.setActiveTab(this.tabs[0]);
      this.toggleActiveClass(this.activeTab);
      this.bindEvents();
    }
  };

  return tabs.init();
})();
//# sourceMappingURL=tabs.js.map
