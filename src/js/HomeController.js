class HomeController {
    constructor() {
        this.load()
    }
    load() {
        nearpagecontroller.loadNearLocations();
        popularpagecontroller.loadPopularLocations();
    }
}