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
| 26-1NSI-01 | 1<sup>ère</sup> | Th.5 - Données en tables et bases de données | Format CSV;Sélections en tables;Tri de tables;La fonction `open`;La fonction `sorted`;Listes en compréhension;Lambda-expressions | [<div class="icon icon-pdf icon-color-red"></div> 26-1NSI-01A](26-1NSI-01A.pdf) <!--([<div class="icon icon-pdf icon-color-red"></div> Correction](/))-->;[<div class="icon icon-pdf icon-color-red"></div> 26-1NSI-01B](26-1NSI-01B.pdf);[<div class="icon icon-pdf icon-color-red"></div> 26-1NSI-01C](26-1NSI-01C.pdf) |

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