class ApiController {
    constructor() {
        this.load();
    }
    load() {

    }
    getProfileLocations(callback, userId) {

        if (callback && userId) {

            let api_url = rootpath + "api/profile";

            $.ajax({
                type: "POST",
                url: api_url,
                data: { "id": userId },
                success: function(res) {

                    callback(res);

                }
            });
        } else {
            console.log("Parameters error.");
        }

    }
    getContributions(callback, idUser) {
        $.ajax({
            type: "POST",
            url: "./api/contributes",
            data: { "idUser": idUser },
            success: function(res) {

                callback(res)

            }
        });
    }
    sendContributeForm(callback, name, desc, address, lat, lng) {
        $.ajax({
            type: "POST",
            url: "./api/contribute",
            data: { "name": name, "desc": desc, "address": address, "lat": lat, "lng": lng },
            success: function(res) {

                callback(res)
                    // if (res) {
                    //     console.log(res);
                    // } else {
                    //     window.location.href = "./contribute-images";
                    // }

            }
        });
    }
    getTagLocations(callback, tag, limit) {

        let api_url = rootpath + "api/tag";

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

        let api_url = rootpath + "api/popular";

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

        let api_url = rootpath + "api/near";

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

        let api_url = rootpath + "api/map";

        $.ajax({
            url: api_url,
            success: function(res) {

                callback(res);

            }
        });

    }
}