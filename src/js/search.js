
var search_input = $("#search_input");
var search_panel = $("#search_panel");
var search_imgdiv = $("#search_imgdiv");

search_input.focus(function () {
    search_panel.css("display", "block");
    search_imgdiv.children().eq(0).attr("src", "./img/cancel.svg");
});
search_input.keyup(function () {
    var val = $(this).val();
    if (val.replaceAll(" ", "").length == 0) {
        generateTypes(types);
    } else {
        new_types = types.filter(function (x) { return x.toUpperCase().indexOf(val.toUpperCase()) !== -1; })
        generateTypes(new_types);
        getLocations({ "text": val }, "SEARCH");
    }

})
search_imgdiv.click(function () {
    search_panel.css("display", "none");
    search_imgdiv.children().eq(0).attr("src", "./img/cancel.svg");
})

$(document).on("click", ".searched", function () {
    window.location = "./places.html?type=" + $(this).attr("data-type");
})


function generateTypes(list) {
    var str = "";
    list.forEach(element => {
        var type = (element.trim() == "sin contaminación luminica") ? "nolight" : element;

        str += '<div class="searched" data-type="' + type + '">'
        str += '    <div class="searched_icon">'
        str += '        <img src="https://acolmenero.site/photowhere/img/hashtag.svg">'
        str += '    </div>'
        str += '    <div class="searched_name">'
        str += '        <div>' + element + '</div>'
        str += '    </div>'
        str += '</div>'
    });
    search_panel.html(str);
}
function generatePlaces(places) {
    var str = "";
    for (var x = 0; x < places.length; x++) {
        var place = places[x];
        var photos = place.photosPlace.split("@");
        var type = (place.typePlace == "nolight") ? "sin contaminación luminica" : place.typePlace;

        str += '<div class="searched" data-id="' + place.idPlace + '">';
        str += '    <div class="searched_img">';
        str += '        <img src="https://acolmenero.site/photowhere/img/places/'+photos[0]+'">';
        str += '    </div>';
        str += '    <div class="searched_data">';
        str += '        <div class="namePlace">' + place.namePlace + '</div>';
        str += '        <div class="cityPlace">' + place.cityPlace + '</div>';
        str += '    </div>';
        str += '</div>';
    }
    search_panel.html(search_panel.html() + str);
}

var new_types = [];
var types = ["monumentos   ",
    "montaña      ",
    "playa        ",
    "sin contaminación luminica      ",
    "abandonado   ",
    "jardines     ",
    "urbano       ",
    "graffiti     ",
    "vistas       ",
    "naturaleza   ",
    "puentes      ",
    "primaveral   ",
    "rocas        ",
    "rural        ",
    "basico       ",
    "bar          ",
    "vanguardia   ",
    "lujo         "];

generateTypes(types);