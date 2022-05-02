class ApiLocationsController {
    constructor() {
        this.load();
    }
    load() {

    }
    getProfileLocations(callback, userId) {

        let api_url = "/photowhere/api/profile";

        $.ajax({
            type: "POST",
            url: api_url,
            data: { "id": userId },
            success: function(res) {

                callback(res);

            }
        });

    }
    getTagLocations(callback, tag, limit) {

        let api_url = "/photowhere/api/tag";

        $.ajax({
            type: "POST",
            url: api_url,
            data: { "limit": limit, "tag": tag },
            success: function(res) {

                callback(res);

            }
        });

    }
    getPopularLocations(callback, limit) {

        let api_url = "./api/popular";

        $.ajax({
            type: "POST",
            url: api_url,
            data: { "limit": limit },
            success: function(res) {

                callback(res);

            }
        });

    }
    getNearLocations(callback, limit, lat, lng) {

        let api_url = "./api/near";

        $.ajax({
            type: "POST",
            url: api_url,
            data: { "limit": limit, "lat": lat, "lng": lng },
            success: function(res) {

                callback(res);

            }
        });

    }
    getMapLocations(callback) {

        let api_url = "./api/map";

        $.ajax({
            url: api_url,
            success: function(res) {

                callback(res);

            }
        });

    }
}