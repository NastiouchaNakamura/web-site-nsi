---
author: Anaël BARODINE
title: Exercice complément à 2
hide:
  - toc
---

=== "Valeur → Complément à 2"
    ## Valeur → complément à deux

    <a href="#__tabbed_1_2">Exercice inverse ici</a>

    !!! abstract "Énoncé"
        Choix du nombre de bits : <label>n = <input type="number" min="2" max="32" value="8" style="font-size: 1em;" onchange="bits_count = parseInt(this.value); update();"></label>
        
        Nombres compris entre <span name="min_value">?</span> et <span name="max_value">?</span>.

        Écrire le nombre **<span name="number_based">?</span><sub name="base">?</sub>** sur **<span name="bits_count">?</span> bits** en **représentation par complément à 2**.

        <div class="challenge-input">
            <input class="input-submit" type="button" value="Nouveau nombre (décimal)" onclick="base = 10; update();">
            <input class="input-submit" type="button" value="Nouveau nombre (binaire)" onclick="base = 2; update();">
        </div>

    !!! question "Réponse"
        <div class="challenge-input">
            <label class="info-input-label" for="bits_answer_input">Réponse</label>
            <div class="info-input-div">
                <div id="bits_answer_icon" class="info-input-icon icon-waiting"></div>
                <span class="info-input-credential-separator">[</span>
                <input type="text" id="bits_answer_input" class="info-input-input" style="width: revert; field-sizing: content;" spellcheck="false" placeholder="Bits en complément à 2">
                <span class="info-input-credential-separator">]<sup style="font-size: small;">C2</sup></span>
            </div>
            <input class="input-submit" type="button" value="Vérifier la réponse" onclick="check_bits();">
        </div>

    ??? success "Correction"
        <div name="cas_1" style="display: none;">
            <p>
                La valeur est **positive**, donc **on écrit le nombre en binaire sur n bits** pour obtenir la **représentation en complément à 2** :
            </p>
            <p style="text-align: center;">
                [<span name="bits"></span>]<sup style="small">C2</sup>
            </p>
        </div>

        <div name="cas_2" style="display: none;">
            <p>
                La valeur est **négative**, donc **on procède aux 3 étapes suivantes** :
            </p>
            <p>
                ① **Écrire la valeur absolue en binaire** sur n bits : [<span name="bits_abs"></span>]
            </p>
            <p>
                ② **Inverser tous les bits** de la valeur absolue en binaire : [<span name="bits_inverted"></span>]
            </p>
            <p>
                ③ **Additionner 1** au nombre binaire que l'on a obtenu après l'inversion des bits pour obtenir **la représentation en complément à 2** :
            </p>
            <p style="text-align: center;">
                [<span name="bits"></span>]<sup style="small">C2</sup>
            </p>
        </div>
    
=== "Complément à 2 → Valeur"
    ## Complément à deux → valeur

    <a href="#__tabbed_1_1">Exercice inverse ici</a>

    !!! abstract "Énoncé"
        Choix du nombre de bits : <label>n = <input type="number" min="2" max="32" value="8" style="font-size: 1em;" onchange="bits_count = parseInt(this.value); update();"></label>
        
        Nombres compris entre <span name="min_value">?</span> et <span name="max_value">?</span>.

        Trouver **la valeur du nombre** qui est représenté **en complément à 2** par les bits **[<span name="bits">?</span>]<sup style="small">C2</sup>**.

        <div class="challenge-input">
            <input class="input-submit" type="button" value="Nouveau nombre" onclick="update();">
        </div>

    !!! question "Réponse"
        <div class="challenge-input">
            <label class="info-input-label" for="number_answer_input">Réponse</label>
            <div class="info-input-div">
                <div id="number_answer_icon" class="info-input-icon icon-waiting"></div>
                <input type="text" id="number_answer_input" class="info-input-input" style="width: revert; field-sizing: content;" spellcheck="false" placeholder="Nombre en base 10">
                <span class="info-input-credential-separator"><sub>10</sub></span>
            </div>
            <input class="input-submit" type="button" value="Vérifier la réponse" onclick="check_number();">
        </div>

    ??? success "Correction"
        <div name="cas_1" style="display: none;">
            <p>
                **Le bit de poids fort** (le plus à gauche) est à **0**, donc la valeur est **positive**. Donc, il y a juste à **convertir de binaire à décimal** :
            </p>
            <p style="text-align: center;">
                <span name="number"></span><sub>10</sub>
            </p>
        </div>

        <div name="cas_2" style="display: none;">
            <p>
                **Le bit de poids fort** (le plus à gauche) est à **1**, donc la valeur est **négative**. Dans ce cas, **on procède aux 3 étapes suivantes** :
            </p>
            <p>
                ① **Soustraire 1** à la représentation en complément à 2 : [<span name="bits_inverted"></span>]
            </p>
            <p>
                ② **Inverser tous les bits** de résultat de la soustraction en binaire : [<span name="bits_abs"></span>]
            </p>
            <p>
                ③ **Convertir le résultat de l'inversion** du binaire vers le **décimal**, et **on n'oublie pas d'ajouter le signe moins** :
            </p>
            <p style="text-align: center;">
                <span name="number"></span><sub>10</sub>
            </p>
        </div>


