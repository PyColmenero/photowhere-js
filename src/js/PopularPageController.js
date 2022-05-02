class PopularPageController {
    constructor(htmlElementInject, limit) {
        this.htmlElementInject = htmlElementInject;
        this.limit = limit;
        this.load();
    }
    load() {

        this.loadPopularLocations();

    }
    loadPopularLocations() {
        apilocationscontroller.getPopularLocations(this.buildPopularLocatons.bind(this), this.limit)
    }
    buildPopularLocatons(locations) {

        locations = JSON.parse(locations);

        // inject on grid
        photocontroller.injectPhotosGridOnElement(locations, this.htmlElementInject);

        // append to locations
        locationscontroller.pushLocations(locations);

    }
}