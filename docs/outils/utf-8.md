---
author: Anaël BARODINE
title: Exercice UTF-8
hide:
  - toc
---

=== "Point de code → UTF-8"
    ## Point de code → UTF-8

    <a href="#__tabbed_1_2">Exercice inverse ici</a>

    !!! abstract "Énoncé"
        Représenter le caractère « <span name="character">?</span> », dont le **point de code est <span name="codepoint_based">?</span><sub name="base">?</sub>** en **représentation selon la norme UTF-8**.

        <div class="challenge-input">
            <input class="input-submit" type="button" value="Nouveau point de code (décimal)" onclick="base = 10; update();">
            <input class="input-submit" type="button" value="Nouveau point de code (hexadécimal)" onclick="base = 16; update();">
            <input class="input-submit" type="button" value="Nouveau point de code (binaire)" onclick="base = 2; update();">
        </div>

    ??? tip "Rappel de la norme UTF-8"
        <p style="text-align: center;">***Cette norme n'est pas à connaître par cœur et sera toujours fournie avec les exercices.***</p>

        La **norme UTF-8** indique que **le point de code d'un caractère** est encodé **soit sur un octets**, **soit sur deux octets**, **soit sur trois octets**, **soit sur quatre octets**, selon **le nombre de bits requis pour écrire le point de code en binaire** :

        - Si le **point de code** s'écrit en binaire **sur 1 à 7 bits inclus**, alors on utilisera **un seul octet** et **écrira le point de code en binaire** **sur les 7 bits <span style="color: #00c853;">x</span> ci-dessous** :
        <p style="text-align: center;">[0**<span style="color: #00c853;">xxx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup></p>
        - Si le **point de code** s'écrit en binaire **sur 8 à 11 bits inclus**, alors on utilisera **deux octets** et **écrira le point de code en binaire** **sur les 11 bits <span style="color: #00c853;">x</span> ci-dessous** :
        <p style="text-align: center;">[110**<span style="color: #00c853;">x&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup></p>
        - Si le **point de code** s'écrit en binaire **sur 12 à 16 bits inclus**, alors on utilisera **trois octets** et **écrira le point de code en binaire** **sur les 16 bits <span style="color: #00c853;">x</span> ci-dessous** :
        <p style="text-align: center;">[1110&nbsp;**<span style="color: #00c853;">xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup></p>
        - Si le **point de code** s'écrit en binaire **sur 16 à 21 bits inclus**, alors on utilisera **quatre octets** et **écrira le point de code en binaire** **sur les 21 bits <span style="color: #00c853;">x</span> ci-dessous** :
        <p style="text-align: center;">[1111&nbsp;0**<span style="color: #00c853;">xxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup></p>

    !!! question "Réponse"
        <div class="challenge-input">
            <label class="info-input-label" for="bits_answer_input">Réponse</label>
            <div class="info-input-div">
                <div id="bits_answer_icon" class="info-input-icon icon-waiting"></div>
                <span class="info-input-credential-separator">[</span>
                <input type="text" id="bits_answer_input" class="info-input-input" style="width: revert; field-sizing: content;" spellcheck="false" placeholder="Bits en UTF-8">
                <span class="info-input-credential-separator">]<sup style="font-size: small;">UTF-8</sup></span>
            </div>
            <input class="input-submit" type="button" value="Vérifier la réponse" onclick="check_bits();">
        </div>

    ??? success "Correction"
        <div name="1_byte_case" style="display: none;">
            <p>
                Tout d'abord, on écrit le **point de code** en binaire :
            </p>
            <p style="text-align: center;">
                <span name="codepoint_binary"></span><sub>2</sub>
            </p>
            <p>
                Ce **point de code** peut donc tenir **sur 7 bits**, ce qui correspond à la représentation UTF-8 **sur un octet** :
            </p>
            <p style="text-align: center;">
                [0**<span style="color: #00c853;">xxx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                On place **le point de code en binaire à la place des <span style="color: #00c853;">x</span>** de la représentation, en ajoutant **des 0 à gauche** si nécessaire (pour compléter les 7 bits prévus), pour obtenir **la représentation UTF-8** :
            </p>
            <p style="text-align: center;">
                [0**<span name="bits_1c" style="color: #00c853;"></span>**]<sup style="small">UTF-8</sup>
            </p>
        </div>

        <div name="2_byte_case" style="display: none;">
            <p>
                Tout d'abord, on écrit le **point de code** en binaire :
            </p>
            <p style="text-align: center;">
                <span name="codepoint_binary"></span><sub>2</sub>
            </p>
            <p>
                Ce **point de code ne peut pas tenir sur 7 bits**, mais il peut tenir **sur 11 bits**, ce qui correspond à la représentation UTF-8 **sur deux octets** :
            </p>
            <p style="text-align: center;">
                [110**<span style="color: #00c853;">x&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                On place **le point de code en binaire à la place des <span style="color: #00c853;">x</span>** de la représentation, en ajoutant **des 0 à gauche** si nécessaire (pour compléter les 11 bits prévus), pour obtenir **la représentation UTF-8** :
            </p>
            <p style="text-align: center;">
                [110**<span name="bits_2c_1" style="color: #00c853;">x&nbsp;xxxx</span>**&nbsp;10**<span name="bits_2c_2" style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
        </div>

        <div name="3_byte_case" style="display: none;">
            <p>
                Tout d'abord, on écrit le **point de code** en binaire :
            </p>
            <p style="text-align: center;">
                <span name="codepoint_binary"></span><sub>2</sub>
            </p>
            <p>
                Ce **point de code ne peut pas tenir ni sur 7 bits ni sur 11 bits**, mais il peut tenir **sur 16 bits**, ce qui correspond à la représentation UTF-8 **sur trois octets** :
            </p>
            <p style="text-align: center;">
                [1110&nbsp;**<span style="color: #00c853;">xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                On place **le point de code en binaire à la place des <span style="color: #00c853;">x</span>** de la représentation, en ajoutant **des 0 à gauche** si nécessaire (pour compléter les 16 bits prévus), pour obtenir **la représentation UTF-8** :
            </p>
            <p style="text-align: center;">
                [1110&nbsp;**<span name="bits_3c_1" style="color: #00c853;">xxxx</span>**&nbsp;10**<span name="bits_3c_2" style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span name="bits_3c_3" style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
        </div>

        <div name="4_byte_case" style="display: none;">
            <p>
                Tout d'abord, on écrit le **point de code** en binaire :
            </p>
            <p style="text-align: center;">
                <span name="codepoint_binary"></span><sub>2</sub>
            </p>
            <p>
                Ce **point de code ne peut pas tenir ni sur 7 bits, ni sur 11 bits, ni sur 16 bits**, mais il peut tenir **sur 21 bits**, ce qui correspond à la représentation UTF-8 **sur quatre octets** :
            </p>
            <p style="text-align: center;">
                [1111&nbsp;0**<span style="color: #00c853;">xxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                On place **le point de code en binaire à la place des <span style="color: #00c853;">x</span>** de la représentation, en ajoutant **des 0 à gauche** si nécessaire (pour compléter les 21 bits prévus), pour obtenir **la représentation UTF-8** :
            </p>
            <p style="text-align: center;">
                [1111&nbsp;0**<span name="bits_4c_1" style="color: #00c853;">xxxx</span>**&nbsp;10**<span name="bits_4c_2" style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span name="bits_4c_3" style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span name="bits_4c_4" style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
        </div>
    
=== "UTF-8 → point de code"
    ## UTF-8 → point de code

    <a href="#__tabbed_1_1">Exercice inverse ici</a>

    !!! abstract "Énoncé"
        Trouver **le point de code** du caractère qui est représenté **en UTF-8** par les bits suivnats **[<span name="bits">?</span>]<sup style="small">UTF-8</sup>**.

        <div class="challenge-input">
            <input class="input-submit" type="button" value="Nouveau point de code" onclick="update();">
        </div>

    ??? tip "Rappel de la norme UTF-8"
        <p style="text-align: center;">***Cette norme n'est pas à connaître par cœur et sera toujours fournie avec les exercices.***</p>

        La **norme UTF-8** indique que **le point de code d'un caractère** est encodé **soit sur un octets**, **soit sur deux octets**, **soit sur trois octets**, **soit sur quatre octets**, selon **le nombre de bits requis pour écrire le point de code en binaire** :

        - Si le **point de code** s'écrit en binaire **sur 1 à 7 bits inclus**, alors on utilisera **un seul octet** et **écrira le point de code en binaire** **sur les 7 bits <span style="color: #00c853;">x</span> ci-dessous** :
        <p style="text-align: center;">[0**<span style="color: #00c853;">xxx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup></p>
        - Si le **point de code** s'écrit en binaire **sur 8 à 11 bits inclus**, alors on utilisera **deux octets** et **écrira le point de code en binaire** **sur les 11 bits <span style="color: #00c853;">x</span> ci-dessous** :
        <p style="text-align: center;">[110**<span style="color: #00c853;">x&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup></p>
        - Si le **point de code** s'écrit en binaire **sur 12 à 16 bits inclus**, alors on utilisera **trois octets** et **écrira le point de code en binaire** **sur les 16 bits <span style="color: #00c853;">x</span> ci-dessous** :
        <p style="text-align: center;">[1110&nbsp;**<span style="color: #00c853;">xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup></p>
        - Si le **point de code** s'écrit en binaire **sur 16 à 21 bits inclus**, alors on utilisera **quatre octets** et **écrira le point de code en binaire** **sur les 21 bits <span style="color: #00c853;">x</span> ci-dessous** :
        <p style="text-align: center;">[1111&nbsp;0**<span style="color: #00c853;">xxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup></p>

    !!! question "Réponse"
        <div class="challenge-input">
            <label class="info-input-label" for="number_answer_input">Réponse</label>
            <div class="info-input-div">
                <div id="number_answer_icon" class="info-input-icon icon-waiting"></div>
                <input type="text" id="number_answer_input" class="info-input-input" style="width: revert; field-sizing: content;" spellcheck="false" placeholder="Point de code en base 10">
                <span class="info-input-credential-separator"><sub>10</sub></span>
            </div>
            <input class="input-submit" type="button" value="Vérifier la réponse" onclick="check_codepoint();">
        </div>

    ??? success "Correction"
        <div name="1_byte_case" style="display: none;">
            <p>
                Cette représentation **commence par 0**, on est donc dans le cas de **un seul octet** :
            </p>
            <p style="text-align: center;">
                [0**<span style="color: #00c853;">xxx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                Le **point de code** est écrit **sur 7 bits** :
            </p>
            <p style="text-align: center;">
                [0**<span name="bits_1c" style="color: #00c853;"></span>**]<sup style="small">UTF-8</sup>
            </p>
            </p>
            <p>
                On a donc **le point de code** :
            </p>
            <p style="text-align: center;">
                <span name="codepoint_binary"></span><sub>2</sub> = **<span name="codepoint"></span><sub>10</sub>**
            </p>
            <p>
                À titre indicatif, il s'agit du caractère « **<span name="character">?</span>** » selon la **norme Unicode**.
            </p>
        </div>

        <div name="2_byte_case" style="display: none;">
            <p>
                Cette représentation **commence par 110**, on est donc dans le cas de **deux octets** :
            </p>
            <p style="text-align: center;">
                [110**<span style="color: #00c853;">x&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                Le **point de code** est écrit **sur 11 bits** :
            </p>
            <p style="text-align: center;">
                [110**<span name="bits_2c_1" style="color: #00c853;">x&nbsp;xxxx</span>**&nbsp;10**<span name="bits_2c_2" style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                On a donc **le point de code** :
            </p>
            <p style="text-align: center;">
                <span name="codepoint_binary"></span><sub>2</sub> = **<span name="codepoint"></span><sub>10</sub>**
            </p>
            <p>
                À titre indicatif, il s'agit du caractère « **<span name="character">?</span>** » selon la **norme Unicode**.
            </p>
        </div>

        <div name="3_byte_case" style="display: none;">
            <p>
                Cette représentation **commence par 1110**, on est donc dans le cas de **trois octets** :
            </p>
            <p style="text-align: center;">
                [1110&nbsp;**<span style="color: #00c853;">xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                Le **point de code** est écrit **sur 16 bits** :
            </p>
            <p style="text-align: center;">
                [1110&nbsp;**<span name="bits_3c_1" style="color: #00c853;">xxxx</span>**&nbsp;10**<span name="bits_3c_2" style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span name="bits_3c_3" style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                On a donc **le point de code** :
            </p>
            <p style="text-align: center;">
                <span name="codepoint_binary"></span><sub>2</sub> = **<span name="codepoint"></span><sub>10</sub>**
            </p>
            <p>
                À titre indicatif, il s'agit du caractère « **<span name="character">?</span>** » selon la **norme Unicode**.
            </p>
        </div>

        <div name="4_byte_case" style="display: none;">
            <p>
                Cette représentation **commence par 11110**, on est donc dans le cas de **quatre octets** :
            </p>
            <p style="text-align: center;">
                [1111&nbsp;0**<span style="color: #00c853;">xxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                Le **point de code** est écrit **sur 21 bits** :
            </p>
            <p style="text-align: center;">
                [1111&nbsp;0**<span name="bits_4c_1" style="color: #00c853;">xxxx</span>**&nbsp;10**<span name="bits_4c_2" style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span name="bits_4c_3" style="color: #00c853;">xx&nbsp;xxxx</span>**&nbsp;10**<span name="bits_4c_4" style="color: #00c853;">xx&nbsp;xxxx</span>**]<sup style="small">UTF-8</sup>
            </p>
            <p>
                On a donc **le point de code** :
            </p>
            <p style="text-align: center;">
                <span name="codepoint_binary"></span><sub>2</sub> = **<span name="codepoint"></span><sub>10</sub>**
            </p>
            <p>
                À titre indicatif, il s'agit du caractère « **<span name="character">?</span>** » selon la **norme Unicode**.
            </p>
        </div>

<script>
    let base;
    let codepoint;
    let character;
    let codepoint_bits
    let bits;

    function update() {
        // Character
        let bytes_count = Math.floor(Math.random() * 4);
        if (bytes_count == 0) {
            // ASCII non-control character
            max_codepoint = 0x0021; // 33
            min_codepoint = 0x007E + 1; // 126
            codepoint = Math.floor(Math.random() * (max_codepoint - min_codepoint)) + min_codepoint;
            character = String.fromCodePoint(codepoint);

            codepoint_bits = codepoint.toString(2).padStart(7, "0").split("").map(digit => parseInt(digit));
            bits = [0].concat(codepoint_bits);

        } else if (bytes_count == 1) {
            // Printable characters only
            max_codepoint = 0x00BF;
            min_codepoint = 0x07FF + 1;
            codepoint = Math.floor(Math.random() * (max_codepoint - min_codepoint)) + min_codepoint;
            character = String.fromCodePoint(codepoint);

            codepoint_bits = codepoint.toString(2).padStart(11, "0").split("").map(digit => parseInt(digit));
            bits = [1,1,0].concat(codepoint_bits.slice(0, 5))
                          .concat([1,0])
                          .concat(codepoint_bits.slice(5, 11));

        } else if (bytes_count == 2) {
             // Printable characters
            max_codepoint = 0x0800;
            min_codepoint = 0x20AC + 1;
            codepoint = Math.floor(Math.random() * (max_codepoint - min_codepoint)) + min_codepoint;
            character = String.fromCodePoint(codepoint);

            codepoint_bits = codepoint.toString(2).padStart(16, "0").split("").map(digit => parseInt(digit));
            bits = [1,1,1,0].concat(codepoint_bits.slice(0, 4))
                            .concat([1,0])
                            .concat(codepoint_bits.slice(4, 10))
                            .concat([1,0])
                            .concat(codepoint_bits.slice(10, 16));

        } else {
            // Emojis
            max_codepoint = 0x1F600;
            min_codepoint = 0x1F6C5 + 1;
            codepoint = Math.floor(Math.random() * (max_codepoint - min_codepoint)) + min_codepoint;
            character = String.fromCodePoint(codepoint);

            codepoint_bits = codepoint.toString(2).padStart(21, "0").split("").map(digit => parseInt(digit));
            bits = [1,1,1,1,0].concat(codepoint_bits.slice(0, 3))
                              .concat([1,0])
                              .concat(codepoint_bits.slice(3, 9))
                              .concat([1,0])
                              .concat(codepoint_bits.slice(9, 15))
                              .concat([1,0])
                              .concat(codepoint_bits.slice(15, 21));
        }

        // Display of all variables
        on_all_elements("base", e => e.innerText = base);
        on_all_elements("bits_count", e => e.innerText = bits_count);
        on_all_elements("character", e => e.innerText = character);
        on_all_elements("codepoint", e => e.innerText = number_to_string(codepoint));
        on_all_elements("codepoint_based", e => e.innerText = number_to_string(codepoint, base));
        on_all_elements("codepoint_binary", e => e.innerText = number_to_string(codepoint, 2));
        on_all_elements("codepoint_bits", e => e.innerText = number_to_string(codepoint_bits.join(""), 2));
        on_all_elements("bits_1c", e => e.innerText = separate_on_indexes(bits.join("").slice(1, 8), [3]));
        on_all_elements("bits_2c_1", e => e.innerText = separate_on_indexes(bits.join("").slice(3, 8), [1]));
        on_all_elements("bits_2c_2", e => e.innerText = separate_on_indexes(bits.join("").slice(10, 16), [2]));
        on_all_elements("bits_3c_1", e => e.innerText = separate_on_indexes(bits.join("").slice(4, 8), []));
        on_all_elements("bits_3c_2", e => e.innerText = separate_on_indexes(bits.join("").slice(10, 16), [2]));
        on_all_elements("bits_3c_3", e => e.innerText = separate_on_indexes(bits.join("").slice(18, 24), [2]));
        on_all_elements("bits_4c_1", e => e.innerText = separate_on_indexes(bits.join("").slice(5, 8), []));
        on_all_elements("bits_4c_2", e => e.innerText = separate_on_indexes(bits.join("").slice(10, 16), [2]));
        on_all_elements("bits_4c_3", e => e.innerText = separate_on_indexes(bits.join("").slice(18, 24), [2]));
        on_all_elements("bits_4c_4", e => e.innerText = separate_on_indexes(bits.join("").slice(26, 32), [2]));
        on_all_elements("bits", e => e.innerText = number_to_string(bits.join(""), 2));

        // Hide and show of cases
        on_all_elements("1_byte_case", e => e.style.display = bytes_count == 0 ? "" : "none");
        on_all_elements("2_byte_case", e => e.style.display = bytes_count == 1 ? "" : "none");
        on_all_elements("3_byte_case", e => e.style.display = bytes_count == 2 ? "" : "none");
        on_all_elements("4_byte_case", e => e.style.display = bytes_count == 3 ? "" : "none");

        // Reset submit
        document.getElementById("bits_answer_icon").className = "info-input-icon icon-waiting";
        document.getElementById("bits_answer_input").value = "";
    }

    function check_bits() {
        let submited_bits_icon = document.getElementById("bits_answer_icon");
        let submited_bits_string = document.getElementById("bits_answer_input").value;

        if (!/^[01 ]+$/.test(submited_bits_string)) {
            submited_bits_icon.className = "info-input-icon icon-error";
            alert("Veuillez ne saisir que des 0 et des 1 comme réponse. Il est possible de saisir des espaces pour séparer visuellement les bits.");
        } else {
            let submited_bits = submited_bits_string.replaceAll(" ", "").split("");
            if (submited_bits.join("") === bits.join("")) {
                submited_bits_icon.className = "info-input-icon icon-success";
                success();
            } else {
                submited_bits_icon.className = "info-input-icon icon-failure";
            }
        }
    }

    function check_codepoint() {
        let submited_number_icon = document.getElementById("number_answer_icon");
        let submited_number_string = document.getElementById("number_answer_input").value;

        if (!/^[-+\d ]+$/.test(submited_number_string)) {
            submited_number_icon.className = "info-input-icon icon-error";
            alert("Veuillez saisir un nombre en décimal.");
        } else {
            let submited_number = parseInt(submited_number_string.replaceAll(" ", ""));
            if (submited_number === codepoint) {
                submited_number_icon.className = "info-input-icon icon-success";
                success();
            } else {
                submited_number_icon.className = "info-input-icon icon-failure";
            }
        }
    }

    function on_all_elements(name, fun) {
        let elements = document.getElementsByName(name);
        for (let i = 0; i < elements.length; i++)
            fun(elements[i])
    }

    function elements_by_name(name) {
        let elements = document.getElementsByName(name);
        let elements_array = [];
        for (let i = 0; i < elements.length; i++)
            elements_array.push(elements[i]);
        return elements_array;
    }

    function number_to_string(number, base = 10) {
        if (base === 2)
            return number.toString(base).replace(/\B(?=(\d{4})+(?!\d))/g, "\u00A0");
        else if (base == 16)
            return number.toString(base).replace(/\B(?=(\d{2})+(?!\d))/g, "\u00A0");
        else
            return number.toString(base).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
    }

    function separate_on_indexes(str, indexes) {
        rep = "";
        for (let i = 0; i < str.length; i++) {
            if (indexes.includes(i))
                rep += "\u00A0";
            rep += str[i];
        }
        return rep;
    }

    document.addEventListener("DOMContentLoaded", () => { bits_count = 8; base = 10; update(); });
</script>