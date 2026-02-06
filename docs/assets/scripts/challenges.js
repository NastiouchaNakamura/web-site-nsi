//const API_URL = "https://api.nastioucha.fr/nsi/";
const API_URL = "http://localhost:8001/nsi/";

function check_flag_anon(challenge_id) {
    flag = document.getElementById("flag_anon").value;
    if (flag === "") {
        alert("Aucune réponse n'est saisie.");
    } else if (!/^[\x20-\x7F]*$/.test(flag)) {
        alert("La réponse saisie contient des caractères invalides.");
    } else {
        icon = document.getElementById("icon_anon");
        icon.className = "info-input-icon icon-loading";

        fetch(`${API_URL}challenge/?id=${challenge_id}&flag=${flag}`, {
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
                    break;
                case 429:
                    icon.className = "info-input-icon icon-timeout";
                    break;
                default:
                    icon.className = "info-input-icon icon-error";
                    break;
            }

            document.getElementById("submit_anon").disabled = true;
            document.getElementById("submit_anon").value = `Patienter 60s avant de vérifier une autre réponse`;
            let wait_time = 59;
            let countdown = setInterval(() => {
                if (wait_time > 0) {
                    document.getElementById("submit_anon").value = `Patienter ${wait_time}s avant de vérifier une autre réponse`;
                } else {
                    clearInterval(countdown);
                    document.getElementById("submit_anon").disabled = false;
                    document.getElementById("submit_anon").value = "Vérifier";
                }
                wait_time--;
            }, 1_000);
        }).catch(() => icon.className = "info-input-icon icon-error");
    }
}

