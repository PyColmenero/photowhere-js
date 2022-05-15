class ContributeController {
    constructor() {

        this.send_contribute_button = $("#send");
        this.location_name = $("#location_name");
        this.location_description = $("#location_description");
        this.location_address = $("#name_place");
        this.error = $(".error");
        this.coordinates = null;

        this.map;
        this.tilesSource = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
        this.iconMarker = L.icon({
            iconUrl: './src/img/marker.png',
            iconSize: [43, 64],
            iconAnchor: [21, 60]
        });
        this.load();
    }
    load() {

        this.send_contribute_button.click(this.sendContribute.bind(this));

        this.loadmap();
    }
    loadmap() {
        this.map = L.map('cmap').setView([geocontroller.lat, geocontroller.lng], 8);

        L.tileLayer(this.tilesSource, {
            maxZoom: 18
        }).addTo(this.map);

        let marker = L.marker([0, 0], { icon: this.iconMarker });
        marker.addTo(this.map);

        this.map.on('click', function(e) {

            let lat = e.latlng.lat;
            let lng = e.latlng.lng;

            contributecontroller.coordinates = { "lat": lat, "lng": lng }
            marker.setLatLng(contributecontroller.coordinates);

        });
    }
    sendContribute() {

        let name = this.location_name.val().replaceAll("'", "").replaceAll('"', "");
        let desc = this.location_description.val().replaceAll("'", "").replaceAll('"', "");
        let address = this.location_address.val().replaceAll("'", "").replaceAll('"', "");

        this.location_name.val(name);
        this.location_description.val(desc);
        this.location_address.val(address);

        if (name.length <= 4) {
            this.error.text("Nombre muy corto.");
        } else {

            if (this.coordinates == null) {
                this.error.text("Seleccione una ubicación aproximada.");
            } else {

                this.error.text("");

                this.send_contribute_button.text("Enviando...");

                this.location_name.val("");
                this.location_description.val("");
                this.location_address.val("");

                apicontroller.sendContributeForm(this.apiResponse, name, desc, address, this.coordinates.lat, this.coordinates.lng);

            }

        }
    }
    move(lat, lng) {
        this.map.setView([lat, lng], 8);
    }
    apiResponse(response) {
        try {
            response = JSON.parse(response)

            if (response.error) {
                contributecontroller.error.text(response.error);
                contributecontroller.send_contribute_button.text("Error al enviar");
            } else if (response.good) {
                contributecontroller.error.text(response.error);
                contributecontroller.send_contribute_button.text("Enviado. Muchas gracias.");
            }

        } catch {
            contributecontroller.error.text(response);
            contributecontroller.send_contribute_button.text("Error al enviar");
        }
    }

}

let geocontroller = new GeoController();
let apicontroller = new ApiController();
let contributecontroller = new ContributeController();

// var map_div = $("#map_div");
// var map_d = $("#cmap");
// var close = $("#close");
// var map_data = $("#map_data");

// var is_open = false;


// close.click(function() {
//     map.panTo(loc)
//     map_div.removeAttr("class");
//     map_d.css("height", "30vh");
//     close.attr("class", "hidden");
//     is_open = false;

//     if (loc != null) {
//         bug.lat = loc.lat;
//         bug.lng = loc.lng;
//         map_data.text(loc.lat + "," + loc.lng);
//     }
// })