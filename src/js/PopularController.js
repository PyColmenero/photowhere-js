class PopularController {
    constructor(htmlElementInject, limit) {
        this.htmlElementInject = htmlElementInject;
        this.limit = limit;
        this.load();
    }
    load() {

        this.loadPopularLocations();

    }
    loadPopularLocations() {
        apicontroller.getPopularLocations(this.buildPopularLocatons.bind(this), this.limit)
    }
    buildPopularLocatons(locations) {

        locations = JSON.parse(locations);

        // inject on grid
        photocontroller.injectPhotosOnPhotogridElement(locations, this.htmlElementInject);

        // append to locations
        locationscontroller.pushLocations(locations);

    }
}