function check_flag(challenge_id) {
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

        fetch(`${API_URL}challenge/?id=${challenge_id}&flag=${flag}`, {
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
            
            document.getElementById("submit").disabled = true;
            document.getElementById("submit").value = `Patienter 60s avant de vérifier une autre réponse`;
            let wait_time = 59;
            let countdown = setInterval(() => {
                if (wait_time > 0) {
                    document.getElementById("submit").value = `Patienter ${wait_time}s avant de vérifier une autre réponse`;
                } else {
                    clearInterval(countdown);
                    document.getElementById("submit").disabled = false;
                    document.getElementById("submit").value = "Vérifier";
                }
                wait_time--;
            }, 1_000);
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

function star_chars(amount) {
    if (amount == 1) {
        return "⁎";
    } else if (amount == 2) {
        return "⁑";
    } else if (amount == 3) {
        return "⁂";
    } else {
        return "⁑".repeat(Math.floor(amount / 2)) + "⁎".repeat(amount % 2);
    }
}

function make_table_details() {
    function construct_html(table, challenges, profiles) {
        profiles.sort((profile1, profile2) => { return profile1[1] < profile2[1]; })

        let thead = table.children.item(0);
        let tbody = table.children.item(1);

        thead.innerHTML = "";
        tbody.innerHTML = "";

        let header = document.createElement("tr");
        let username_head = document.createElement("th");
        username_head.innerText = "Profils";
        header.appendChild(username_head);
        let total_head = document.createElement("th");
        total_head.innerText = "Total d'étoiles";
        total_head.style.textAlign = "center";
        total_head.style.borderRight = ".05rem solid var(--md-typeset-table-color)";
        header.appendChild(total_head);
        thead.appendChild(header);

        profiles.forEach(([username, total]) => {
            let line = document.createElement("tr");
            let username_cell = document.createElement("td");
            username_cell.innerText = username;
            line.appendChild(username_cell);
            let total_cell = document.createElement("td");
            total_cell.innerText = total;
            total_cell.style.textAlign = "center";
            total_cell.style.borderRight = ".05rem solid var(--md-typeset-table-color)";
            line.appendChild(total_cell);
            tbody.appendChild(line);
        });

        function is_event(challenge) {
            return Object.values(challenge.successes)[0][0] == "SPECIAL";
        }

        Object.keys(challenges)
            .toSorted((id_1, id_2) => {
                if (!is_event(challenges[id_1]) && is_event(challenges[id_2]))
                    return -1;
                else if (is_event(challenges[id_1]) && !is_event(challenges[id_2]))
                    return 1
                else
                    return id_1 > id_2
            }).forEach(challenge_id => {
                let header_cell = document.createElement("th");
                header_cell.innerText = challenges[challenge_id].challenge_title;
                header_cell.style.textAlign = "center";
                header.appendChild(header_cell);

                for (let i = 0; i < profiles.length; i++) {
                    let cell = document.createElement("td");
                    if (profiles[i][0] in challenges[challenge_id].successes) {
                        let specialty = document.createElement("span");
                        if (challenges[challenge_id].successes[profiles[i][0]][0] == "DIAMOND") {
                            specialty.innerText = "B";
                        } else if (challenges[challenge_id].successes[profiles[i][0]][0] == "GOLD") {
                            specialty.innerText = "C";
                        } else if (challenges[challenge_id].successes[profiles[i][0]][0] == "SPECIAL") {
                            specialty.innerText = "A";
                        } else {
                            specialty.innerText = "D";
                        }
                        specialty.style.display = "none";
                        cell.appendChild(specialty);

                        let span = document.createElement("span");
                        if (challenges[challenge_id].successes[profiles[i][0]][0] == "DIAMOND") {
                            span.innerText = star_chars(challenges[challenge_id].successes[profiles[i][0]][1]);
                            span.style.color = "#2db5ac";
                            span.style.textShadow = "#2db5ac 0 0 10px, #2db5ac 0 0 10px, #2db5ac 0 0 10px, #2db5ac 0 0 10px";
                        } else if (challenges[challenge_id].successes[profiles[i][0]][0] == "GOLD") {
                            span.innerText = star_chars(challenges[challenge_id].successes[profiles[i][0]][1]);
                            span.style.color = "#c69e19";
                            span.style.textShadow = "#c69e19 0 0 10px, #c69e19 0 0 10px, #c69e19 0 0 10px, #c69e19 0 0 10px";
                        } else if (challenges[challenge_id].successes[profiles[i][0]][0] == "SPECIAL") {
                            span.innerText = star_chars(challenges[challenge_id].successes[profiles[i][0]][1]);
                            span.style.color = "#d04646";
                            span.style.textShadow = "#d04646 0 0 10px, #d04646 0 0 10px, #d04646 0 0 10px, #d04646 0 0 10px";
                        } else {
                            span.innerText = star_chars(challenges[challenge_id].successes[profiles[i][0]][1]);
                        }
                        cell.appendChild(span);

                        cell.style.textAlign = "center";

                    } else {
                        let specialty = document.createElement("span");
                        specialty.innerText = "E";
                        specialty.style.display = "none";
                        cell.appendChild(specialty);
                    }
                    tbody.children.item(i).appendChild(cell);
                }
        });

        new Tablesort(table);
    }

    fetch(`${API_URL}leaderboard/?limit=50`, {
        method: "GET",
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.status == 200) {
            response.json().then(json => {
                let challenges = {};
                let profiles = [];

                json.data.values.forEach(score => {
                    if (!(score.username in profiles)) {
                        profiles.push([score.username, score.total_stars]);
                    }

                    score.stars.values.forEach(star => {
                        if (!(star.challenge_id in challenges)) {
                            challenges[star.challenge_id] = {
                                challenge_title: star.challenge_title,
                                successes: {}
                            };
                        }

                        challenges[star.challenge_id].successes[score.username] = [star.specialty, star.amount];
                    });
                });

                let table_detail = document.getElementById("table_details_icon") // icon
                        .parentElement // td
                        .parentElement // tr
                        .parentElement // tbody
                        .parentElement; // table

                construct_html(table_detail, challenges, profiles);
            });
        } else {
            document.getElementById("table_details_icon").className = "icon-error";
        }
    }).catch(() => document.getElementById("table_details_icon").className = "icon-error");
}

function make_table_challenges() {
    let table_challenges = document.getElementsByTagName("table").item(0);
    new Tablesort(table_challenges);

    let star_spans = document.getElementsByClassName("stars");
    for (let i = 0; i < star_spans.length; i++)
        star_spans[i].innerText = star_chars(parseInt(star_spans[i].innerText));
}
