var geo;
var place;
var filter;
var locations = [];

function load_regarding_page() {

    // load PLACE
    place = new Place();
    place.load();

    // load FILTER
    filter = new Filter();

    filter.geturl_to_filter();

    get_filter_locations();

}