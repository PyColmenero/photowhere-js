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

        this.username = localStorage.getItem("username");
        this.id = localStorage.getItem("userID");

        if (!this.username) {
            window.location = "/photowhere/login";
        } else {
            this.div_username.text(this.username);
        }

    }
    loadProfileLocations() {
        apilocationscontroller.getProfileLocations(this.buildProfileLocatons.bind(this), this.id)
    }
    buildProfileLocatons(locations) {

        locations = JSON.parse(locations);

        // inject on grid
        photocontroller.injectPhotosGridOnElement(locations, this.htmlElementInject);

        // append to locations
        locationscontroller.pushLocations(locations);

    }
}