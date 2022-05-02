class NearPageController {
    constructor(htmlElementInject, limit) {
        this.htmlElementInject = htmlElementInject;
        this.limit = limit;
        this.load();
    }
    load() {

        this.loadNearLocations();

    }
    loadNearLocations() {
        apilocationscontroller.getNearLocations(this.buildNearLocatons.bind(this), this.limit, geocontroller.lat, geocontroller.lng)
    }
    buildNearLocatons(locations) {

        locations = JSON.parse(locations);

        // inject on grid
        photocontroller.injectPhotosGridOnElement(locations, this.htmlElementInject);

        // append to locations
        locationscontroller.pushLocations(locations);

    }
}