class PhotoController {
    constructor() {
        this.images_url_list = [];
        this.images_url_list_index = 0;
        this.photo_display_panel = $("#photo-display-panel");
        this.photo_display_panel_img = $("#photo-display-panel-img");
        this.photo_display_panel_arrows = $("#photo-display-panel-arrows");
        this.close_photo_display_panel = $("#close-photo-display-panel");
        this.photo_display_panel_left_arrow = $("#photo-display-panel-left-arrow");
        this.photo_display_panel_right_arrow = $("#photo-display-panel-right-arrow");

        this.load();
    }
    load() {
        this.close_photo_display_panel.click(this.closePhotoDisplayPanel)
        this.photo_display_panel_left_arrow.click(this.leftArrowClick.bind(this))
        this.photo_display_panel_right_arrow.click(this.rightArrowClick.bind(this))

        // click on location panel image
        $(document).on('click', '.location-image', function() {

            let image = $(this).attr("src");
            let images_list = $("#location-photos > img");
            let images_url_list = [];

            // genero la lista de urls de imagenes
            images_list.each(index => {
                let img = images_list.eq(index);
                images_url_list.push(img.attr("src"));
            });

            // pido al controlador que lo displaiee
            photocontroller.openDisplayPhotoPanel(images_url_list, images_url_list.indexOf(image))

        });
    }
    openDisplayPhotoPanel(list, index) {

        this.images_url_list = list;
        this.images_url_list_index = index;

        if (this.images_url_list.length == 1) {
            this.photo_display_panel_arrows.css("display", "none");
        } else {
            this.photo_display_panel_arrows.css("display", "flex");
        }

        this.photo_display_panel.css("display", "block");

        this.displayPhoto();
    }
    closePhotoDisplayPanel() {
        photocontroller.photo_display_panel.css("display", "none");
    }
    rightArrowClick() {
        if (this.images_url_list_index == this.images_url_list.length - 1) {
            this.images_url_list_index = 0;
        } else {
            this.images_url_list_index++;
        }
        this.displayPhoto();
    }
    leftArrowClick() {
        console.log(this.images_url_list_index);
        if (this.images_url_list_index == 0) {
            this.images_url_list_index = this.images_url_list.length - 1;
        } else {
            this.images_url_list_index--;
        }
        console.log(this.images_url_list_index);
        this.displayPhoto();
    }
    displayPhoto() {
        let image_src = this.images_url_list[this.images_url_list_index];
        this.photo_display_panel_img.attr("src", image_src);
    }
    injectPhotosGridOnElement(locations, elementIdentidicator) {

        var html = "";

        // generate HTML
        for (let key in locations) {
            var location = locations[key];

            var src = "/photowhere/src/photos/" + location.photos[0];
            let style_attr = "style='background: url(\"" + src + "\") no-repeat center; background-size:cover'";

            html += "<div class='location-photogrid' data-id='" + location.idLocation + "' " + style_attr + " ></div>";
        }

        // inject
        if (locations.length == 0) {
            $(elementIdentidicator).html("<p class='none'>Ningún resultado...</p>");
        } else {
            $(elementIdentidicator).html(html);
        }

    }
}