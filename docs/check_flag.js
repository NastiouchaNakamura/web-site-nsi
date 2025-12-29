const API_URL = "https://api.nastioucha.fr/nsi/challenge/";
//const API_URL = "http://localhost:8001/nsi/";
const CHALLENGE_ID = window.location.href.split("/").splice(-3, 1)[0] ?? null;

function check_flag_anon() {
    flag = document.getElementById("flag_anon").value;
    if (flag === "") {
        alert("Aucune réponse n'est saisie.");
    } else if (!/^[\x20-\x7F]*$/.test(flag)) {
        alert("La réponse saisie contient des caractères invalides.");
    } else {
        icon = document.getElementById("icon_anon");
        icon.className = "info-input-icon icon-loading";

        fetch(`${API_URL}challenge/?id=${CHALLENGE_ID}&flag=${flag}`, {
            method: "GET",
            headers: { "Accept": "application/json" }
        }).then(response => {
            switch (response.status) {
                case 200:
                    response.json().then(json => {
                        if (json.data) {
                            icon.className = "info-input-icon icon-success";
                            success("Bonne réponse !");
                        } else {
                            icon.className = "info-input-icon icon-failure";
                        }
                    });

                    document.getElementById("submit_anon").disabled = true;
                    setTimeout(() => document.getElementById("submit_anon").disabled = false, 60_000);
                    break;
                case 429:
                    icon.className = "info-input-icon icon-timeout";
                    break;
                default:
                    icon.className = "info-input-icon icon-error";
                    break;
            }
        }).catch(() => icon.className = "info-input-icon icon-error");
    }
}

function check_flag() {
    flag = document.getElementById("flag").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if (flag === "") {
        alert("Aucune réponse n'est saisie.");
    } else if (!/^[\x20-\x7F]*$/.test(flag)) {
        alert("La réponse saisie contient des caractères invalides.");
    } else if (username === "") {
        alert("Veuillez saisir un identifiant.");
    } else if (password === "") {
        alert("Veuillez saisir un mot de passe.");
    } else {
        icon_flag = document.getElementById("icon_flag");
        icon_credentials = document.getElementById("icon_credentials");
        icon_flag.className = "info-input-icon icon-loading";
        icon_credentials.className = "info-input-icon icon-loading";

        fetch(`${API_URL}challenge/?id=${CHALLENGE_ID}&flag=${flag}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Basic ${btoa(username + ":" + password)}`
            }
        }).then(response => {
            switch (response.status) {
                case 200:
                    icon_credentials.className = "info-input-icon icon-success";

                    response.json().then(json => {
                        if (json.data) {
                            icon_flag.className = "info-input-icon icon-success";
                            success("Bonne réponse !");
                        } else {
                            icon_flag.className = "info-input-icon icon-failure";
                        }
                    });

                    document.getElementById("submit").disabled = true;
                    setTimeout(() => document.getElementById("submit").disabled = false, 60_000);
                    break;
                case 401:
                    icon_credentials.className = "info-input-icon icon-failure";
                    icon_flag.className = "info-input-icon icon-waiting";
                    break;
                case 429:
                    icon_credentials.className = "info-input-icon icon-success";
                    icon_flag.className = "info-input-icon icon-timeout";
                    break;
                default:
                    icon_credentials.className = "info-input-icon icon-error";
                    icon_flag.className = "info-input-icon icon-error";
                    break;
            }
        }).catch(() => {
            icon_flag.className = "info-input-icon icon-error";
            icon_credentials.className = "info-input-icon icon-error";
        });
    }
}

