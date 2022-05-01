function setUserPos(position) {

    clearTimeout(geo.timeOut);

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    geo.save_pos(lat, lng)

    get_near_locations(lat, lng, 99);

}

var geo;
var place;
var filter;

function load_regarding_page() {

	// load GEO
	geo = new Geo();
	geo.load();

	// load PLACE
	place = new Place();
	place.load();

	// load FILTER
	filter = new Filter();
	//filter.load();

    geo.allowed_geo = localStorage.getItem("allowed_geo");
    if (geo.allowed_geo == "true") {
         navigator.geolocation.getCurrentPosition(setUserPos, geo.showError);
    } else { // si NO tienes permitida la ubicación
        geo.element.html("<div class='error_loc'><p>Tienes que permitir la Localización para ver esto.</p><p id='allow_msg' class='accept_pos noselect'>PERMITIR</p></div>");
    }

}