const API_URL = "https://api.nastioucha.fr/nsi/";
//const API_URL = "http://localhost:8001/nsi/";

// Sélection de la table de détail.
let table_detail_icon = document.getElementById("table_details_icon");
let table_detail = document.getElementById("table_details_icon") // icon
                    .parentElement // td
                    .parentElement // tr
                    .parentElement // tbody
                    .parentElement; // table

// Fonction de création de table.
function make_table_details(table, challenges, profiles) {
    let thead = table.children.item(0);
    let tbody = table.children.item(1);

    thead.innerHTML = "";
    tbody.innerHTML = "";

    let corner = document.createElement("th");
    let header = document.createElement("tr");
    corner.innerText = "Profils";
    header.appendChild(corner);
    thead.appendChild(header);

    profiles.forEach(username => {
        let line = document.createElement("tr");
        let left_cell = document.createElement("td");
        left_cell.innerText = username;
        line.appendChild(left_cell);
        tbody.appendChild(line);
    });

    Object.keys(challenges).toSorted((a, b) => { if (challenges[a].amount == 0) return b; if (challenges[b].amount == 0) return a; return a > b }).forEach(challenge_id => {
        let header_cell = document.createElement("th");
        header_cell.innerText = (challenges[challenge_id].amount != 0 ? (star_chars(challenges[challenge_id].amount) + " ") : "") + challenges[challenge_id].challenge_title;
        header_cell.style.textAlign = "center";
        header.appendChild(header_cell);

        for (let i = 0; i < profiles.length; i++) {
            let cell = document.createElement("td");
            if (profiles[i] in challenges[challenge_id].successes) {
                let span = document.createElement("span");
                if (challenges[challenge_id].successes[profiles[i]][0] == "DIAMOND") {
                    span.innerText = star_chars(challenges[challenge_id].successes[profiles[i]][1]);
                    span.style.color = "#2db5ac";
                    span.style.textShadow = "#2db5ac 0 0 10px, #2db5ac 0 0 10px, #2db5ac 0 0 10px, #2db5ac 0 0 10px";
                } else if (challenges[challenge_id].successes[profiles[i]][0] == "GOLD") {
                    span.innerText = star_chars(challenges[challenge_id].successes[profiles[i]][1]);
                    span.style.color = "#c69e19";
                    span.style.textShadow = "#c69e19 0 0 10px, #c69e19 0 0 10px, #c69e19 0 0 10px, #c69e19 0 0 10px";
                } else if (challenges[challenge_id].successes[profiles[i]][0] == "SPECIAL") {
                    span.innerText = star_chars(challenges[challenge_id].successes[profiles[i]][1]);
                    span.style.color = "#d04646";
                    span.style.textShadow = "#d04646 0 0 10px, #d04646 0 0 10px, #d04646 0 0 10px, #d04646 0 0 10px";
                } else {
                    span.innerText = star_chars(challenges[challenge_id].successes[profiles[i]][1]);
                }
                cell.appendChild(span);
                cell.style.textAlign = "center";
            }
            tbody.children.item(i).appendChild(cell);
        }
    });

    new Tablesort(table);
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

// Récupération du leaderboard.
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
                    profiles.push(score.username);
                }

                score.stars.values.forEach(star => {
                    if (!(star.challenge_id in challenges)) {
                        challenges[star.challenge_id] = {
                            challenge_title: star.challenge_title,
                            amount: star.specialty != "SPECIAL" ? star.amount : 0,
                            successes: {}
                        };
                    }

                    challenges[star.challenge_id].successes[score.username] = [star.specialty, star.amount];
                });
            });
            
            make_table_details(table_detail, challenges, profiles);
        });
    } else {
        table_detail_icon.className = "icon-error";
    }
}).catch(() => table_detail_icon.className = "icon-error");


