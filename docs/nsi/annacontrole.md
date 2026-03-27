---
author: Anaël BARODINE
title: Annales de contrôle
hide:
  - toc
---

# Annales de contrôle

Ici, vous trouverez les **annales de contrôle de NSI** des années précédentes, ainsi que pour chacune la **correction détaillée**.

| Code | Niveau | Thème<sup>*</sup> | Titre | Contenu | Sujet | Correction |
|:--|:--|:--|:--|:--|:-:|:-:|
| 26-1NSI-01A | 1<sup>ère</sup> | Thème 5 - Données en tables | Contrôle de fin de thème | <ul><li>Indexation de tables</li><li>Sélections dans une table</li><li>Tri de table</li><li>La fonction `open`</li><li>La fonction `sorted`</li><li>Création de listes par compréhension</li><li>Lambda-expressions</li></ul> | PDF | PDF |

<sup>*</sup> Thème dominant, certains exercices peuvent traiter plusieurs thèmes.

<script src="https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js"></script>
<script>
    function format_table() {
        let table_element = document.getElementsByTagName("table")[0];
        let tbody_element = table_element.children[1];
        for (let i = 0; i < tbody_element.children.length; i++) {
            let tr_element = tbody_element.children[i];
            let first_td_element = tr_element.children[0];
            first_td_element.style.whiteSpace = "nowrap";
        }
    }
    window.addEventListener("load", function() { make_table_challenges(); format_table(); });
</script>