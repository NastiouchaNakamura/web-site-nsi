---
author: Anaël BARODINE
title: ⁂ Objets submergés
---

# ⁂ Objets submergés

!!! abstract "Contexte"
    Challenge proposé par le prof – Vacances d'hiver 2025-2026

**Toto le chat** était en train de se promener [sur les bords du Loiret](https://cdt45.media.tourinsoft.eu/upload/45232-Olivet-Les-bords-du-Loiret-V0.pdf), région natale du prof, mais il a accidentellement **fait tomber le contenu de son sac à dos dans l'eau**… Effectivement, ne possédant pas de pouce opposable, il n'est pas particulièrement agile.

**Voici l'eau en question** (fichier ZIP **1,17Go**, qui se dézippe en **2,63Go**) : <a href="../loiret.zip">loiret.zip</a>

Chacune des **45 millions de lignes** de ce fichier est composé de **4 valeurs flottantes** séparées par des point-virgules (c'est donc un format [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values)).

Les 6 premières lignes :

```csv linenums="1"
-1.0151238889220515;-6.217395704884994;-4.710974745768204;19.88706069942994
-5.912582772357684;1.9932299879219073;-1.8639112404024658;17.119476047766476
-9.684384044886285;-9.925828551124471;-3.8831727578770536;15.18311326890268
-3.0026642394003744;-2.881802089874843;-0.38426303994166133;13.63189356901719
4.733640877595679;4.14525750731422;-3.5412589214471186;15.207974274593626
3.2642409180163625;-1.561105731584254;-8.513081448195285;13.524133594152904
```

??? tip "Indice"
    On dirait que les trois premières valeurs de chaque ligne sont des coordonnées X, Y et Z…

!!! question "Question"
    **Quel est l'objet le plus présent dans l'eau et en quelle quantité ?**

    Format de réponse : `trompette_6` si l'objet est une trompette en 6 exemplaires.
    
    === "Anonyme"
        <div class="challenge-input">
            <label for="flag_anon">Réponse</label>
            <div class="info-input-div">
                <div id="icon_anon" class="info-input-icon icon-waiting"></div>
                <input type="text" id="flag_anon" class="info-input-input" spellcheck="false" placeholder="réponse">
            </div>
            <input id="submit_anon" class="input-submit" type="button" value="Vérifier" onclick="check_flag_anon('objets_submerges');">
        </div>
    === "Via profil"
        <div class="challenge-input">
            <label for="username">Identifiants</label>
            <div class="info-input-div">
                <div id="icon_credentials" class="info-input-icon icon-waiting"></div>
                <input type="text" id="username" class="info-input-input" spellcheck="false" placeholder="identifiant">
                <span class="info-input-credential-separator">:</span>
                <input type="password" id="password" class="info-input-input" spellcheck="false" placeholder="mot de passe">
            </div>
            <label for="flag">Réponse</label>
            <div class="info-input-div">
                <div id="icon_flag" class="info-input-icon icon-waiting"></div>
                <input type="text" id="flag" class="info-input-input" spellcheck="false" placeholder="réponse">
            </div>
            <input id="submit" class="input-submit" type="button" value="Vérifier" onclick="check_flag('objets_submerges');">
        </div>
