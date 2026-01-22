---
author: Anaël BARODINE
title: Complément à 2
---

=== "Valeur → Complément à 2"
    ## Valeur → complément à deux

    <a href="#__tabbed_1_2">Exercice inverse ici</a>

    !!! abstract "Énoncé"
        Choix du <label>nombre de bits : <input id="bits_count_input" type="number" min="2" max="32" value="8" style="font-size: 1em;" onchange="update_bits_count();"></label>
        
        Nombres compris entre <span id="number_min_value_html">?</span> et <span id="number_max_value_html">?</span>.

        Écrire le nombre **<span id="number_as_based_string_html">?</span><sub id="base_html">?</sub></b>** sur **<span id="bits_count_html">?</span> bits** en **représentation par complément à 2**.

        <div class="challenge-input">
            <input class="input-submit" type="button" value="Nouveau nombre (décimal)" onclick="new_number(10);">
            <input class="input-submit" type="button" value="Nouveau nombre (binaire)" onclick="new_number(2);">
        </div>

    !!! question "Réponse"
        <div class="challenge-input">
            <label class="info-input-label" for="rep_c2">Réponse</label>
            <div class="info-input-div">
                <div id="number_as_bits_answer_icon" class="info-input-icon icon-waiting"></div>
                <span class="info-input-credential-separator">[</span>
                <input type="text" id="number_as_bits_answer_input" class="info-input-input" style="width: revert; field-sizing: content;" spellcheck="false" placeholder="Bits en complément à 2">
                <span class="info-input-credential-separator">]<sup style="font-size: small;">C2</sup></span>
            </div>
            <input class="input-submit" type="button" value="Vérifier la réponse" onclick="check_number_as_bits();">
        </div>

    ??? success "Correction"
        <div id="cas_1_html" style="display: none;">
            <p>
                La valeur est **positive**, donc **on écrit le nombre en binaire sur n bits** pour obtenir la **représentation en complément à 2** :
            </p>
            <p style="text-align: center;">
                [<span id="cas_1_number_as_bits_html"></span>]<sup style="small">C2</sup>
            </p>
        </div>

        <div id="cas_2_html" style="display: none;">
            <p>
                La valeur est **négative**, donc **on procède aux 3 étapes suivantes** :
            </p>
            <h3>
                Étape 1 : Écrire la valeur absolue en binaire
            </h3>
            <p>
                **Valeur absolue en binaire** sur n bits : [<span id="cas_2_number_as_bits_abs_html"></span>]
            </p>
            <h3>
                Étape 2 : Inverser tous les bits
            </h3>
            <p>
                **Inversion de tous les bits** de la valeur absolue en binaire : [<span id="cas_2_number_as_bits_inverted_html"></span>]
            </p>
            <h3>
                Étape 3 : Additionner 1
            </h3>
            <p>
                **Addition de 1** au nombre binaire que l'on a obtenu après l'inversion des bits pour obtenir **la représentation en complément à 2** :
            </p>
            <p style="text-align: center;">
                [<span id="cas_2_number_as_bits_html"></span>]<sup style="small">C2</sup>
            </p>
        </div>
    
=== "Complément à 2 → Valeur"
    ## Complément à deux → valeur"

    <a href="#__tabbed_1_1">Exercice inverse ici</a>


<script>
    let bits_count = 8;
    let number_as_value = 0;
    let number_as_bits = [];
    let number_base = 10;

    function update_bits_count() {
        bits_count = parseInt(document.getElementById("bits_count_input").value);
        document.getElementById("bits_count_html").innerText = bits_count;
        document.getElementById("number_min_value_html").innerText = (-(2 ** (bits_count - 1))).toString();
        document.getElementById("number_max_value_html").innerText = (2 ** (bits_count - 1) - 1).toString();
        new_number(number_base);
    }

    function new_number(base) {
        number_as_value = Math.floor(Math.random() * (2 ** bits_count - 1)) - 2 ** (bits_count - 1);
        let number_as_based_string = number_as_value.toString(base);
        if (base === 10) number_as_based_string = number_as_based_string.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        else if (base === 2) number_as_based_string = number_as_based_string.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
        document.getElementById("number_as_based_string_html").innerText = number_as_based_string;
        document.getElementById("base_html").innerText = base;
        number_base = base;
        get_bits_of_value();
    }

    function get_bits_of_value() {
        if (number_as_value > 0) {
            document.getElementById("cas_1_html").style.display = "";
            document.getElementById("cas_2_html").style.display = "none";
            number_as_bits = Math.abs(number_as_value).toString(2).padStart(bits_count, "0").split("");
            document.getElementById("cas_1_number_as_bits_html").innerText = number_as_bits.join("").replace(/\B(?=(\d{4})+(?!\d))/g, " ");
        } else {
            document.getElementById("cas_1_html").style.display = "none";
            document.getElementById("cas_2_html").style.display = "";
            number_as_bits = Math.abs(number_as_value).toString(2).padStart(bits_count, "0").split("");
            document.getElementById("cas_2_number_as_bits_abs_html").innerText = number_as_bits.join("").replace(/\B(?=(\d{4})+(?!\d))/g, " ");
            document.getElementById("cas_2_number_as_bits_inverted_html").innerText = number_as_bits.map(bit => (parseInt(bit) + 1) % 2).join("").replace(/\B(?=(\d{4})+(?!\d))/g, " ");
            document.getElementById("cas_2_number_as_bits_html").innerText = (parseInt(number_as_bits.map(bit => (parseInt(bit) + 1) % 2).join(""), 2) + 1).toString(2).padStart(bits_count, "0").replace(/\B(?=(\d{4})+(?!\d))/g, " ");
        }
    }

    function check_number_as_bits() {
        let submited_number_as_bits_icon = document.getElementById("number_as_bits_answer_icon");
        let submited_number_as_bits_string = document.getElementById("number_as_bits_answer_input").value;

        if (!/[\d ]+/.test(submited_number_as_bits_string)) {
            submited_number_as_bits_icon.className = "info-input-icon icon-error";
            alert("Veuillez ne saisir que des 0 et des 1 comme réponse. Il est possible de saisir des espaces pour séparer visuellement les bits.");
        } else {
            let submited_number_as_bits = submited_number_as_bits_string.replaceAll(" ", "").split("");
            if (submited_number_as_bits.join("") === number_as_bits.join("")) {
                submited_number_as_bits_icon.className = "info-input-icon icon-success";
                success();
            } else {
                submited_number_as_bits_icon.className = "info-input-icon icon-failure";
            }
        }
    }

    document.addEventListener("DOMContentLoaded", () => { new_number(10); update_bits_count(); });
</script>