class ContributeController {
    constructor() {

        this.send_contribute_button = $("#send");
        this.location_name = $("#location_name");
        this.location_description = $("#location_description");
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

        this.location_name.val(name);
        this.location_description.val(desc);

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

                this.save_form(name, desc);

            }

        }
    }
    save_form(name, desc) {
        $.ajax({
            type: "POST",
            url: "./src/php/mail.php",
            data: { "name": name, "desc": desc, "lat": this.coordinates.lat, "lng": this.coordinates.lng },
            success: function(res) {

                if (res) {
                    console.log(res);
                } else {
                    window.location.href = "./contribute-images";
                }

            }
        });
    }
}

let geocontroller = new GeoController();
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