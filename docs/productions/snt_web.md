---
author: Anaël BARODINE
title: Sites Web (SNT)
hide:
  - toc
---

# Sites Web (SNT)

Ici, vous trouverez quelques **sites Web**, réalisés par les élèves de
2<sup>nde</sup>, en cours de **SNT**.

| Année | Thème | Auteur(e)s | Lien |
|:--|:--|:--|:-:|
|<div id="table_details_icon" class="icon-loading icon-color-gray"></div>| | | |

<script src="https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js"></script>
<script>
    window.addEventListener("load", function() { make_table_challenges(); fetch_sites(); });
    function fetch_sites() {
        fetch(`${API_URL}website/`, {
            method: "GET",
            headers: { "Accept": "application/json" }
        }).then(response => {
            if (response.status == 200) {
                response.json().then(json => {
                    websites = [];
                    json.data.values.forEach(website => {
                        websites.push({
                            annee: website.year,
                            titre: website.title,
                            auteurs: website.authors,
                            dossier: website.directory
                        });
                    });
                    format_website_table(websites);
                });
            } else {
                document.getElementById("table_details_icon").className = "icon-error icon-color-orange";
            }
        }).catch(() => document.getElementById("table_details_icon").className = "icon-error icon-color-orange");
    }
    function format_website_table(websites) {
        console.log(websites);
        let table_element = document.getElementsByTagName("table")[0];
        let tbody_element = table_element.children[1];
        tbody_element.innerHTML = "";
        for (let i = 0; i < websites.length; i++) {
            let tr_element = document.createElement("tr");
            tbody_element.appendChild(tr_element);
            let annee_td_element = document.createElement("td");
            annee_td_element.innerText = websites[i].annee;
            tr_element.appendChild(annee_td_element);
            let titre_td_element = document.createElement("td");
            titre_td_element.innerText = websites[i].titre;
            tr_element.appendChild(titre_td_element);
            let auteurs_td_element = document.createElement("td");
            auteurs_td_element.innerText = websites[i].auteurs;
            tr_element.appendChild(auteurs_td_element);
            let dossier_td_element = document.createElement("td");
            dossier_td_element.style = "text-align: center;";
            dossier_td_element.innerHTML = `<a href="https://snt.nastioucha.fr/sites/${websites[i].dossier}/"><div class="icon icon-html icon-color-orange"></div></a>`;
            tr_element.appendChild(dossier_td_element);
        }
    }
</script>