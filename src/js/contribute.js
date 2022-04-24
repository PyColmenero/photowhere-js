var current_path;
var img;


class Bug {
    constructor() {
        this.urls = [];
        this.lat;
        this.lng;
    }
}
var bug = new Bug();

// Grabbing Elements and Storing in Variables
const defaultFile = document.getElementById("default-file");
const customBtn = document.getElementById("custom-btn");
customBtn.addEventListener("click", function() {
    defaultFile.click();
});

// File Upload
defaultFile.addEventListener("change", function() {

    if (bug.urls.length < 8) {
        const files = defaultFile.files[0];
        console.log(files.size);
        if (files.size < 10000000) {
            if (files) {
                const fileReader = new FileReader();
                fileReader.addEventListener("load", function() {

                    img = $($(".realimg")[bug.urls.length])
                    img.attr("src", this.result);
                    bug.urls.push(this.result)
                        // error.html("<a href='"+ bug.urls[0] +"'> Imagen nº0</a>");
                });
                fileReader.readAsDataURL(files);
            }
            error.html("");
        } else {
            error.text("Foto demasiado grande.");
        }
    }

    $(defaultFile).val("");

});

var realimg = $(".realimg");
realimg.click(function() {

    if (bug.urls.length != 0) {
        var id = parseInt($(this).attr("data-id"));
        if (id <= bug.urls.length - 1) {

            bug.urls[id] = null;

            remove_one();

            for (var x = 0; x < 8; x++) {

                img = $($(".realimg")[x]);

                if (bug.urls[x] == undefined) {
                    img.attr("src", "./img/plus.png");
                } else {
                    img.attr("src", bug.urls[x]);
                }
            }

        }
    }
})

function remove_one() {

    var arr = [];
    for (var x = 0; x < bug.urls.length; x++) {
        if (bug.urls[x] != null) {
            arr.push(bug.urls[x])
        }
    }
    bug.urls = [];
    for (var x = 0; x < arr.length; x++) {
        bug.urls.push(arr[x])
    }

}


var send = $("#send");
var name_place = $("#name_place");
var desc_place = $("#desc_place");
var error = $("#error");

send.click(function() {

    var name = name_place.val().replaceAll("'", "").replaceAll('"', "");
    name_place.val(name);
    var desc = desc_place.val().replaceAll("'", "").replaceAll('"', "");
    desc_place.val(desc);

    if (name.length <= 4) {
        error.text("Nombre muy corto.");
    } else {

        if (bug.urls.length == 0) {
            error.text("Seleccione al menos una foto.");
        } else {

            if (bug.lat == null) {
                error.text("Seleccione una ubicación aproximada.");
            } else {

                console.log(name);
                console.log(desc);
                console.log(bug.urls);
                console.log(bug.lat);
                console.log(bug.lng);

                send.text("Enviando...")
                name_place.val("");
                desc_place.val("");
                send_mail(name, desc, bug.urls);

            }
        }
    }


});

function send_mail(name, desc) {
    $.ajax({
        type: "POST",
        // url: "https://acolmenero.site/photowhere/php/mail.php",
        url: "./src/php/mail.php",
        data: { "name": name, "desc": desc, "imgs": bug.urls },
        success: function(res) {

            send.text(res + ". MUCHAS GRACIAS.")
            setTimeout(function() { window.location = "./index.html" }, 2000);

        }
    });
}