"use strict";!function(){var googleMap={location:{title:"\n      Unit B1006\n      94 New Road\n      Hill of GoodHope 2\n      Midrand\n      Gauteng 1685\n      South Africa",location:{lat:-25.9772779,lng:28.110519}},mapOptions:{center:{lat:-25.9991795,lng:28.1262927},zoom:15,mapTypeControl:!1,scrollwheel:!1,draggable:!1},initMap:function(){this.mapCanvas=$(".footer__top-map");var map=new google.maps.Map(document.querySelector(".footer__top-map"),googleMap.mapOptions);this.map=map,this.infowindow=new google.maps.InfoWindow},appendMarkers:function(map){var bounds=new google.maps.LatLngBounds,position=this.location.location,title=this.location.title,marker=new google.maps.Marker({position:position,title:title,animation:google.maps.Animation.DROP});bounds.extend(marker.position),marker.setMap(map),map.fitBounds(bounds),marker.addListener("mouseover",function(){marker.setAnimation(google.maps.Animation.BOUNCE)}),marker.addListener("mouseout",function(){marker.setAnimation(null)}),marker.addListener("click",function(){googleMap.populateInfoWindow(marker,googleMap.infowindow)})},populateInfoWindow:function(marker,infowindow){infowindow.marker!=marker&&(infowindow.marker=marker,infowindow.setContent('<div style="color: #000">'+marker.title+"</div>"),infowindow.addListener("closeclick",function(){infowindow.marker=null}),infowindow.open(googleMap.map,marker))},resizeMap:function(map){google.maps.event.addDomListener(window,"resize",function(){var center=map.getCenter();map.getZoom();google.maps.event.trigger(map,"resize"),map.setCenter(center);var mapCanvasHeight=googleMap.checkHeightMap(googleMap.mapCanvas);if(400===mapCanvasHeight)return void googleMap.map.setZoom(14)}),google.maps.event.addDomListener(window,"load",function(){var center=map.getCenter();map.getZoom();google.maps.event.trigger(map,"resize"),map.setCenter(center);var mapCanvasHeight=googleMap.checkHeightMap(googleMap.mapCanvas);if(400===mapCanvasHeight)return void googleMap.map.setZoom(14)})},checkHeightMap:function(mapCanvas){var height=mapCanvas.height();return height},bindEvents:function(){$(window).on("resize orientationchange",this.resizeMap(googleMap.map))},init:function(){this.initMap(),this.appendMarkers(googleMap.map),this.bindEvents(),this.checkHeightMap(googleMap.mapCanvas),this.resizeMap(googleMap.map)}};return window.googleMap=googleMap,googleMap}();;"use strict";!function(){var navbar={smoothScroll:function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);if(target=target.length?target:$("[name="+this.hash.slice(1)+"]"),target.length)return $("body").removeClass("no-scroll"),$(".offscreen-menu").removeClass("is-visible"),$("html, body").animate({scrollTop:target.offset().top},500),!1}})},cacheDom:function(){this.window=$(window),this.burgerMenu=$(".burger-menu"),this.offScreenMenu=this.burgerMenu.parents("body").find(".offscreen-menu"),this.closeMenu=this.offScreenMenu.children(".offscreen-menu__close"),this.body=this.burgerMenu.parents("body"),this.offScreenLinks=this.offScreenMenu.find('a[href="#"]'),this.header=this.burgerMenu.parent(),this.solutionsSection=this.body.find(".solutions-section"),this.testimonialsSection=this.body.find(".testimonials-section"),this.emailUs=this.body.find(".footer__top-contact-email"),this.contactForm=this.body.find(".footer__top-contact-us"),this.closeForm=this.contactForm.find(".contact-us__close"),this.form=this.contactForm.find("form"),this.contactUsInNavbar=this.body.find('a[href="#contact-us"]'),this.backToTop=this.body.find(".back-to-top"),this.followUs=this.body.find(".footer__centre-follow-us"),this.followUsOffScreen=this.body.find(".offscreen-menu .follow-us"),this.followUsContainer=this.body.find(".follow-us-container"),this.followUsInNavbar=this.body.find('a[href="#follow-us"]'),this.closeFollowUs=this.body.find(".follow-us__close")},bindEvents:function(){var _this=this;this.burgerMenu.on("click",this.openOffScreenMenu.bind(this)),this.closeMenu.on("click",this.closeOffScreenMenu.bind(this)),this.offScreenLinks.on("click",this.closeOffScreenMenu.bind(this)),this.window.on("scroll",function(){_this.toggleHeader(),_this.triggerAnimations()}),this.emailUs.on("click",this.openForm.bind(this)),this.closeForm.on("click",this.closeContactForm.bind(this)),this.contactUsInNavbar.on("click",this.openForm.bind(this)),this.followUsInNavbar.on("click",this.openFollowUs.bind(this)),this.closeFollowUs.on("click",this.closeFollow.bind(this)),this.followUsOffScreen.on("click",this.openFollowUsOffScreen.bind(this))},openForm:function(){this.contactForm.addClass("is-visible"),this.body.addClass("no-scroll"),this.form.removeClass("opacity"),this.form.addClass("bounceInLeft"),setTimeout(function(){navbar.form.removeClass("bounceInLeft")},2e3)},closeContactForm:function(){this.contactForm.removeClass("is-visible"),this.body.removeClass("no-scroll")},openFollowUs:function(){this.followUs.addClass("is-visible"),this.body.addClass("no-scroll"),this.followUsContainer.removeClass("opacity"),this.followUsContainer.addClass("bounceInLeft"),setTimeout(function(){navbar.followUsContainer.removeClass("bounceInLeft")},2e3)},closeFollow:function(){this.followUs.removeClass("is-visible"),this.body.removeClass("no-scroll")},openFollowUsOffScreen:function(){this.closeContactForm(),this.openFollowUs()},isElementVisible:function(element){var visible=!1,bottom_of_object=element.offset().top+element.outerHeight()-element.outerHeight()/2,bottom_of_window=navbar.window.scrollTop()+navbar.window.height();return bottom_of_window>bottom_of_object&&(visible=!0),visible},triggerAnimations:function(){this.animateSolutionsSection(),this.animateTestimonialsSection()},animateSolutionsSection:function(){var articles=this.solutionsSection.find("article");articles.length&&articles.each(function(i,elem){var visible=navbar.isElementVisible($(elem));visible&&i%2!==0?($(elem).removeClass("opacity"),$(elem).addClass("fadeInRightBig")):visible&&i%2===0&&($(elem).removeClass("opacity"),$(elem).addClass("fadeInLeftBig"))})},animateTestimonialsSection:function(){var testimonials=this.testimonialsSection.find(".testimonial");testimonials.each(function(i,elem){var visible=navbar.isElementVisible($(elem));visible&&0===i?($(elem).removeClass("opacity"),$(elem).addClass("fadeInLeftBig")):visible&&1===i?($(elem).removeClass("opacity"),$(elem).addClass("fadeInDownBig")):visible&&2===i&&($(elem).removeClass("opacity"),$(elem).addClass("fadeInRightBig"))})},toggleHeader:function(){var windowScroll=this.window.scrollTop(),headerHeight=this.header.outerHeight();windowScroll>headerHeight?(this.header.addClass("header--fixed-top"),this.backToTop.removeClass("opacity"),this.backToTop.addClass("is-visible")):(this.header.removeClass("header--fixed-top"),this.backToTop.addClass("opacity"),this.backToTop.removeClass("is-visible"))},openOffScreenMenu:function(){this.body.addClass("no-scroll"),this.offScreenMenu.addClass("is-visible")},closeOffScreenMenu:function(){this.body.removeClass("no-scroll"),this.offScreenMenu.removeClass("is-visible")},init:function(){this.smoothScroll(),this.cacheDom(),this.backToTop.addClass("opacity"),this.bindEvents(),window.isElementVisible=navbar.isElementVisible}};return navbar.init()}();;"use strict";!function(){var animation={cacheDom:function(){this.svg=document.querySelectorAll(".astrumLogo"),this.pathCentral=document.querySelector(".svg6"),this.pathCentral2=document.querySelector(".svg3"),this.pathCentral3=document.querySelector(".svg2"),this.pathCentral4=document.querySelector(".svg1"),this.pathLeft=document.querySelector(".svg5"),this.pathRight=document.querySelector(".svg4"),this.burgerMenu=document.querySelector(".burger-menu"),this.articles=$(".facing-the-reality__grid-article")},grabPathLength:function(path){return path.getTotalLength()},toggleAnimation:function(){setInterval(function(){[].forEach.call(animation.svg,function(svg){return svg.classList.toggle("animate")})},2100)},getRandomInt:function(min,max){return Math.floor(Math.random()*(max-min+1))+min},articlesAnimation:function(){var _this=this,randomNumber=void 0;setInterval(function(){randomNumber=_this.getRandomInt(0,_this.articles.length),_this.articles.removeClass("tada"),$(_this.articles[randomNumber]).addClass("tada")},1500)},init:function(){this.cacheDom(),this.toggleAnimation(),this.articlesAnimation()}};return animation.init()}();;"use strict";!function(){var tabs={activeTab:null,scrollPosition:0,cacheDom:function(){this.body=$(document.body),this.tabs=$(".tabs .tab"),this.tabsTitle=$(".tabs .tab__title"),this.contactForm=this.body.find(".footer__top-contact-us"),this.closeForm=this.contactForm.find(".contact-us__close"),this.form=this.contactForm.find("form"),this.findOutMoreBtn=$(".find-out-more")},getActiveTab:function(){return this.activeTab},setActiveTab:function(tab){this.activeTab=tab},setDataTabAttr:function(){var _this=this;this.tabs.each(function(index,tab){$(tab).attr("data-tab",index),_this.tabsTitle[index].setAttribute("data-tab",index)})},toggleActiveClass:function(){this.tabs.removeClass("is-visible");var activeTab=this.getActiveTab();$(activeTab).addClass("is-visible")},bindEvents:function(){var _this2=this;this.tabsTitle.on("click",function(event){_this2.setActiveTab($('.tab[data-tab="'+$(event.target).closest(".tab__title").attr("data-tab")+'"]')),_this2.tabsTitle.removeClass("is-active"),$(event.target).closest(".tab__title").addClass("is-active"),_this2.toggleActiveClass()}),this.findOutMoreBtn.on("click",this.openForm.bind(this)),this.closeForm.on("click",this.closeContactForm.bind(this))},openForm:function(){var _this3=this;this.setScrollPosition(),this.contactForm.addClass("is-visible"),this.body.addClass("no-scroll"),this.form.removeClass("opacity"),this.form.addClass("bounceInLeft"),setTimeout(function(){_this3.form.removeClass("bounceInLeft")},2e3)},closeContactForm:function(){this.contactForm.removeClass("is-visible"),this.body.removeClass("no-scroll"),this.getBackToScrollPosition()},getBackToScrollPosition:function(){$(window).scrollTop(this.scrollPosition)},setScrollPosition:function(){this.scrollPosition=$(window).scrollTop()},init:function(){this.cacheDom(),this.setDataTabAttr(),this.setActiveTab(this.tabs[0]),this.toggleActiveClass(this.activeTab),this.bindEvents()}};return tabs.init()}();