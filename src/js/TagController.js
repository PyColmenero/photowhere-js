class TagController {
    constructor(htmlElementInject, limit) {
        this.tag;
        this.select_tag_filter = $("#tag_filter");
        this.htmlElementInject = htmlElementInject;
        this.limit = limit;
        this.load();
    }
    load() {

        let url = location.pathname;
        url = url.split("/")
        this.tag = url[url.length - 1];
        this.tag = decodeURIComponent(this.tag);
        this.select_tag_filter.val(this.tag);

        apicontroller.getTagLocations(this.loadTagLocations.bind(this), this.tag, this.limit);

        this.select_tag_filter.change(function() {

            let newtag = $(this).val();
            let newurl = rootpath + "tag/" + newtag;
            // change url
            location.href = newurl;

        });

    }
    loadTagLocations(locations) {

        locations = JSON.parse(locations);

        // inject on grid
        photocontroller.injectPhotosOnPhotogridElement(locations, this.htmlElementInject);

        // append to locations
        locationscontroller.pushLocations(locations);

    }

}