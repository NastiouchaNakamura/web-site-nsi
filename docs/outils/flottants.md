---
author: Anaël BARODINE
title: Exercice flottants
hide:
  - toc
---

=== "Valeur décimale → flottant"
    ## Valeur décimale → flottant

    <a href="#__tabbed_1_2">Exercice inverse ici</a>

    !!! abstract "Énoncé"
        <label>Choix de la précision : <select style="font-size: 1em;" onchange="precision = this.value; update();">
            <option value="binary16">Demi-précision — binary16 (16 bits)</option>
            <option value="binary32">Simple précision — binary32 (32 bits)</option>
            <option value="binary64">Double précision — binary64 (64 bits)</option>
        </select></label>
        
        Écrire le nombre **<span name="sign">?</span><span name="int_val">?</span>,<span name="dec_val">?</span><sub>10</sub>** sur **<span name="bits_count">?</span> bits** en **représentation flottante <span name="precision">?</span>** (norme IEEE-754).

        <div class="challenge-input">
            <input class="input-submit" type="button" value="Nouveau nombre" onclick="update();">
        </div>

    ??? tip "Rappel de la norme IEEE-754"
        <p style="text-align: center;">***Cette norme n'est pas à connaître par cœur et sera toujours fournie avec les exercices.***</p>

    !!! question "Réponse"
        <div class="challenge-input">
            <label class="info-input-label" for="bits_answer_input">Réponse</label>
            <div class="info-input-div">
                <div id="bits_answer_icon" class="info-input-icon icon-waiting"></div>
                <span class="info-input-credential-separator">[</span>
                <input type="text" id="bits_answer_input" class="info-input-input" style="width: revert; field-sizing: content;" spellcheck="false" placeholder="Bits en binary16">
                <span class="info-input-credential-separator">]<sup style="font-size: small;">FP<span name="bits_count"></sup></span>
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
    
=== "Flottant → valeur décimale"
    ## Flottant → valeur décimale



<script>
    let precision = "binary16";
    let bits_count;
    let sign;
    let int_val;
    let int_bits;
    let dec_val;
    let dec_bits;
    let bits;

    function update() {
        // Bits count
        if (precision == "binary32")
            bits_count = 32;
        else if (precision == "binary64")
            bits_count = 64;
        else
            bits_count = 16;

        // Number
        sign = Math.random() > 0.5 ? -1 : +1;
        int_val = Math.floor(Math.random() * 150);
        let dec_len = Math.floor(Math.random() * 3 + 1);
        dec_val = parseInt(Math.random().toString().substr(2, dec_len));

        // Bits of integer part
        int_bits = int_val.toString(2).split("").map(digit => parseInt(digit));

        // Bits of decimal part
        dec_bits = [];
        let curr_val = dec_val;
        let done = false;
        let i = 0;
        while (!done) {
            let digits_count = dec_val.toString().length;
            let double_val = curr_val * 2;
            if (double_val == 10 * dec_val.toString().length) {
                dec_bits.push(1);
                break;
            } else if (double_val.toString().length  > digits_count) {
                curr_val = parseInt((double_val - dec_val.toString().length * 10).toString().replace(/0*$/g, ''));
                dec_bits.push(1);
            } else {
                curr_val = double_val;
                dec_bits.push(0);
            }

            i++;
            if (i > 10)
                break;
        }

        // Display of all variables
        on_all_elements("bits_count", e => e.innerText = bits_count);
        on_all_elements("sign", e => e.innerText = sign == -1 ? "-" : "+")
        on_all_elements("int_val", e => e.innerText = number_to_string(int_val));
        on_all_elements("dec_val", e => e.innerText = dec_val);
        document.getElementById("bits_answer_input").placeholder = "Bits en " + precision;

        // Hide and show of cases
        //on_all_elements("1_byte_case", e => e.style.display = bytes_count == 0 ? "" : "none");
        //on_all_elements("2_byte_case", e => e.style.display = bytes_count == 1 ? "" : "none");
        //on_all_elements("3_byte_case", e => e.style.display = bytes_count == 2 ? "" : "none");
        //on_all_elements("4_byte_case", e => e.style.display = bytes_count == 3 ? "" : "none");

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
            return number.toString(base).replace(/\B(?=([\dA-Fa-f]{2})+(?![\dA-Fa-f]))/g, "\u00A0");
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