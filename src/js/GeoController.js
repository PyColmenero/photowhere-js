class GeoController {
    constructor() {
        this.lat = 0;
        this.lng = 0;
        this.lat = 40.4381311;
        this.lng = -3.8196196;
        // this.lat = 37.39977957854693;
        // this.lng = -5.930715539801215;
        this.allow_loc = $("#allow_loc");
        this.element = $(".near_cont");
        this.loc_seemore = $("#loc_seemore");
        this.timeOut;
        this.isLocationStored = false;
        this.errorStated = false;

        this.load();
    }

    load() {
        this.allow_loc.click(this.getLocation);
        this.getStoredUserPosition();
    }

    storeLocation(position) {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        localStorage.setItem("pos", this.lat + "," + this.lng);
        this.isLocationStored = true;
        this.callback(this.lat, this.lng);
    }

    getStoredUserPosition() {
        var pos = localStorage.getItem("pos");
        if (pos != null) {
            var pos = pos.split(",");
            if (pos.length == 2) {
                this.lat = parseFloat(pos[0]);
                this.lng = parseFloat(pos[1]);
                this.isLocationStored = true;
                return [this.lat, this.lng];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    getUserLocation(error_element, callback) {

        this.htmlElementInject = $(error_element);
        this.callback = callback;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.storeLocation.bind(this), this.showError.bind(this), { enableHighAccuracy: true });

            this.timeOut = setTimeout(this.timed_out.bind(this), 5000);
        } else {
            this.htmlElementInject.text("Geolocation is not supported by this browser.");
        }

    }

    timed_out() {
        if (this.isLocationStored) {
            // OK
        } else if (!this.errorStated) {
            this.htmlElementInject.html("<p class='error none'>No parece haber acceso a la Localización. ¿Tienes la ubcación en tu movil activada?</p>");
        }
    }

    showError(error) {

        this.errorStated = true;

        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.htmlElementInject.html("<p class='error none'>No hay permisos de localización</p>");
                this.htmlElementInject.attr("id", "")
                break;
            case error.POSITION_UNAVAILABLE:
                geo.element.html("<div class='error_loc'><p class='error_loc'>Location information is unavailable.</p></div>");
                break;
            case error.TIMEOUT:
                geo.element.html("<div class='error_loc'><p class='error_loc'>The request to get user location timed out.</p></div>");
                break;
            case error.UNKNOWN_ERROR:
                geo.element.html("<div class='error_loc'><p class='error_loc'>An unknown error occurred.</p></div>");
                break;
        }
        // geo.loc_seemore.css("display", "none")
    }
}