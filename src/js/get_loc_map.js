load_map();

function load_map() {

    geo = new Geo();

    tilesSource = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    iconMarker = L.icon({
        iconUrl: './src/img/marker.png',
        iconSize: [43, 64],
        iconAnchor: [21, 60]
    })
    map = L.map('cmap').setView([geo.lat, geo.lng], 8);
    L.tileLayer(this.tilesSource, {
        maxZoom: 18
    }).addTo(map);

    marker = L.marker([0, 0], { icon: iconMarker });
    marker.addTo(map);

    map.on('click', function(e) {

        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        bug.lat = lat;
        bug.lng = lng;
        loc = { "lat": lat, "lng": lng }
        marker.setLatLng(loc);


    });

}

var marker;
var loc;
var map_div = $("#map_div");
var map_d = $("#cmap");
var close = $("#close");
var map_data = $("#map_data");

var is_open = false;


close.click(function() {
    map.panTo(loc)
    map_div.removeAttr("class");
    map_d.css("height", "30vh");
    close.attr("class", "hidden");
    is_open = false;

    if (loc != null) {
        bug.lat = loc.lat;
        bug.lng = loc.lng;
        map_data.text(loc.lat + "," + loc.lng);
    }
})