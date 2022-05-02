class LoginController {



    constructor() {
        this.button_register = $("#register_button");
        this.input_username = $("#username");
        this.input_password = $("#password");
        this.input_password1 = $("#password1");
        this.error = $(".error");

        this.load();
    }
    load() {
        this.button_register.click(this.checkLogin.bind(this));
    }
    badlogin() {
        logincontroller.error.text("Usuario y contraseña no coinciden.");
        logincontroller.button_register.text("Log in");
    }
    checkLogin() {

        // check comillillas
        let user = this.input_username.val().replaceAll("'", "").replaceAll('"', "");
        this.input_username.val(user);

        let pass1 = this.input_password.val();
        let pass2 = this.input_password1.val();

        if (user.length >= 6 && pass1.length >= 6 && user.length < 46 && pass1.length < 46) {
            if (/^([a-zA-Z0-9\-\_\?\¿\¡\!\.\(\)\<\>\=\;\:]+)$/.test(user)) {
                if (/^([a-zA-Z0-9\-\_\?\¿\¡\!\.\(\)\<\>\=\;\:]+)$/.test(pass1)) {
                    if (pass1 == pass2) {

                        error.text("");
                        register_button.text("Registrando...")

                        $.ajax({
                            type: "POST",
                            url: "./api/register",
                            data: {
                                "username": user,
                                "password": pass1
                            },
                            success: function(res) {

                                if (res.taken) {
                                    error.text("El usuario ya existeee");
                                    register_button.text("Register")
                                } else if (res.error) {
                                    error.text("Error en la base de datos: " + res);
                                    register_button.text("Register")
                                } else {

                                    localStorage.setItem("userID", res.split("'")[0]);
                                    localStorage.setItem("username", res.split("'")[1]);
                                    window.location = "./profile.html";

                                }

                            }
                        });
                    } else {
                        error.text("Contraseñas no coinciden");
                    }
                } else {
                    error.text("Contraseña con carácteres inválidos");
                }
            } else {
                error.text("Nombre con carácteres inválidos");
            }
        } else {
            error.text("Entre 6 y 45 carácteres");
        }


    }

}

let logincontroller = new LoginController();