class Filter {
    constructor() {

        this.filtersPanel = $("#filters");

        this.generalfilter = $("#general-filter");
        this.cityfilter = $("#city-filter");
        this.typesfilter = $("#types-filter");
        this.nearfilter = $("#near");
        this.filters = null;
    }

    corrector() {
        if (this.cityfilter.val() == "Malaga") this.cityfilter.val("Málaga");
    }

    geturl_to_filter() {
        if (location.search != "") {
            var search = location.search.substring(1);
            this.filters = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')

            if (this.filters.text) this.generalfilter.val(this.filters.text);
            if (this.filters.city) this.cityfilter.val(this.filters.city);
            if (this.filters.type) this.typesfilter.val(this.filters.type);

            if (this.filters.outid) {
                map.url_id_set = true;
            }
            console.log(this.filters);
        }
    }
}

btnOpenFilter = $("#filters-btn");
closefilter = $(".close");
btnfilter = $("#btn-filter");
nofilter = $("#nofilter");

// FILTER
btnOpenFilter.click(function() {
    place.placedata.attr("class", "hide-data");
    filter.filtersPanel.css("display", "flex");
});

closefilter.click(function() {
    filter.filtersPanel.css("display", "none");
});

var data;
btnfilter.click(function() {

    filter.corrector();

    var vars = [];
    if (filter.generalfilter.val().length > 1) vars.push("text=" + filter.generalfilter.val());
    if (filter.cityfilter.val().length > 1) vars.push("city=" + filter.cityfilter.val());
    if (filter.typesfilter.val().length > 1) vars.push("type=" + filter.typesfilter.val());

    var url = "./" + page + ".html?" + (vars.join("&"));
    window.location = url;

});


nofilter.click(function() {
    if (page == "places") {
        window.location = "./places.html";
    } else {
        window.location = "./map.html";
    }
})