---
author: Anaël BARODINE
title: ⁂ Objets submergés
---

# ⁂ Objets submergés

!!! abstract "Contexte"
    Challenge proposé par le prof – Vacances d'hiver 2025-2026

**Toto le chat** était en train de se promener [sur les bords du Loiret](https://cdt45.media.tourinsoft.eu/upload/45232-Olivet-Les-bords-du-Loiret-V0.pdf), région natale du prof, mais il a accidentellement **fait tomber le contenu de son sac à dos dans l'eau**… Effectivement, ne possédant pas de pouce opposable, il n'est pas particulièrement agile.

**Voici l'eau en question** (fichier ZIP **1,63Go**, qui se dézippe en **3,39Go**) : <a href="../loiret.zip">loiret.zip</a>

Chacune des **45 millions de lignes** de ce fichier est composé de **4 valeurs flottantes** séparées par des point-virgules (c'est donc un format [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values)).

Les 6 premières lignes :

```csv linenums="1"
4.333561137475497;-2.0377611805231126;-6.595977963126245;20.097424533864153
3.9182210927443233;-0.036429474746061175;1.5131328504839114;21.062197092824125
5.983338512428881;0.8252950173649722;-7.693875713224867;19.37775942189871
-0.1898143098166134;-2.122987190755758;-0.23198641816269827;19.088251203541084
4.556104929206974;-6.980373506092034;-0.8410987349792514;17.507557889555077
4.4420127006953365;-5.718405874978238;-0.5088080846023182;19.80981076530525
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
