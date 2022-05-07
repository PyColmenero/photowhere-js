class NearController {
    constructor(htmlElementInject, limit) {
        this.htmlElementInject = htmlElementInject;
        this.limit = limit;
        this.load();
    }
    load() {
        geocontroller.getUserLocation(this.htmlElementInject, this.loadNearLocations.bind(this));
    }
    loadNearLocations() {
        apicontroller.getNearLocations(this.buildNearLocatons.bind(this), this.limit, geocontroller.lat, geocontroller.lng)
    }
    buildNearLocatons(locations) {

        locations = JSON.parse(locations);

        // inject on grid
        photocontroller.injectPhotosOnPhotogridElement(locations, this.htmlElementInject);

        // append to locations
        locationscontroller.pushLocations(locations);

    }
}