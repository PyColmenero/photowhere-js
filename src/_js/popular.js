var geo;
var place;
var filter;

function load_regarding_page() {

	// load PLACE
	place = new Place();
	place.load();

	// load FILTER
	filter = new Filter();

    get_popular_locations(99);

}