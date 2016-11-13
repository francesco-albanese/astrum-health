'use strict';

(function () {
  var googleMap = {

    location: {
      title: '\n      Unit B1006\n      94 New Road\n      Hill of GoodHope 2\n      Midrand\n      Gauteng 1685\n      South Africa',
      location: { lat: -25.9772779, lng: 28.110519 }
    },

    mapOptions: {
      center: { lat: -25.9991795, lng: 28.1262927 },
      zoom: 15,
      mapTypeControl: false,
      scrollwheel: false,
      draggable: false
    },

    initMap: function initMap() {
      this.mapCanvas = $('.footer__top-map');
      var map = new google.maps.Map(document.querySelector('.footer__top-map'), googleMap.mapOptions);
      this.map = map;
      this.infowindow = new google.maps.InfoWindow();
    },
    appendMarkers: function appendMarkers(map) {
      var bounds = new google.maps.LatLngBounds();
      var position = this.location.location;
      var title = this.location.title;
      var marker = new google.maps.Marker({
        position: position,
        title: title,
        animation: google.maps.Animation.DROP
      });
      bounds.extend(marker.position);
      marker.setMap(map);
      map.fitBounds(bounds);
      marker.addListener('mouseover', function () {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      });
      marker.addListener('mouseout', function () {
        marker.setAnimation(null);
      });
      marker.addListener('click', function () {
        googleMap.populateInfoWindow(marker, googleMap.infowindow);
      });
    },
    populateInfoWindow: function populateInfoWindow(marker, infowindow) {
      // Check to make sure the infowindow is not already opened on this marker.
      if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div style="color: #000">' + marker.title + '</div>');
        infowindow.addListener('closeclick', function () {
          infowindow.marker = null;
        });
        infowindow.open(googleMap.map, marker);
      }
    },
    resizeMap: function resizeMap(map) {
      google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        var zoom = map.getZoom();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
        var mapCanvasHeight = googleMap.checkHeightMap(googleMap.mapCanvas);
        if (mapCanvasHeight === 400) {
          googleMap.map.setZoom(14);
          return;
        }
      });
      google.maps.event.addDomListener(window, "load", function () {
        var center = map.getCenter();
        var zoom = map.getZoom();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
        var mapCanvasHeight = googleMap.checkHeightMap(googleMap.mapCanvas);
        if (mapCanvasHeight === 400) {
          googleMap.map.setZoom(14);
          return;
        }
      });
    },
    checkHeightMap: function checkHeightMap(mapCanvas) {
      var height = mapCanvas.height();
      return height;
    },
    bindEvents: function bindEvents() {
      $(window).on('resize orientationchange', this.resizeMap(googleMap.map));
    },
    init: function init() {
      this.initMap();
      this.appendMarkers(googleMap.map);
      this.bindEvents();
      this.checkHeightMap(googleMap.mapCanvas);
      this.resizeMap(googleMap.map);
    }
  };
  // this is required to make googleMap.init available for google maps callback
  window.googleMap = googleMap;
  return googleMap;
})();
//# sourceMappingURL=index.js.map
