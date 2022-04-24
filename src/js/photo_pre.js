// photos
class PrePhoto {
    constructor() {

        this.total_photodiv = $("#photo");
        this.img_pre = $("#img_pre");
        this.close = $(".close");
        this.left_arrow = $("#left_arrow");
        this.right_arrow = $("#right_arrow");
        this.arrows = $("#arrows");
        this.left_arrow = $("#left_arrow")
        this.right_arrow = $("#right_arrow")

        this.current_place_photos;
        this.current_pre_index = 0;
        this.url = "";

    }

    display_photo(img) {

        var src = img.attr("src").split("/")
        src = src[src.length - 1];
        this.current_pre_index = this.current_place_photos.indexOf(src);


        if (this.current_place_photos.length == 1) {
            this.arrows.css("display", "none");
        } else {
            this.arrows.css("display", "flex");
        }

        this.total_photodiv.css("display", "block");
        this.img_pre.attr("src", img.attr("src"))
    }

    

}

var prePhoto = new PrePhoto();


$(document).on('click', '.place-img', function () {
    prePhoto.current_place_photos = $(this).parent().attr("data-photos").split("@");
    prePhoto.display_photo($(this));
});
prePhoto.close.click(function () {
    prePhoto.total_photodiv.css("display", "none");
});



prePhoto.left_arrow.click(function () {
    prePhoto.current_pre_index = (prePhoto.current_pre_index == 0) ? prePhoto.current_place_photos.length - 1 : prePhoto.current_pre_index - 1;
    prePhoto.img_pre.attr("src", "https://acolmenero.site/photowhere/img/places/" + prePhoto.current_place_photos[prePhoto.current_pre_index]);
});
prePhoto.right_arrow.click(function () {
    prePhoto.current_pre_index = (prePhoto.current_pre_index == prePhoto.current_place_photos.length - 1) ? 0 : prePhoto.current_pre_index + 1;
    prePhoto.img_pre.attr("src", "https://acolmenero.site/photowhere/img/places/" + prePhoto.current_place_photos[prePhoto.current_pre_index]);
});

