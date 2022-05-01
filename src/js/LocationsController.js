class LocationsController {
    constructor() {
        this.divLocationPanel = $("#location-panel");
        this.buttonCloseLocationPanel = $("#close-location-panel");
        this.locations = [];
        this.locationpanel = {
            "title": $("#location_name"),
            "description": $("#location_description"),
            "socialmedia_link": $("#location_socialmedia"),
            "socialmedia_platform": $("#location_socialmedia > img"),
            "socialmedia_account": $("#location_socialmedia > p"),
            "photos": $("#location-photos"),
            "address": $("#location_address"),
            "googlemaps": $("#location_googlemaps > a"),
            "share": $("#location_share")
        }
        this.load();
    }
    load() {
        // click on close location panel
        this.buttonCloseLocationPanel.click(function() {
            locationscontroller.closeLocationPanel();
        });
        // click on location grid image
        $(document).on('click', '.location-photogrid', function() {

            let locatonId = $(this).attr("data-id");

            locationscontroller.showLocationOnScreen(locatonId);

        });
    }
    setLocations(locations) {
        this.locations = locations;
    }
    getLocation(id) {
        return this.locations[id];
    }
    showLocationOnScreen(id) {

        // subir el panel a la vista
        this.showLocationPanel();

        let location = this.getLocation(id);
        console.log(location);

        // name
        this.locationpanel.title.text(location.nameLocation);

        // description + tags
        let description = location.descriptionLocation;
        let tags = location.tags.split(", ");
        tags.forEach(element => {
            description += " <a href=''>#" + element + "</a>";
        });

        this.locationpanel.description.html(description);

        // socialmedia
        this.setLocationPanelSocialMedia(location.creditsLocation)

        // address
        this.locationpanel.address.text(location.address);

        // googlemaps url
        this.locationpanel.googlemaps.attr("href", location.googlemapsUrlLocation);

        // share
        this.locationpanel.share.attr("data-id", location.idLocation);

        // images
        this.setLocationPanelPhotos(location.photos);

    }
    setLocationPanelSocialMedia(credits) {
        if (credits) {
            credits = credits.split("@");
            let platform = credits[0];
            platform = "./src/img/" + platform + ".svg"
            let account = credits[1];
            let link = (platform == "i") ? "https://instagram.com/" + account : "https://instagram.com/@" + account

            this.locationpanel.socialmedia_link.css("display", "flex");
            this.locationpanel.socialmedia_link.attr("href", link);
            this.locationpanel.socialmedia_platform.attr("src", platform);
            this.locationpanel.socialmedia_account.text(account);
        } else {
            this.locationpanel.socialmedia_link.attr("href", "");
            this.locationpanel.socialmedia_link.css("display", "none");
            this.locationpanel.socialmedia_platform.attr("src", "");
            this.locationpanel.socialmedia_account.text("account");
        }
    }
    setLocationPanelPhotos(photos) {
        photos = photos.split(", ")
        var photos_html = "";
        var single_image_class = (photos.length == 1) ? "single-location-image" : "";
        for (var x = 0; x < photos.length; x++) {
            photos_html += '<img class="location-image ' + single_image_class + '" src="./src/photos/' + photos[x] + '" alt="Foto ' + x + ' del lugar">';
        }
        this.locationpanel.photos.html(photos_html);
    }
    displayLocationPanelPhoto(src) {
        console.log(src);
    }
    showLocationPanel() {
        this.divLocationPanel.attr("class", "show-location-panel")
    }
    closeLocationPanel() {
        this.divLocationPanel.attr("class", "hide-location-panel")
    }
}