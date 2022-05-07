class ProfileController {
    constructor(htmlElementInject, limit) {
        this.htmlElementInject = htmlElementInject;
        this.limit = limit;
        this.div_username = $("#username");
        this.username;
        this.id;
        this.load();
    }
    load() {

        this.checkLogin();
        this.loadProfileLocations();

    }
    checkLogin() {

        this.username = localStorage.getItem("nameUser");
        this.id = localStorage.getItem("idUser");

        if (!this.username) {
            window.location = rootpath + "login";
        } else {
            this.div_username.text(this.username);
        }

    }
    loadProfileLocations() {
        apicontroller.getProfileLocations(this.buildProfileLocatons.bind(this), this.id)
    }
    buildProfileLocatons(locations) {

        locations = JSON.parse(locations);

        // inject on grid
        photocontroller.injectPhotosOnPhotogridElement(locations, this.htmlElementInject);

        // append to locations
        locationscontroller.pushLocations(locations);

    }
}