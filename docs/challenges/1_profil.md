---
author: Anaël BARODINE
title: Profil challenger
---

# Profil challenger

De manière **totalement facultative**, le prof vous propose de disposer, **sur ce site Web**, d'un **profil challenger**. Ce profil vous permettra, si vous le souhaitez, de **sauvegarder votre réussite aux challenges** mais aussi de **pouvoir comparer votre score aux autres**.

!!! warning "Attention"
    Pour l'instant, le système de profil est **réservé uniquement aux élèves du lycée Blaise Pascal**. Les profils ne pouvant pas être associés à un ou une élève du lycée (de manière confidentielle, par le prof) seront supprimés.

## Leaderboard

Ci-dessous, le **leaderboard** indiquant combien d'étoiles ont été obtenues par chaque profil de challenger. Seuls les profils (anonymes) des élèves du lycée Blaise Pascal sont affichés.

=== "Détail"
    | Profil |
    |:-:|
    | <div id="table_details_icon" class="icon-loading"></div> |

    <script src="https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js"></script>
    <script>
        window.addEventListener("load", function() { make_table_details(); });
    </script>


## Création et modification

!!! abstract "Profil"
    === "Créer un profil"
        Puisque le site Web est **public**, veuillez utiliser **un pseudonyme**.
        
        <div class="challenge-input">
            <label for="username">Pseudo</label>
            <div class="info-input-div">
                <div id="icon_username" class="info-input-icon icon-waiting"></div>
                <input type="text" id="username" class="info-input-input" spellcheck="false" placeholder="identifiant">
            </div>
            <label for="password">Mot de passe</label>
            <div class="info-input-div">
                <div id="icon_password" class="info-input-icon icon-waiting"></div>
                <input type="password" id="password" class="info-input-input" spellcheck="false" placeholder="mot de passe">
            </div>
            <label for="password_repeat">Répéter le mot de passe</label>
            <div class="info-input-div">
                <div id="icon_password_repeat" class="info-input-icon icon-waiting"></div>
                <input type="password" id="password_repeat" class="info-input-input" spellcheck="false" placeholder="répéter le mot de passe">
            </div>
            <label for="prenom">Informations</label>
            <div class="info-input-div">
                <div id="icon_infos" class="info-input-icon icon-waiting"></div>
                <input type="text" id="prenom" class="info-input-input" spellcheck="false" placeholder="prénom">
                <span class="info-input-credential-separator">|</span>
                <input type="text" id="nom" class="info-input-input" spellcheck="false" placeholder="nom">
                <span class="info-input-credential-separator">|</span>
                <input type="text" id="classe" class="info-input-input" spellcheck="false" placeholder="classe">
            </div>
            <input id="post_submit" class="input-submit" type="button" value="Créer" onclick="post_profile();">
        </div>
    === "Modifier le mot de passe"
        <div class="challenge-input">
            <label for="username_patch">Identifiants</label>
            <div class="info-input-div">
                <div id="icon_credentials" class="info-input-icon icon-waiting"></div>
                <input type="text" id="username_patch" class="info-input-input" spellcheck="false" placeholder="identifiant">
                <span class="info-input-credential-separator">:</span>
                <input type="password" id="old_password" class="info-input-input" spellcheck="false" placeholder="ancien mot de passe">
            </div>
            <label for="password">Nouveau mot de passe</label>
            <div class="info-input-div">
                <div id="icon_new_password" class="info-input-icon icon-waiting"></div>
                <input type="password" id="new_password" class="info-input-input" spellcheck="false" placeholder="nouveau mot de passe">
            </div>
            <label for="new_password_repeat">Répéter le nouveau mot de passe</label>
            <div class="info-input-div">
                <div id="icon_new_password_repeat" class="info-input-icon icon-waiting"></div>
                <input type="password" id="new_password_repeat" class="info-input-input" spellcheck="false" placeholder="répéter le nouveau mot de passe">
            </div>
            <input id="patch_submit" class="input-submit" type="button" value="Modifier" onclick="patch_profile();">
        </div>
