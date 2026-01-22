---
author: Anaël BARODINE
title: Didacticiel
---

# Didacticiel

**Chaque challenge** se présente de la **même manière** que la page que vous êtes en train de lire : **un énoncé**, parfois **des fichiers à télécharger et utiliser**, et **un bloc de réponse** en bas de page.

Certains challenges (pas ce didacticiel) se divisent **en plusieurs étapes**. Dans ce cas là, **chaque étape est décrite l'une après l'autre** sur **la même page de challenge**, et chaque étape **possède son propre bloc de réponse**. Il n'est **jamais** nécessaire de réaliser une certaine étape pour débloquer une autre : **toutes les étapes** sont immédiatement accessibles. Il est donc possible de **passer une étape** trop difficile.

Pour **valider le didacticiel**, saisissez comme réponse **le flag** : `ceci_e5t_un_fl@g`.

Vous pouvez soit **saisir la réponse** dans l'onglet **Anonyme**, ce qui vous permet de **vérifier votre réponse**, mais si la réponse est la bonne, cela **n'enregistre pas votre réussite**. Vous pouvez aussi la saisir dans l'onglet **Via profil**, vous demandant de **vous identifier** avant de **vérifier la réponse**, et qui va **enregistrer votre réussite** le cas échéant. Bien sûr, vous devez d'abord **créer un profil** via [la page profil](1_profil.md).

!!! question "Question"
    **Quel est le flag fourni dans l'énoncé ci-dessus ?**

    === "Anonyme"
        <div class="challenge-input">
            <label for="flag_anon">Réponse</label>
            <div class="info-input-div">
                <div id="icon_anon" class="info-input-icon icon-waiting"></div>
                <input type="text" id="flag_anon" class="info-input-input" spellcheck="false" placeholder="réponse">
            </div>
            <input id="submit_anon" class="input-submit" type="button" value="Vérifier" onclick="check_flag_anon('didacticiel');">
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
            <input id="submit" class="input-submit" type="button" value="Vérifier" onclick="check_flag('didacticiel');">
        </div>