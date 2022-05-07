class LoginController {

    constructor() {
        this.button_login = $("#login_button");
        this.input_username = $("#username");
        this.input_password = $("#password");
        this.error = $(".error");

        this.load();
    }
    load() {
        this.button_login.click(this.checkLogin.bind(this));
    }
    badlogin() {
        logincontroller.error.text("Usuario y contraseña no coinciden.");
        logincontroller.button_login.text("Log in");
    }
    checkLogin() {

        // check comillillas
        var user = this.input_username.val().replaceAll("'", "").replaceAll('"', "");
        var pass = this.input_password.val().replaceAll("'", "").replaceAll('"', "");
        this.input_username.val(user);
        this.input_password.val(pass);

        if (user.length >= 6 && pass.length >= 6) {

            this.button_login.text("...");

            $.ajax({
                type: "POST",
                url: "./api/login",
                data: {
                    "username": user,
                    "password": pass
                },
                success: function(res) {

                    console.log(res);
                    res = JSON.parse(res)
                    if (res.error) {
                        logincontroller.badlogin();
                    } else {
                        if (res.id && res.username) {
                            localStorage.setItem("idUser", res.id);
                            localStorage.setItem("nameUser", res.username);
                            window.location = "./profile";
                        } else {
                            logincontroller.badlogin();
                        }

                    }

                }
            });
        } else {
            logincontroller.badlogin();
        }
    }

}

let logincontroller = new LoginController();