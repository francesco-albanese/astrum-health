'use strict';

(function () {
  'use strict';

  var tabs = {

    activeTab: null,

    cacheDom: function cacheDom() {
      this.tabs = $('.tabs .tab');
      this.tabsTitle = $('.tabs .tab__title');
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
