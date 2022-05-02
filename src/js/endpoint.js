let url = location.pathname.split("/")[2]

// encargado de hacer las peticiones a la API
let apilocationscontroller = null;
// encargado de recoger las coordenadas del usuario
// y así centrar el mapa en tu posición
let geocontroller = null;
// se encargará de almacenar y mostrara las locations
let locationscontroller = null;
// encargado de display una imagen para verla más grande
let photocontroller = null;
// generar los lugares más populares
let popularpagecontroller = null;
// generar los lugares más cercanos
let nearpagecontroller = null;
// generar los lugares más cercanos y populares
let homecontroller = null;
// obtiene la tag de la URL y llama a la ApiController para obtener las localizaciones y luego a LocationsController para inyectarlas
let tagcontroller = null;
// encargado de generar el mapa y poner los alfileres
let mapcontroller = null;
// pedirá al apicontroller las locations del usuario en cuestión
let profilecontroller = null;





console.log(url);
switch (url) {
    case "":

        apilocationscontroller = new ApiLocationsController();
        geocontroller = new GeoController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        nearpagecontroller = new NearPageController("#near_cont", 8);
        popularpagecontroller = new PopularPageController("#popular_cont", 9);
        homecontroller = new HomeController()

        break;
    case "popular":

        apilocationscontroller = new ApiLocationsController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        popularpagecontroller = new PopularPageController("#popular-photogrid", 51);

        break;
    case "near":

        apilocationscontroller = new ApiLocationsController();
        geocontroller = new GeoController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        nearpagecontroller = new NearPageController("#near-photogrid", 51);

        break;
    case "tag":

        // traera los alfileres del mapa
        apilocationscontroller = new ApiLocationsController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        tagcontroller = new TagController("#tag-photogrid", 51);

        break;
    case "map":

        // traera los alfileres del mapa
        apilocationscontroller = new ApiLocationsController();
        geocontroller = new GeoController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        mapcontroller = new MapController();

        break;
    case "profile":

        // traera los alfileres del mapa
        apilocationscontroller = new ApiLocationsController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        profilecontroller = new ProfileController("#profile-photogrid", 100);

        break;
    default:
        break;
}