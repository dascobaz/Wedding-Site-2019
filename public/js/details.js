// google map
 function initMap() {
    var uluru = {lat: 27.7545702, lng: -82.7663984};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
