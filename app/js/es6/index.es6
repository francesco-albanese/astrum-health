(() => {
  const googleMap = {

    location: {
      title: 'Redcliffe, Bristol, UK',
      location: {lat: 51.4484272, lng: -2.5874823},
    },

    mapOptions: {
      center: {lat: 51.454513, lng: -2.58791},
      zoom: 15,
      mapTypeControl: false,
      scrollwheel: false,
      draggable: false
    },

    initMap() {
      const map = new google.maps.Map(document.querySelector('.footer__top-map'), googleMap.mapOptions);
      this.map = map;
      this.infowindow = new google.maps.InfoWindow();
      this.mapCanvas = $('.footer__top-map');
    },

    appendMarkers(map) {
      const bounds = new google.maps.LatLngBounds();
      const position = this.location.location;
      const title    = this.location.title;
      const marker = new google.maps.Marker({
        position: position,
        title: title,
        animation: google.maps.Animation.DROP
      });
      // bounds.extend(marker.position);
      marker.setMap(map);
      // map.fitBounds(bounds);
      marker.addListener('mouseover', function() {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      });
      marker.addListener('mouseout', function() {
        marker.setAnimation(null);
      });
      marker.addListener('click', function() {
        googleMap.populateInfoWindow(marker, googleMap.infowindow);
      });
    },

    populateInfoWindow(marker, infowindow) {
      // Check to make sure the infowindow is not already opened on this marker.
      if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div style="color: #000">' + marker.title + '</div>');
        infowindow.addListener('closeclick', function() {
          infowindow.marker = null;
        });
        infowindow.open(googleMap.map, marker);
      }
    },

    resizeMap(map) {
      google.maps.event.addDomListener(window, "resize", function() {
       let center = map.getCenter();
       let zoom = map.getZoom();
       google.maps.event.trigger(map, "resize");
       map.setCenter(center);
       let mapCanvasHeight = googleMap.checkHeightMap(googleMap.mapCanvas);
       if (mapCanvasHeight === 400) {
         googleMap.map.setZoom(14);
         return;
       }
      });
      google.maps.event.addDomListener(window, "load", function() {
       let center = map.getCenter();
       let zoom = map.getZoom();
       google.maps.event.trigger(map, "resize");
       map.setCenter(center);
       let mapCanvasHeight = googleMap.checkHeightMap(googleMap.mapCanvas);
       if (mapCanvasHeight === 400) {
         googleMap.map.setZoom(14);
         return;
       }
      });
    },

    checkHeightMap(mapCanvas) {
      let height = mapCanvas.height();
      return height;
    },

    bindEvents() {
      $(window).on('resize orientationchange', this.resizeMap(googleMap.map));
    },

    init() {
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
