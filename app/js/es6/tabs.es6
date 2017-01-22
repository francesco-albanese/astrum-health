(() => {
  `use strict`;

  const tabs = {

    activeTab: null,

    cacheDom() {
      this.tabs = $('.tabs .tab');
    },

    getActiveTab() {
      return this.activeTab;
    },

    setActiveTab(tab) {
      this.activeTab = tab;
    },

    bindEvents() {
      this.tabs.on('click', function()  {
        tabs.setActiveTab(this);
        const activeTab = tabs.getActiveTab();
        tabs.tabs.removeClass('is-visible');
        $(activeTab).addClass('is-visible');
      });
    },

    init() {
      this.cacheDom();
      this.setActiveTab(this.tabs[0]);
      this.bindEvents();
    }
  };

  return tabs.init();
})();
