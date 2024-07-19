function initMap() {
    var cozumel1 = { lat: 20.51109525954954, lng: -86.9494429069511 };
    var cozumel2 = { lat: 20.47635016927704, lng: -86.97347611800375 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: cozumel1
    });
    var marker1 = new google.maps.Marker({
        position: cozumel1,
        map: map
    });
    var marker2 = new google.maps.Marker({
        position: cozumel2,
        map: map
    });
}
