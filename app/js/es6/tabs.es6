(() => {
  `use strict`;

  const tabs = {

    activeTab: null,

    cacheDom() {
      this.tabs = $('.tabs .tab');
      this.tabsTitle = $('.tabs .tab__title');
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
      this.tabsTitle.on('click', (event) =>  {
        this.setActiveTab($('.tab[data-tab="'+ $(event.target).closest('.tab__title').attr('data-tab') +'"]'));
        this.tabsTitle.removeClass('is-active');
        $(event.target).closest('.tab__title').addClass('is-active');
        this.toggleActiveClass();
      });
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
