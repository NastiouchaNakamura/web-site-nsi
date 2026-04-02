---
author: Anaël BARODINE
title: Annales de bac
hide:
  - toc
---

# Annales de bac

Ici, votre cher prof rassemble des **annales de baccalauréat de NSI** en version **remise en forme** (correction des coquilles et mise en gras), ainsi que, pour la plupart, une **proposition de correction**.

Ces **propositions de corrections** ne sont que des **propositions** à la seule appréciation du prof.

Ces annales sont proposées **en isolant les exercices** afin de pouvoir s'entraîner sur **un seul thème** précis.

| Code | Thème<sup>*</sup> | Titre | Contenu | Sujet |
|:-:|:-:|:-:|:-:|:-:|
|  |  |  |  |  |

<sup>*</sup> Thème dominant, certains exercices peuvent traiter plusieurs thèmes.

<script src="https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js"></script>
<script>
    function format_table() {
        let table_element = document.getElementsByTagName("table")[0];
        let tbody_element = table_element.children[1];
        for (let i = 0; i < tbody_element.children.length; i++) {
            let tr_element = tbody_element.children[i];
            let content_td_element = tr_element.children[3];
            let content_sujet_element = tr_element.children[4];
            content_td_element.innerHTML = `<ul>${content_td_element.innerHTML.split(";").map((s) => `<li>${s}</li>`).join("")}</ul>`
            content_sujet_element.innerHTML = `<ul>${content_sujet_element.innerHTML.split(";").map((s) => `<li>${s}</li>`).join("")}</ul>`
        }
    }
    window.addEventListener("load", function() { make_table_challenges(); });
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