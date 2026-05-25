---
author: Anaël BARODINE
title: Annales de contrôle
hide:
  - toc
---

# Annales de contrôle

Ici, vous trouverez les **annales de contrôle de NSI** des années précédentes, ainsi que pour chacune la **correction détaillée**.

| Code | Niveau | Thème<sup>*</sup> | Contenu | Sujet |
|:--|:--|:--|:--|:-:|


<sup>*</sup> Thème dominant, certains exercices peuvent traiter plusieurs thèmes.

<script src="https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js"></script>
<script>
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
    const controles = [
        { id: "26-1NSI-01", niveau: 1, theme: 5, contenu: [
            "Format CSV", "Sélections en tables", "Tri de tables",
            "La fonction `open`", "La fonction `sorted`",
            "Listes en compréhension", "Lambda-expressions"
            ], pdf: [
                { nom: "26-1NSI-01A", url: "https://files.nastioucha.fr/controle/26-1NSI-01A.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-01A-c.pdf" },
                { nom: "26-1NSI-01B", url: "https://files.nastioucha.fr/controle/26-1NSI-01B.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-01B-c.pdf" },
                { nom: "26-1NSI-01C", url: "https://files.nastioucha.fr/controle/26-1NSI-01C.pdf" }
            ]
        },
        { id: "26-1NSI-02", niveau: 1, theme: 6, contenu: [
            "Historique des ordinateurs",
            "Langage machine et langage assembleur", "Commandes Unix"
            ], pdf: [
                { nom: "26-1NSI-02A", url: "https://files.nastioucha.fr/controle/26-1NSI-02A.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-02A-c.pdf" },
                { nom: "26-1NSI-02B", url: "https://files.nastioucha.fr/controle/26-1NSI-02B.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-02B-c.pdf" },
                { nom: "26-1NSI-02C", url: "https://files.nastioucha.fr/controle/26-1NSI-02C.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-02C-c.pdf" },
                { nom: "26-1NSI-02D", url: "https://files.nastioucha.fr/controle/26-1NSI-02D.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-02D-c.pdf" }
            ]
        },
        { id: "26-1NSI-03", niveau: 1, theme: 2, contenu: [
            "Représentation en bit de signe",
            "Représentation en complément à 2",
            "Représentation ASCII;Représentation UTF-8"
            ], pdf: [
                { nom: "26-1NSI-03A", url: "https://files.nastioucha.fr/controle/26-1NSI-03A.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-03A-c.pdf" },
                { nom: "26-1NSI-03B", url: "https://files.nastioucha.fr/controle/26-1NSI-03B.pdf" },
                { nom: "26-1NSI-03C", url: "https://files.nastioucha.fr/controle/26-1NSI-03C.pdf" },
                { nom: "26-1NSI-03D", url: "https://files.nastioucha.fr/controle/26-1NSI-03D.pdf" },
                { nom: "26-1NSI-03E", url: "https://files.nastioucha.fr/controle/26-1NSI-03E.pdf" },
                { nom: "26-1NSI-03F", url: "https://files.nastioucha.fr/controle/26-1NSI-03F.pdf" },
                { nom: "26-1NSI-03G", url: "https://files.nastioucha.fr/controle/26-1NSI-03G.pdf" }
            ]
        },
        { id: "26-1NSI-04", niveau: 1, theme: 2, contenu: [
            "Représentation par virgule fixe",
            "Représentation par virgule flottante (IEEE-754)"
            ], pdf: [
                { nom: "26-1NSI-04A", url: "https://files.nastioucha.fr/controle/26-1NSI-04A.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-04A-c.pdf" },
                { nom: "26-1NSI-04B", url: "https://files.nastioucha.fr/controle/26-1NSI-04B.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-04B-c.pdf" },
                { nom: "26-1NSI-04C", url: "https://files.nastioucha.fr/controle/26-1NSI-04C.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-04C-c.pdf" },
                { nom: "26-1NSI-04D", url: "https://files.nastioucha.fr/controle/26-1NSI-04D.pdf",
                cor_url: "https://files.nastioucha.fr/controle/26-1NSI-04D-c.pdf" }
            ]
        }
    ];
    function format_table() {
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
    window.addEventListener("load", function() { make_table_challenges(); format_table(); });
</script>
<style>
    table thead {
        text-align: center;
    }
    table td:not(:first-child) {
        border-left: .05rem solid var(--md-typeset-table-color);
    }
    table td, table th {
        vertical-align: middle !important;
    }
    table td:first-child {
        white-space: nowrap;
    }
    table td:last-child ul {
        margin: 0 !important;
        list-style-type: none;
    }
    table td:last-child li {
        margin: 0 !important;
    }
</style>