<script>
    let bits_count;
    let min_value;
    let max_value;
    let number;
    let base;
    let bits_abs;
    let bits_inverted;
    let bits;

    function update() {
        // Vérification
        if (isNaN(bits_count) || bits_count < 2 || bits_count > 32) {
            alert("Le nombre de bits doit être un nombre entier entre 2 et 32 inclus.");
            return;
        }

        // Number
        min_value = -(2 ** (bits_count - 1));
        max_value = 2 ** (bits_count - 1) - 1;
        number = Math.floor(Math.random() * (2 ** bits_count)) - 2 ** (bits_count - 1);

        // C2 representation
        bits_abs = Math.abs(number).toString(2).padStart(bits_count, "0").split("").map(digit => parseInt(digit));

        if (number >= 0) {
            bits_inverted = [];
            bits = bits_abs;
        } else {
            bits_inverted = bits_abs.map(bit => bit === 0 ? 1 : 0);
            bits = (parseInt(bits_inverted.join(""), 2) + 1).toString(2).padStart(bits_count, "0").split("").map(digit => parseInt(digit));
        }

        // Display of all variables
        on_all_elements("bits_count", e => e.innerText = bits_count);
        on_all_elements("min_value", e => e.innerText = number_to_string(min_value));
        on_all_elements("max_value", e => e.innerText = number_to_string(max_value));
        on_all_elements("number", e => e.innerText = number_to_string(number));
        on_all_elements("number_based", e => e.innerText = number_to_string(number, base));
        on_all_elements("base", e => e.innerText = base);
        on_all_elements("bits_abs", e => e.innerText = number_to_string(bits_abs.join(""), 2));
        on_all_elements("bits_inverted", e => e.innerText = number_to_string(bits_inverted.join(""), 2));
        on_all_elements("bits", e => e.innerText = number_to_string(bits.join(""), 2));

        // Hide and show of cases
        on_all_elements("cas_1", e => e.style.display = number >= 0 ? "" : "none");
        on_all_elements("cas_2", e => e.style.display = number >= 0 ? "none" : "");

        // Reset submits
        document.getElementById("bits_answer_icon").className = "info-input-icon icon-waiting";
        document.getElementById("bits_answer_input").value = "";
        document.getElementById("number_answer_icon").className = "info-input-icon icon-waiting";
        document.getElementById("number_answer_input").value = "";
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

    function check_number() {
        let submited_number_icon = document.getElementById("number_answer_icon");
        let submited_number_string = document.getElementById("number_answer_input").value;

        if (!/^[-+\d ]+$/.test(submited_number_string)) {
            submited_number_icon.className = "info-input-icon icon-error";
            alert("Veuillez saisir un nombre en décimal, dont le signe - si négatif, comme réponse.");
        } else {
            let submited_number = parseInt(submited_number_string.replaceAll(" ", ""));
            if (submited_number === number) {
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

    document.addEventListener("DOMContentLoaded", () => { bits_count = 8; base = 10; update(); });
</script>