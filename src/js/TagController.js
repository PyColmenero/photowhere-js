class TagController {
    constructor(htmlElementInject, limit) {
        this.tag;
        this.htmlElementInject = htmlElementInject;
        this.limit = limit;
        this.load();
    }
    load() {

        let url = location.pathname;
        url = url.split("/")
        this.tag = url[url.length - 1];

        apilocationscontroller.getTagLocations(this.loadTagLocations.bind(this), this.tag, this.limit);

    }
    loadTagLocations(locations) {

        locations = JSON.parse(locations);

        // inject on grid
        photocontroller.injectPhotosGridOnElement(locations, this.htmlElementInject);

        // append to locations
        locationscontroller.pushLocations(locations);

    }

}