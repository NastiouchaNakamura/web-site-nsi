---
author: Anaël BARODINE
title: Index des thèmes
hide:
  - toc
---

# Ressources NSI

Cette section est dédiée **aux élèves de première et terminale NSI** du lycée Blaise Pascal. Vous y trouverez, pour **chacun des neuf thèmes**, les **polycopiés de TD et TP**, les **URL des TP CAPYTALE**, les **fiches aides**, les **annales de contrôle** et leurs **corrections**, et les **annales de bac** et leurs **propositions de corrections**.

??? "Thème 1 - Programmation"
    Blabla

    <span style="text-align: center;">[Accéder au thème 1](/)</span>

??? "Thème 2 - Représentation des données"
    Blabla

    <span style="text-align: center;">[Accéder au thème 2](/)</span>

??? "Thème 3 - Conception et analyse d'algorithmes"
    Blabla

    <span style="text-align: center;">[Accéder au thème 3](/)</span>

??? "Thème 4 - Données en tables"
    Blabla

    <span style="text-align: center;">[Accéder au thème 4](/)</span>

??? "Thème 5 - Architecture des ordinateurs"
    Blabla

    <span style="text-align: center;">[Accéder au thème 5](/)</span>

??? "Thème 6 - Réseaux"
    Blabla

    <span style="text-align: center;">[Accéder au thème 6](/)</span>

??? "Thème 7 - Web"
    Blabla

    <span style="text-align: center;">[Accéder au thème 7](/)</span>

??? "Thème 8 - Structures de données"
    Blabla

    <span style="text-align: center;">[Accéder au thème 8](/)</span>

??? "Thème 9 - Sécurité des communications"
    Blabla

    <span style="text-align: center;">[Accéder au thème 9](/)</span>

---

??? "Annales de contrôle"
    Blabla

    <span style="text-align: center;">[Accéder aux annales de contrôles](controles/index.md)</span>

??? "Annales de baccalauréat"
    Blabla

    <span style="text-align: center;">[Accéder aux annales de baccalauréat](bac/index.md)</span>

<script>
    const details = [
        { color: "#6aa84f", icon: "/assets/icons/snake.svg" },
        { color: "#1155cc", icon: "/assets/icons/bits.svg" },
        { color: "#bf9000", icon: "/assets/icons/bulb.svg" },
        { color: "#a64d79", icon: "/assets/icons/table.svg" },
        { color: "#a61c00", icon: "/assets/icons/chip.svg" },
        { color: "#c27ba0", icon: "/assets/icons/lan.svg" },
        { color: "#674ea7", icon: "/assets/icons/sphere.svg" },
        { color: "#308f96", icon: "/assets/icons/tree.svg" },
        { color: "#38761d", icon: "/assets/icons/lock.svg" },
        { color: "#448aff", icon: "/assets/icons/pdf.svg" },
        { color: "#448aff", icon: "/assets/icons/pdf.svg" }
    ]
    let styleElement = document.createElement("style");
    styleElement.type = "text/css";
    let articleElement = document.getElementsByTagName("article").item(0);
    let detailsElements = [];
    for (let i = 0; i < articleElement.children.length; i++)
        if (articleElement.children.item(i).tagName.toLowerCase() == "details")
            detailsElements.push(articleElement.children.item(i));
    for (let i = 0; i < details.length; i++) {
        detailsElements[i].className = `th${i}`;
        styleElement.innerText += `.th${i} { border-color: ${details[i].color} !important; background-color: ${details[i].color}1a !important; text-align: center; > summary { background-color: ${details[i].color}1a !important; } > summary:before { mask-image: url(${details[i].icon}) !important; background-color: ${details[i].color} !important; } > summary:after { color: ${details[i].color} !important; }}`;
    }

    document.getElementsByTagName("head").item(0).appendChild(styleElement);
</script>
