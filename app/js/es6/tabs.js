'use strict';

(function () {
  'use strict';

  var tabs = {

    activeTab: null,

    cacheDom: function cacheDom() {
      this.tabs = $('.tabs .tab');
    },
    getActiveTab: function getActiveTab() {
      return this.activeTab;
    },
    setActiveTab: function setActiveTab(tab) {
      this.activeTab = tab;
    },
    bindEvents: function bindEvents() {
      this.tabs.on('click', function () {
        tabs.setActiveTab(this);
        var activeTab = tabs.getActiveTab();
        tabs.tabs.removeClass('is-visible');
        $(activeTab).addClass('is-visible');
      });
    },
    init: function init() {
      this.cacheDom();
      this.setActiveTab(this.tabs[0]);
      this.bindEvents();
    }
  };

  return tabs.init();
})();
//# sourceMappingURL=tabs.js.map
