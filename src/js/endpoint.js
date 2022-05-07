let rootpath = "/photowhere/";
let url = location.pathname.split("/")[2]

// encargado de hacer las peticiones a la API
let apicontroller = null;
// encargado de recoger las coordenadas del usuario
// y así centrar el mapa en tu posición
let geocontroller = null;
// se encargará de almacenar y mostrara las locations
let locationscontroller = null;
// encargado de display una imagen para verla más grande
let photocontroller = null;
// generar los lugares más populares
let popularcontroller = null;
// generar los lugares más cercanos
let nearcontroller = null;
// obtiene la tag de la URL y llama a la ApiController para obtener las localizaciones y luego a LocationsController para inyectarlas
let tagcontroller = null;
// encargado de generar el mapa y poner los alfileres
let mapcontroller = null;
// pedirá al apicontroller las locations del usuario en cuestión
let profilecontroller = null;



console.log(url);

switch (url) {
    case "":

        apicontroller = new ApiController();
        geocontroller = new GeoController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        nearcontroller = new NearController("#near_cont", 8);
        popularcontroller = new PopularController("#popular_cont", 9);

        break;
    case "popular":

        apicontroller = new ApiController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        popularcontroller = new PopularController("#popular-photogrid", 51);

        break;
    case "near":

        apicontroller = new ApiController();
        geocontroller = new GeoController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        nearcontroller = new NearController("#near-photogrid", 51);

        break;
    case "tag":

        apicontroller = new ApiController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        tagcontroller = new TagController("#tag-photogrid", 51);

        break;
    case "map":

        // traera los alfileres del mapa
        apicontroller = new ApiController();
        geocontroller = new GeoController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        mapcontroller = new MapController();

        break;
    case "profile":

        apicontroller = new ApiController();
        locationscontroller = new LocationsController();
        photocontroller = new PhotoController();
        profilecontroller = new ProfileController("#profile-photogrid", 100);

        break;
    default:
        break;
}