class SignupController {

    constructor() {
        this.button_register = $("#register_button");
        this.input_username = $("#username");
        this.input_password = $("#password");
        this.input_password1 = $("#password1");
        this.label_error = $(".error");

        this.load();
    }
    load() {
        this.button_register.click(this.checkSignup.bind(this));
    }
    badSignup(text) {
        signupcontroller.label_error.text(text);
        signupcontroller.button_register.text("Register");
    }
    checkSignup() {

        // check comillillas
        let username = this.input_username.val().replaceAll("'", "").replaceAll('"', "");
        this.input_username.val(username);

        let password1 = this.input_password.val();
        let password2 = this.input_password1.val();

        if (username.length >= 6 && password1.length >= 6 && username.length < 46 && password1.length < 46) {
            if (/^([a-zA-Z0-9\-\_\?\¿\¡\!\.\(\)\<\>\=\;\:]+)$/.test(username)) {
                if (/^([a-zA-Z0-9\-\_\?\¿\¡\!\.\(\)\<\>\=\;\:]+)$/.test(password1)) {
                    if (password1 === password2) {

                        this.label_error.text("");
                        this.button_register.text("Registering...")

                        $.ajax({
                            type: "POST",
                            url: "./api/register",
                            data: {
                                "username": username,
                                "password": password1,
                                "password2": password2
                            },
                            success: function(res) {

                                try {

                                    res = JSON.parse(res);

                                    if (res.taken) {

                                        signupcontroller.badSignup("El usuario ya existe.");

                                    } else if (res.error) {

                                        signupcontroller.badSignup("Error en la base de datos: " + res.error);

                                    } else if (res.username && res.id) {

                                        localStorage.setItem("nameUser", res.username);
                                        localStorage.setItem("idUser", res.id);
                                        window.location = "./profile";

                                    } else {

                                        signupcontroller.badSignup("Fatal error.");

                                    }

                                } catch {

                                    console.log(res);
                                    signupcontroller.badSignup("Fatal error.");

                                }


                            }
                        });
                    } else {
                        this.label_error.text("Contraseñas no coinciden");
                    }
                } else {
                    this.label_error.text("Contraseña con carácteres inválidos");
                }
            } else {
                this.label_error.text("Nombre con carácteres inválidos");
            }
        } else {
            this.label_error.text("Nombre y contraseña entre 6 y 45 carácteres");
        }


    }

}

let signupcontroller = new SignupController();