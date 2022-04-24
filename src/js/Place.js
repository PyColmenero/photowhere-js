class Place {
    constructor() {

        this.closeplace = $("#closediv");
        this.placedata = $("#place-data");
        this.injectdata = $("#inject-data");
        this.related = $("#related");
        this.relatedindected = $("#related-indected");
        this.id = 0;
        this.loading_place = $("#loading_place");
        this.place_name = $("#place_name");
        this.place_desc = $("#place_desc");
        this.social_media = $("#social_media");
        this.social_media_img = $("#social_media > img");
        this.social_media_p = $("#social_media > p");
        this.place_address = $("#place_address");
        this.place_googlemaps = $("#place_googlemaps");
        this.place_photos = $("#place_photos");
        this.place_types = $("#place_types");
        this.own_map_button = $("#own_map_button");
        this.place_embed_map = $("#place_embed_map");
        this.share = $("#share");

        this.share.click(function() {
            console.log("acolmenero.site/photowhere/map.html?outid=" + place.id);
        })
    }

    show_place(cplace) {

        place.injectdata.css("display", "block");

        // Subimos la carta
        this.placedata.attr("class", "show-data");

        // Multi-Datos en arrays
        var photos = cplace.photosPlace.split("@");
        var tags = cplace.typePlace.split("@");

        // Asignar lista de photos para el Swipe de galería
        prePhoto.current_place_photos = photos;

        // Name Place
        this.place_name.text(cplace.namePlace);

        // Type Place
        var str_types = "";
        for (var x = 0; x < tags.length; x++) {
            if (tags[x] != "sponsor") {
                str_types += '<label class="tag"> <a href="./places.html?type=' + tags[x].toLowerCase() + '">#' + tags[x] + '</a></label>';
            }
        }

        this.place_desc.html(cplace.descriptionPlace + str_types);

        if (cplace.socialMediaUserPlace != null && cplace.socialMediaUserPlace.length != 0) {
            var socialmedia = cplace.socialMediaUserPlace.split("@");
            var social_link = "";
            if (socialmedia[0] == "i") social_link = "https://instagram.com/" + socialmedia[1]
            if (socialmedia[0] == "tw") social_link = "https://twiter.com/" + socialmedia[1]
            if (socialmedia[0] == "tk") social_link = "https://tiktok.com/@" + socialmedia[1]
            this.social_media_img.attr("src", "./src/img/" + socialmedia[0] + ".svg");
            this.social_media_p.html("<a href='" + social_link + "' target='_blank'>" + socialmedia[1] + "</a>");
            this.social_media.css("display", "flex");
        } else {
            this.social_media.css("display", "none");
        }

        // PHOTOS
        var str_photos = "";
        var only_class = (photos.length == 1) ? "single-img" : "";
        this.place_photos.attr("data-photos", cplace.photosPlace);
        for (var x = 0; x < photos.length; x++) {
            str_photos += '<img class="place-img ' + only_class + '" src="https://acolmenero.site/photowhere/src/photos/' + photos[x] + '" alt="Foto ' + x + ' del lugar">';
        }
        this.place_photos.html(str_photos);

        // GOOGLE MAPS
        this.place_address.html('<p> ' + cplace.countryPlace + ", " + cplace.cityPlace + ' </p>')
        this.place_googlemaps.html('<a href="' + cplace.googleMapsURL + '" target="_blank" ">Ver en Google Maps</a>')

        this.own_map_button.attr("data-id", cplace.idPlace);
        // IFRAME MAP
        // var src_embed_map = "https://www.google.com/maps/embed/v1/view?key=AIzaSyAINHMRUzyxtFpiKQsT2cqknmS7QAlz-NU&center="+cplace.latitudePlace+","+cplace.longitudePlace+"&zoom=16&maptype=satellite"
        // this.place_embed_map.attr("src", src_embed_map);

        /*if (location.pathname.indexOf("map.html") != -1) {
        	this.own_map_button.css("display", "none")
        } else {
        	this.related.css("display", "none");
        }*/

        this.loading_place.css("display", "none");
        this.add_view(cplace.idPlace);

        /*if(location.pathname.indexOf("map.html") != -1){
        	this.own_map_button.css("display", "none")
        }*/
        document.getElementById("data_place").scroll(0, 0)
    }

    load_near_places(places) {

        var str = "";
        var own = "";
        var index = 0;

        if (places.length > 1) {
            this.related.css("display", "block");
            for (var x = 0; x < places.length; x++) {
                var cplace = places[x];
                if (this.id != cplace.idPlace) {
                    if (map.locs_ids.includes(parseInt(cplace.idPlace))) {
                        index++;
                        var photos = cplace.photosPlace.split("@");
                        str += "<div class='place_realated' data-index='" + index + "' data-id='" + cplace.idPlace + "' data-lat='" + cplace.latitudePlace + "' data-lng='" + cplace.longitudePlace + "'>";
                        str += "<div class='related_img'><img src='https://acolmenero.site/photowhere/src/photos/" + photos[0] + "'></div>";
                        str += "<p>" + cplace.namePlace + "</p>";
                        str += "</div>";
                    }
                } else {
                    var photos = cplace.photosPlace.split("@");
                    own += "<div class='place_realated own_related' data-index='" + 0 + "' data-id='" + cplace.idPlace + "' data-lat='" + cplace.latitudePlace + "' data-lng='" + cplace.longitudePlace + "'>";
                    own += "<div class='related_img'><img src='https://acolmenero.site/photowhere/src/photos/" + photos[0] + "'></div>";
                    own += "<p>" + cplace.namePlace + "</p>";
                    own += "</div>";
                }
            }
        } else {
            this.related.css("display", "none");
        }

        if (index != 0) {
            this.relatedindected.html(own + str);
        } else {
            this.related.css("display", "none");
        }
    }

    add_view(id) {
        console.log("Not view added: " + id);
        // $.ajax({
        //     type: "POST",
        //     url: "./src/php/add_view.php",
        //     data: { "id": id },
        //     success: function (res) {
        //         // console.log(res);
        //     }
        // });
    }

    map_marker_click(locations, id, isMarker, index) {

        this.id = id;
        this.index_related = 0;

        // enseñamos que carga
        this.loading_place.css("display", "block");
        place.placedata.attr("class", "show-data");
        place.injectdata.css("display", "none");


        var cplace;
        for (var x = 0; x < locations.length; x++) {
            if (locations[x].idPlace == id) {
                cplace = locations[x];
            }
        }

        if (cplace) {

            // window.history.replaceState({}, "", "/photowhere/map.html?outid="+id);

            this.show_place(cplace);

            if (page == "map") {

                window.history.replaceState({}, "", "/web/photowhere/map.html?outid=" + id);
                // window.history.replaceState({}, "", "/photowhere/map.html?outid="+id);

                if (isMarker) {
                    get_near_locations(cplace.latitudePlace, cplace.longitudePlace, 25);
                    document.getElementById("related-indected").scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                    document.getElementById("data_place").scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    document.getElementById("related-indected").scroll({
                        left: (175 * parseInt(index)) - 32,
                        behavior: 'smooth'
                    });

                    var lat = parseFloat(cplace.latitudePlace) - 0.0018;
                    var lng = parseFloat(cplace.longitudePlace);
                    map.rmap.setView([lat, lng], map.rmap.getZoom());
                }
            }



        } else {
            console.log("Location not found...");
        }



        this.real_id = id;
    }

    load() {

        place.closeplace.click(function() {
            place.placedata.attr("class", "hide-data");
        });

        place.own_map_button.click(function() {

            var id = $(this).attr("data-id");

            window.location = "./map.html?outid=" + id;

        })
    }

}

$(document).on('click', '.place', function() {

    place.injectdata.css("display", "none");
    place.loading_place.css("display", "block");
    place.placedata.attr("class", "show-data");

    var id = $(this).attr("data-id")
        // getLocations(filter.filters, "SHOWPLACE");
    place.map_marker_click(index_locations, id);

});