function post_profile() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    password_repeat = document.getElementById("password_repeat").value;
    prenom = document.getElementById("prenom").value;
    nom = document.getElementById("nom").value;
    classe = document.getElementById("classe").value;

    if (username === "") {
        alert("Veuillez saisir un identifiant.");
    } else if (password === "") {
        alert("Veuillez saisir un mot de passe.");
    } else if (password_repeat === "") {
        alert("Veuillez répéter le mot de passe.");
    } else if (password_repeat !== password) {
        alert("Le mot de passe répété ne correspond pas au mot de passe.");
    } else if (prenom === "") {
        alert("Veuillez saisir votre prénom.");
    } else if (nom === "") {
        alert("Veuillez saisir votre nom.");
    } else if (classe === "") {
        alert("Veuillez saisir votre classe.");
    } else {
        icon_username = document.getElementById("icon_username");
        icon_username.className = "info-input-icon icon-loading";
        icon_password = document.getElementById("icon_password");
        icon_password.className = "info-input-icon icon-loading";
        icon_password_repeat = document.getElementById("icon_password_repeat");
        icon_password_repeat.className = "info-input-icon icon-loading";
        icon_infos = document.getElementById("icon_infos");
        icon_infos.className = "info-input-icon icon-loading";

        fetch(`${API_URL}profile/`, {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
                first_name: prenom,
                last_name: nom,
                class: classe
            })
        }).then(response => {
            switch (response.status) {
                case 201:
                    icon_username.className = "info-input-icon icon-success";
                    icon_password.className = "info-input-icon icon-success";
                    icon_password_repeat.className = "info-input-icon icon-success";
                    icon_infos.className = "info-input-icon icon-success";

                    document.getElementById("post_submit").disabled = true;
                    document.getElementById("post_submit").value = "Le profil a bien été créé !";
                    success();
                    break;
                case 409:
                    icon_username.className = "info-input-icon icon-failure";
                    icon_password.className = "info-input-icon icon-waiting";
                    icon_password_repeat.className = "info-input-icon icon-waiting";
                    icon_infos.className = "info-input-icon icon-waiting";

                    alert(`Le pseudo ${username} est déjà utilisé.`)
                    break;
                default:
                    icon_username.className = "info-input-icon icon-error";
                    icon_password.className = "info-input-icon icon-error";
                    icon_password_repeat.className = "info-input-icon icon-error";
                    icon_infos.className = "info-input-icon icon-error";

                    alert("Une erreur s'est produite, le profil n'a pas pu être créé.");
                    break;
            }
        }).catch(() => {
            icon_username.className = "info-input-icon icon-error";
            icon_password.className = "info-input-icon icon-error";
            icon_password_repeat.className = "info-input-icon icon-error";
            icon_infos.className = "info-input-icon icon-error";
            alert("Une erreur s'est produite, le profil n'a pas pu être créé.");
        });
    }
}

function patch_profile() {
    username = document.getElementById("username_patch").value;
    old_password = document.getElementById("old_password").value;
    new_password = document.getElementById("new_password").value;
    new_password_repeat = document.getElementById("new_password_repeat").value;

    if (username === "") {
        alert("Veuillez saisir votre identifiant.");
    } else if (old_password === "") {
        alert("Veuillez saisir votre ancien mot de passe.");
    } else if (new_password === "") {
        alert("Veuillez saisir un nouveau mot de passe.");
    } else if (new_password_repeat === "") {
        alert("Veuillez répéter le mot de passe.");
    } else if (new_password_repeat !== new_password) {
        alert("Le mot de passe répété ne correspond pas au nouveau mot de passe.");
    } else {
        icon_credentials = document.getElementById("icon_credentials");
        icon_credentials.className = "info-input-icon icon-loading";
        icon_new_password = document.getElementById("icon_new_password");
        icon_new_password.className = "info-input-icon icon-loading";
        icon_new_password_repeat = document.getElementById("icon_new_password_repeat");
        icon_new_password_repeat.className = "info-input-icon icon-loading";

        fetch(`${API_URL}profile/`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Authorization": `Basic ${btoa(username + ":" + old_password)}`
            },
            body: JSON.stringify({
                password: new_password
            })
        }).then(response => {
            switch (response.status) {
                case 200:
                    icon_credentials.className = "info-input-icon icon-success";
                    icon_new_password.className = "info-input-icon icon-success";
                    icon_new_password_repeat.className = "info-input-icon icon-success";

                    document.getElementById("patch_submit").disabled = true;
                    document.getElementById("patch_submit").value = "Le mot de passe a bien été modifié !";
                    success();
                    break;
                case 401:
                    icon_credentials.className = "info-input-icon icon-failure";
                    icon_new_password.className = "info-input-icon icon-waiting";
                    icon_new_password_repeat.className = "info-input-icon icon-waiting";

                    break;
                default:
                    icon_credentials.className = "info-input-icon icon-error";
                    icon_new_password.className = "info-input-icon icon-error";
                    icon_new_password_repeat.className = "info-input-icon icon-error";

                    alert("Une erreur s'est produite, le mot de passe n'a pas pu être modifié.");
                    break;
            }
        }).catch(() => {
            icon_credentials.className = "info-input-icon icon-error";
            icon_new_password.className = "info-input-icon icon-error";
            icon_new_password_repeat.className = "info-input-icon icon-error";
            alert("Une erreur s'est produite, le mot de passe n'a pas pu être modifié.");
        });
    }
}

function success() {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}
