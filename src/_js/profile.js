var username_p = $("#username");
const get_user_locations = (id) => {
    $.ajax({
        type: "POST",
        // url: "https://acolmenero.site/photowhere/php/get_user_locations.php",
        url: "./src/php/get_user_locations.php",
        data: { "id": id },
        success: function(res) {

            try {
                index_locations = JSON.parse(res);
                load_photo_places(index_locations, "user_cont");
            } catch (e) {
                console.log(e);
            }

        }
    });
}

var index_locations = [];
var page = "profile";
if (localStorage.getItem("userID") == null) {
    // not logged;
    window.location = "./login.html";
} else {
    // logged
    var id = localStorage.getItem("userID");
    var username = localStorage.getItem("username");

    username_p.text(username[0].toUpperCase() + username.substring(1));

    place = new Place();
    place.load();
    filter = new Filter();

    get_user_locations(id);


}