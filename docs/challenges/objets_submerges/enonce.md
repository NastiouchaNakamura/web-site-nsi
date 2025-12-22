---
author: Anaël BARODINE
title: Objets submergés
---

# Objets submergés

!!! abstract "Contexte"
    Challenge proposé par le prof – Vacances d'hiver 2025-2026

**Toto le chat** était en train de se promener [sur les bords du Loiret](https://cdt45.media.tourinsoft.eu/upload/45232-Olivet-Les-bords-du-Loiret-V0.pdf), région natale du prof, mais il a accidentellement **fait tomber le contenu de son sac à dos dans l'eau**… Effectivement, ne possédant pas de pouce opposable, il n'est pas particulièrement agile.

**Voici l'eau en question** (fichier ZIP **1,62Go**, qui se dézippe en **3,38Go**) : [https://files.nastioucha.fr/loiret.zip‌](https://files.nastioucha.fr/loiret.zip‌)

Chacune des **45 millions de lignes** de ce fichier est composé de **4 valeurs flottantes** séparées par des point-virgules (c'est donc un format [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values)).

Les 6 premières lignes :

```csv linenums="1"
-7.26925878476453;4.198496809892536;-5.628356219783148;13.745790575013709
4.64020179309218;-6.586530048224509;-9.130584223068796;14.535384054827622
2.465514546448482;2.1820796971209777;-7.396798626726464;16.438322129846593
-1.008640787407229;0.5037000383726351;-2.280747379863559;15.88180075845105
5.902411370680898;-7.097993628916626;-3.510965333663014;14.30940009426072
-7.898325594868294;4.274560946425627;-6.392240387281625;15.690580583382081
```

??? tip "Indice"
    On dirait que les trois premières valeurs de chaque ligne sont des coordonnées X, Y et Z…

!!! question "Question"
    **Quel est l'objet le plus présent dans l'eau et en quelle quantité ?**

    Format de réponse : `trompette_6` si l'objet est une trompette en 6 exemplaires.
    
    === "Anonyme"
        <div style="display: flex; flex-direction: column; text-align: center;">
            <label for="flag_anon">Réponse</label>
            <input type="text" id="flag_anon" name="flag" style="font-family: monospace; border-radius: 4px; background-color: black; padding: 4px; color: white;" size="50">
            <p id="response_info_anon" style="display: none; border: solid; border-radius: 4px; font-weight: bold;"></p>
            <input type="button" value="Vérifier" style="margin-top: 0.5rem;" onclick="check_flag_anon();">
        </div>
    === "Via profil"
        <div style="display: flex; flex-direction: column; text-align: center;">
            <label for="flag">Réponse</label>
            <input type="text" id="flag" name="flag" style="font-family: monospace; border-radius: 4px; background-color: black; padding: 4px; color: white;" size="50">
            <label for="flag">Pseudo</label>
            <input type="text" id="username" name="username" style="font-family: monospace; border-radius: 4px; background-color: black; padding: 4px; color: white;" size="50">
            <label for="flag">Mot de passe</label>
            <input type="password" id="password" name="password" style="font-family: monospace; border-radius: 4px; background-color: black; padding: 4px; color: white;" size="50">
            <p id="response_info" style="display: none; border: solid; border-radius: 4px; font-weight: bold;"></p>
            <input type="button" value="Vérifier" style="margin-top: 0.5rem;" onclick="check_flag();">
        </div>
