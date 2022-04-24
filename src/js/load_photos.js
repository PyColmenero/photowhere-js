

function load_photo_places(locs, element) {

    var str = "";

    for (var x = 0; x < locs.length; x++) {
        var loc = locs[x];
        var src = "https://acolmenero.site/photowhere/img/places/" + loc.photosPlace.split("@")[0];

        style = "style='background: url(\"" + src + "\") no-repeat center; background-size:cover'";
        str += "<div class='place' data-id='" + loc.idPlace + "' " + style + " ></div>";
    }

    if (locs.length == 0) {
        $("." + element).html("<p class='none'>Ningún resultado...</p>");
    } else {
        $("." + element).html(str);
    }


}