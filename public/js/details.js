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

// iframe redirect to new tab
$(document).ready(function () {
$("#iframe").load(function () {
var ifr = document.getElementById("iframe-style");
var anchors = ifr.contentDocument.getElementsByTagName("a");
for (var i in anchors) {
anchors[i].setAttribute("target", "_blank");
}
});
});
