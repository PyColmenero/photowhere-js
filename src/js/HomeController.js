class HomeController {

    constructor() {
        this.load()
    }
    load() {

        this.loadPopularLocations();
        this.loadNearLocations();

    }

    loadNearLocations() {
        apilocationscontroller.getNearLocations(this.buildNearLocatons.bind(this), 8, geocontroller.lat, geocontroller.lng)
    }
    buildNearLocatons(locations) {

        locations = JSON.parse(locations);

        // inject on grid
        photocontroller.injectPhotosGridOnElement(locations, "#near_cont");

        // append to locations dict
        locationscontroller.locations = Object.assign({}, locationscontroller.locations, locations);


    }
    loadPopularLocations() {
        apilocationscontroller.getPopularLocations(this.buildPopularLocatons.bind(this), 9)
    }
    buildPopularLocatons(locations) {

        // guardo las localizaciones en el Controlator. Las apenddeo
        locations = JSON.parse(locations);

        // inject on grid
        photocontroller.injectPhotosGridOnElement(locations, "#popular_cont");

        // append to locations dict
        locationscontroller.locations = Object.assign({}, locationscontroller.locations, locations);

    }

}

// encargado de hacer las peticiones a la API
// traera los alfileres del mapa
let apilocationscontroller = new ApiLocationsController();
// encargado de recoger las coordenadas del usuario
// y así centrar el mapa en tu posición
let geocontroller = new GeoController();
// se encargará de almacenar y mostrara las locations
let locationscontroller = new LocationsController();
// encargado de display una imagen para verla más grande
let photocontroller = new PhotoController();
// generar los lugares más cercanos y populares
let homecontroller = new HomeController()