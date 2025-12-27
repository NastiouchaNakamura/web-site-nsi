const API_URL = "https://api.nastioucha.fr/nsi/challenge";
//const API_URL = "http://localhost:8001/nsi/challenge";
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

        fetch(`${API_URL}?id=${CHALLENGE_ID}&flag=${flag}`, {
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

        fetch(`${API_URL}?id=${CHALLENGE_ID}&flag=${flag}`, {
            method: "POST",
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

function success(message) {
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