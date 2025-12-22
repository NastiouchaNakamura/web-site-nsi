const API_URL = "https://api.nationalize.io/"; // TEST, TODO changer


function check_flag_anon() {
    flag = document.getElementById("flag_anon").value;
    if (flag === "") {
        alert("Aucune réponse n'est saisie.");
    } else if (!/^[\x20-\x7F]*$/.test(flag)) {
        alert("La réponse saisie contient des caractères invalides.");
    } else {
        try {
            fetch(API_URL + "?name=" + flag).then(response => {
                if (response.status !== 200) {
                    throw Error(`API error: [${response.status}${response.statusText}]`);
                } else {
                    response.json().then(json => {
                        if (Math.random() < 0.5) {
                            success("Bonne réponse !");
                        } else {
                            failure("Mauvaise réponse...");
                        }
                    });
                }
            });
        } catch (error) {
            alert(error);
        }
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
        alert("Veuillez saisir un pseudo.");
    } else if (password === "") {
        alert("Veuillez saisir un mot de passe.");
    } else {
        try {
            fetch(API_URL + "?name=" + flag, {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, password: password })
            }).then(response => {
                if (response.status !== 200) {
                    throw Error(`API error: [${response.status}${response.statusText}]`);
                } else {
                    response.json().then(json => {
                        if (Math.random() < 0.5) {
                            if (Math.random() < 0.5) {
                                success("Bonne réponse ! Mais le challenge a déjà été résolu le 12/12/25 et ne rapport donc pas d'étoiles supplémentaires");
                            } else {
                                success("Bonne réponse ! Ce challenge rapporte 3 étoiles ! Total des étoiles : ");
                            }
                        } else {
                            failure("Mauvaise réponse...");
                        }
                    });
                }
            });
        } catch (error) {
            alert(error);
        }
    }
}

function failure(message) {
    message_elem = document.getElementById("response_info_anon");
    message_elem.style.removeProperty("display");
    message_elem.style.borderColor = "darkred";
    message_elem.style.backgroundColor = "orangered";
    message_elem.innerText = message;
}

function success(message) {
    message_elem = document.getElementById("response_info_anon");
    message_elem.style.removeProperty("display");
    message_elem.style.borderColor = "lime";
    message_elem.style.backgroundColor = "forestgreen";
    message_elem.innerText = message;

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