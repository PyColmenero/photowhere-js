class Geo {
    constructor() {
        this.lat = 40.4379543;
        this.lng = -3.6795367;
        this.allow_loc = $("#allow_loc");
        this.element = $(".near_cont");
        this.loc_seemore = $("#loc_seemore");
        this.timeOut;
        this.has = false;
    }

    save_pos(lat, lng) {
        this.lat = lat;
        this.lng = lng;
        localStorage.setItem("pos", lat + "," + lng);
    }
    load_pos() {
        var pos = localStorage.getItem("pos");
        if (pos != null) {
            var pos = pos.split(",");
            if (pos.length == 2) {
                this.lat = parseFloat(pos[0]);
                this.lng = parseFloat(pos[1]);
                this.has = true;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    getLocation() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setUserPos, this.showError, { enableHighAccuracy: true });

            this.timeOut = setTimeout(this.timed_out, 5000);
        } else {
            this.element.text("Geolocation is not supported by this browser.");
        }

    }

    timed_out() {
        if (geo.has) {
            filter.filters = { "near": true, "lat": geo.lat, "lng": geo.lng, "orderby": "viewsPlace", "orderDir": "DESC", "max": 9 };
            getLocations(filter.filters, "NEAR");
        } else {
            geo.element.html("<div class='error_loc'><p class='error_loc'>No parece haber acceso a la Localización. ¿Tienes la ubcación en tu movil activada?</p></div>");
        }
    }

    showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                // if (geo.has) {
                //     geo.element.html("<div class='error_loc'><p>Tienes que permitir la Localización para ver esto. En 5 segundos se actualizará con datos previamente guardados.</p></div>");
                // } else {
                //     geo.element.html("<div class='error_loc'><p>Tienes que permitir la Localización para ver esto.</p></div>");
                // }
                $("#near").html($("#near").html() + "<div class='error_loc'><p>Tienes que permitir la Localización para ver esto.</p><p id='allow_msg' class='accept_pos noselect'>PERMITIR</p></div>");
                $("#near_cont").text("");
                $("#near_cont").attr("class", "near_cont notallowed");
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
        geo.loc_seemore.css("display", "none")
    }

    load() {

        geo.allow_loc.click(function () {
            geo.getLocation();
        });

        this.load_pos();

    }
}


var active_pos = $("#active_pos");

$(document).on('click', '.accept_pos', function () {

    localStorage.setItem("allowed_geo", "true");
    window.location.reload();
    // active_pos.css("display", "none");
    // $("#near_cont").attr("class", "near_cont");
    // $(".error_loc").css("display", "none")
    // load_regarding_page();

});
$(document).on('click', '#deny_pos', function () {

    localStorage.setItem("allowed_geo", "false");
    active_pos.css("display", "none");
    load_regarding_page();

});