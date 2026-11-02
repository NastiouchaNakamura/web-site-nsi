---
author: Anaël BARODINE
title: Annales de contrôle
hide:
  - toc
---

# Annales de contrôle

Ici, vous trouverez les **annales de contrôle de NSI** des années précédentes, ainsi que pour chacune la **correction détaillée**.

<div style="text-align: center;">
    <select id="level_select" class="input-submit" onchange="format_table(controles.filter(c => this.value == 'all' || c.niveau == parseInt(this.value)));">
        <option value="all">Tous les niveaux</option>
        <option value="2">Seconde</option>
        <option value="1">Première</option>
        <option value="0">Terminale</option>
    </select>
    <select id="theme_select" class="input-submit" onchange="format_table(controles.filter(c => this.value == 'all' || c.theme == parseInt(this.value)));">
        <option value="all">Tous les thèmes</option>
        <option value="1">Th.1 - Programmation</option>
        <option value="2">Th.2 - Représentation des données</option>
        <option value="3">Th.3 - Conception et analyse d'algorithmes</option>
        <option value="4">Th.4 - Données en tables et bases de données</option>
        <option value="5">Th.5 - Architecture des ordinateurs</option>
        <option value="6">Th.6 - Réseaux</option>
        <option value="7">Th.7 - Web</option>
        <option value="8">Th.8 - Structures de données</option>
        <option value="9">Th.9 - Sécurité des communications</option>
    </select>
</div>

| Code | Niveau | Thème<sup>*</sup> | Contenu | Sujet |
|:--|:--|:--|:--|:--|
|<div id="table_details_icon" class="icon-loading icon-color-gray"></div>| | | | |


<sup>*</sup> Thème dominant, certains exercices peuvent traiter plusieurs thèmes.

<script src="https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js"></script>
<script src="https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js"></script>
<script>
    window.addEventListener("load", function() { make_table_challenges(); fetch_controles(); });
</script>
<style>
    table thead tr th:nth-child(1) {
        min-width: 4rem !important;
    }
    table thead tr th:nth-child(2) {
        min-width: 5rem !important;
    }
    table thead tr th:nth-child(3) {
        min-width: 10rem !important;
    }
    table thead tr th:nth-child(4) {
        min-width: 10rem !important;
    }
    table thead tr th:nth-child(5) {
        min-width: 9rem !important;
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
    table tbody tr td:nth-child(2), table tbody tr td:nth-child(3) {
        text-align: center !important;
    }
    table td ul {
        margin: 0 !important;
        font-size: smaller;
    }
    table td li {
        margin: 0 !important;
    }
    table td:last-child ul {
        list-style-type: none;
    }
    table td:last-child {
        padding-left: 4px !important;
        padding-right: 4px !important;
    }
    table td p {
        text-align: center;
        margin-bottom: 0.25rem;
        font-style: italic;
    }
    .th1 {
        background-color: #6aa84f1a;
    }
    .th2 {
        background-color: #1155cc1a;
    }
    .th3 {
        background-color: #bf90001a;
    }
    .th4 {
        background-color: #a64d791a;
    }
    .th5 {
        background-color: #a61c001a;
    }
    .th6 {
        background-color: #c27ba01a;
    }
    .th7 {
        background-color: #674ea71a;
    }
    .th8 {
        background-color: #308f961a;
    }
    .th9 {
        background-color: #38761d1a;
    }
</style>