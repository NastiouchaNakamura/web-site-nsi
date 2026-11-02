const themes = {
    1: "Th.1 - Programmation",
    2: "Th.2 - Représentation des données",
    3: "Th.3 - Conception et analyse d'algorithmes",
    4: "Th.4 - Données en tables et bases de données",
    5: "Th.5 - Architecture des ordinateurs",
    6: "Th.6 - Réseaux",
    7: "Th.7 - Web",
    8: "Th.8 - Structures de données",
    9: "Th.9 - Sécurité des communications"
};

function fetch_controles() {
    fetch(`${API_URL}exam/`, {
        method: "GET",
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.status == 200) {
            response.json().then(json => {
                let controles = [];

                json.data.values.forEach(exam => {
                    controles.push({
                        id: exam.id,
                        niveau: {"T": 0, "1": 1, "2": 2}[exam.id[0]],
                        theme: exam.theme,
                        contenu: exam.skills.values,
                        pdf: exam.subjects.values.map(
                            s => s.has_correction ?
                                { nom: s.id, url: `${API_URL}exam/?id=${s.id}`, cor_url: `${API_URL}exam/?id=${s.id}-c` } :
                                { nom: s.id, url: `${API_URL}exam/?id=${s.id}` }
                        )
                    });
                });

                format_table(controles);
            });
        } else {
            document.getElementById("table_details_icon").className = "icon-error icon-color-orange";
        }
    }).catch(() => document.getElementById("table_details_icon").className = "icon-error icon-color-orange");
}

function format_table(controles) {
    let table_element = document.getElementsByTagName("table")[0];
    let tbody_element = table_element.children[1];
    tbody_element.innerHTML = "";
    for (let i = 0; i < controles.length; i++) {
        let tr_element = document.createElement("tr");
        tbody_element.appendChild(tr_element);
        let id_td_element = document.createElement("td");
        id_td_element.innerText = controles[i].id;
        tr_element.appendChild(id_td_element);
        let niveau_td_element = document.createElement("td");
        if (controles[i].niveau == 2) {
            niveau_td_element.innerHTML = "2<sup>nde</sup>";
        } else if (controles[i].niveau == 1) {
            niveau_td_element.innerHTML = "1<sup>ère</sup>";
        } else {
            niveau_td_element.innerHTML = "T<sup>ale</sup>";
        }
        tr_element.appendChild(niveau_td_element);
        let theme_td_element = document.createElement("td");
        theme_td_element.innerText = themes[controles[i].theme];
        tr_element.appendChild(theme_td_element);
        let contenu_td_element = document.createElement("td");
        let contenu_ul_element = document.createElement("ul");
        for (let j = 0; j < controles[i].contenu.length; j++) {
            let item_li_element = document.createElement("li");
            item_li_element.innerText = controles[i].contenu[j];
            contenu_ul_element.appendChild(item_li_element);
        }
        contenu_td_element.appendChild(contenu_ul_element);
        tr_element.appendChild(contenu_td_element);
        let sujet_td_element = document.createElement("td");
        let sujet_ul_element = document.createElement("ul");
        for (let j = 0; j < controles[i].pdf.length; j++) {
            let item_li_element = document.createElement("li");
            item_li_element.innerHTML = `<a href="${controles[i].pdf[j].url}"><div class="icon icon-pdf icon-color-red"></div> ${controles[i].pdf[j].nom}</a>`;
            if (controles[i].pdf[j].hasOwnProperty("cor_url")) {
                item_li_element.innerHTML += ` (<a href="${controles[i].pdf[j].cor_url}">Correction</a>)`;
            }
            sujet_ul_element.appendChild(item_li_element);
        }
        sujet_td_element.appendChild(sujet_ul_element);
        tr_element.appendChild(sujet_td_element);
    }
}
