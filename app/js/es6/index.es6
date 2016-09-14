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
      scrollwheel: false
    },
    initMap() {
      const map = new google.maps.Map(document.querySelector('.footer__top-map'), this.mapOptions);
      this.map = map;
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
    },

    init() {
      const self = this;
      this.initMap();
      this.appendMarkers(self.map);
    }
  };
  // this is required to make googleMAP.init available for google maps callback
  window.googleMap = googleMap;
  return googleMap;
})();
