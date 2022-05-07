class MapController {
    constructor() {

        this.map;
        this.markers = [];
        this.position;
        this.isMoving;
        this.locations;
        this.shared_location = false;
        this.tilesSource = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
        this.iconMarker = L.icon({
            iconUrl: './src/img/marker.png',
            iconSize: [43, 64],
            iconAnchor: [21, 60]
        });
        this.loading_map = $("#loading_map");

        this.load();

    }
    load() {

        // instanciamos mapa
        this.map = L.map('map').setView([geocontroller.lat, geocontroller.lng], 8);
        L.tileLayer(this.tilesSource, {
            maxZoom: 18
        }).addTo(this.map);

        //cargamos los alfileres
        apilocationscontroller.getMapLocations(this.loadLocations.bind(this));

        // mover a mi ubicación
        geocontroller.getUserLocation("", this.moveMapToLocation.bind(this));

    }
    moveMapToLocation(lat, lng) {
        if (!this.shared_location) { // no me muevas si hay una location compartida
            this.map.setView([lat, lng], 8);
        }
    }
    checkSharedLocation() {

        let id = getUrlParameter('id');

        if (id) { // si hay compartición
            let sharedlocation = locationscontroller.getLocation(id);
            let lat = sharedlocation.latitudeLocation;
            let lng = sharedlocation.longitudeLocation;
            this.shared_location = true;

            this.map.setView([lat - 0.027, lng], 13);

            locationscontroller.showLocationOnScreen(id);

        }

    }
    loadLocations(locations) {

        this.loading_map.attr("class", "loaded_map");

        locations = JSON.parse(locations);
        locationscontroller.pushLocations(locations);

        var min_x = 1000;
        var min_y = 1000;
        var max_x = -1000;
        var max_y = -1000;

        for (let key in locations) {
            var location = locations[key];

            var coor = {
                lat: parseFloat(location.latitudeLocation),
                lng: parseFloat(location.longitudeLocation)
            }

            if (min_x > coor.lat) min_x = coor.lat;
            if (min_y > coor.lng) min_y = coor.lng;
            if (max_x < coor.lat) max_x = coor.lat;
            if (max_y < coor.lng) max_y = coor.lng;

            var marker = L.marker([coor.lat, coor.lng], { icon: mapcontroller.iconMarker });
            marker.id = location.idLocation;
            marker.addTo(mapcontroller.map)
            marker.on('click', function() {

                window.history.replaceState({}, "", "/photowhere/map?id=" + this.id);

                locationscontroller.showLocationOnScreen(this.id);

            });
            mapcontroller.markers.push(marker);
        }


        // check si hay location compartida
        this.checkSharedLocation();



        // poner nº resultados, añadir sitios cercanos
        // if (location.search != "") {
        //     if (this.locations.length != 0) {
        //         // si el filtro no es de loc
        //         if (!this.url_id_set) {

        //             setTimeout(function() {
        //                 mapcontroller.center_in_filters(min_x, min_y, max_x, max_y);
        //             }, 500);

        //         } else {

        //             var lat, lng;
        //             var id = parseFloat(filter.filters.outid);

        //             for (var x = 0; x < this.locations.length; x++) {
        //                 if (this.locations[x].idPlace == id) {

        //                     lat = map.locations[x].latitudePlace - 0.028;
        //                     lng = map.locations[x].longitudePlace;
        //                     // break
        //                     x = map.locations.lengh;

        //                 }
        //             }

        //             this.map.setView([lat - 0.0018, lng], 13);

        //             place.map_marker_click(this.locations, id, true);

        //             document.getElementById("related-indected").scroll({
        //                 left: 0,
        //                 behavior: 'smooth'
        //             });
        //         }
        //     } else {
        //         btnOpenFilter.html("<strong class='error'> NINGUN RESULTADO </strong>");
        //         this.map.setZoom(6);
        //     }
        // }
    }

    center_in_filters(min_x, min_y, max_x, max_y) {

        var lat = (min_x + max_x) / 2;
        var lng = (min_y + max_y) / 2;
        var zoom = 0;

        if ((max_x - min_x) * 100 < 10 && (max_y - min_y) * 100 < 10) {
            zoom = (14);
        } else if ((max_x - min_x) * 100 < 50 && (max_y - min_y) * 100 < 50) {
            zoom = (10);
        } else if ((max_x - min_x) * 100 < 100 && (max_y - min_y) * 100 < 100) {
            zoom = (9);
        } else if ((max_x - min_x) * 100 < 200 && (max_y - min_y) * 100 < 200) {
            zoom = (8);
        } else if ((max_x - min_x) * 100 < 400 && (max_y - min_y) * 100 < 400) {
            zoom = (7);
        } else if ((max_x - min_x) * 100 < 1500 && (max_y - min_y) * 100 < 1500) {
            zoom = (6);
        } else {
            zoom = (5);
        }

        this.map.setView([lat, lng], zoom);

        btnOpenFilter.text("Filtros: " + this.locations.length + " resultados.");

    }

}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};