---
author: Anaël BARODINE
title: Repr. des nombres à virgule en virgule fixe (notation Q)
hide:
  - toc
---

=== "Valeur → représentation"
    ## Valeur → représentation

    <a href="#__tabbed_1_2">Exercice inverse ici</a>

    !!! abstract "Énoncé"
        Choix du nombre de bits de partie entière : <label>n = <input type="number" min="1" max="32" value="4" style="font-size: 1em;" onchange="n = parseInt(this.value); update();"></label>, choix du nombre de bits de partie fractionnaire : <label>f = <input type="number" min="1" max="32" value="4" style="font-size: 1em;" onchange="f = parseInt(this.value); update();"></label>

        Ensemble des nombres à virgule représentables : {<span name="step">?</span>·k | k ∈ ℕ et <span name="step">?</span>·k < <span name="max">?</span> } ⊆ [0 ; <span name="max">?</span>[.
        
        Écrire le nombre à virgule **<span name="int_val">?</span>,<span name="dec_val">?</span><sub>10</sub>** en **représentation en virgule fixe “UQ<span name="n">?</span>.<span name="f">?</span>”** (notation Q).

        <div class="challenge-input">
            <input class="input-submit" type="button" value="Nouveau nombre" onclick="update();">
        </div>

    ??? tip "Rappel virgule fixe et notation Q"
        En **représentation en virgule fixe**, la **position de la virgule** est **fixe**, ce qui répartit les bits entre **partie entière** et **partie fractionnaire**, respectivement sur **n bits pour la partie entière** et **f bits pour la partie fractionnaire**.

        La **notation Q** est un standard de représentation en virgule fixe qui se construit en accolant **partie entière à gauche** et **partie fractionnaire à droite** sur **n + f bits** au total :

        <p style="text-align: center;">
            [partie entière sur n bits ⋮ partie fractionnaire sur f bits]<sup>UQn.f</sup>
        </p>

        On note cette représentation **“UQn.f”**. Par exemple, **“UQ4.4”** indique une représentation en virgule fixe selon la notation Q avec **n = 4 bits de partie entière** et **f = 4 bits de partie fractionnaire**.

    !!! question "Réponse"
        <div class="challenge-input">
            <label class="info-input-label" for="bits_answer_input">Réponse</label>
            <div class="info-input-div">
                <div id="bits_answer_icon" class="info-input-icon icon-waiting icon-color-white"></div>
                <span class="info-input-credential-separator">[</span>
                <input type="text" id="bits_answer_input" class="info-input-input" style="width: revert; field-sizing: content;" spellcheck="false" placeholder="Bits en UQ4.4">
                <span class="info-input-credential-separator">]<sup style="font-size: small;">UQ<span name="n"></span>.<span name="f"></span></sup></span>
            </div>
            <input class="input-submit" type="button" value="Vérifier la réponse" onclick="check_bits();">
        </div>

    ??? success "Correction"
        Tout d'abord **on convertit la valeur en binaire** :

        <div style="display: flex; flex-direction: row;">
            <div style="width: 48%;">
                <div name="int_bits_is_not_0">
                    <p>
                        Pour la **partie entière** (à gauche de la virgule), on utilise la technique des **divisions par 2 successives** ou des **puissances de 2 inférieures**, ou une autre technique, pour trouver :
                    </p>
                    <p style="text-align: center;">
                        <span name="int_val"></span><sub>10</sub> = <span name="int_bits"></span><sub>2</sub>
                    </p>
                </div>
                <div name="int_bits_is_0">
                    <p>
                        La **partie entière** (à gauche de la virgule), est **0**, en décimal comme en binaire : 
                    </p>
                    <p style="text-align: center;">
                        0<sub>10</sub> = 0<sub>2</sub>
                    </p>
                </div>
            </div>
            <div style="width: 1px; margin-left: calc(2% - 0.1px); margin-right: calc(2% - 0.1px); background-color: var(--md-admonition-fg-color);"></div>
            <div style="width: 48%;">
                <div name="dec_bits_no_cycle_no_10">
                    <p>
                        Pour la **partie fractionnaire** (à droite de la virgule), on utilise la technique des **multiplications par 2 successives** pour trouver : 
                    </p>
                    <p style="text-align: center;">
                        0,<span name="dec_val"></span><sub>10</sub> = 0,<span name="dec_first_bits"></span>…<sub>2</sub>
                    </p>
                    <p>
                        **On n'est pas tombé sur 1,0** après une multiplication, et il n'y a **aucune période** identifiable, donc **on a continué les calculs** jusqu'à avoir **les <span name="f"></span> bits de la partie fractionnaire**.
                    </p>
                </div>
                <div name="dec_bits_no_cycle_10">
                    <p>
                        Pour la **partie fractionnaire** (à droite de la virgule), on utilise la technique des **multiplications par 2 successives** pour trouver : 
                    </p>
                    <p style="text-align: center;">
                        0,<span name="dec_val"></span><sub>10</sub> = 0,<span name="dec_first_bits">…</span><sub>2</sub>
                    </p>
                    <p>
                        On est tombé sur **1,0** ce qui nous a permis **d'arrêter les calculs**.
                    </p>
                </div>
                <div name="dec_bits_has_cycle">
                    <p>
                        Pour la **partie fractionnaire** (à droite de la virgule), on utilise la technique des **multiplications par 2 successives** pour trouver : 
                    </p>
                    <p style="text-align: center;">
                        0,<span name="dec_val"></span><sub>10</sub> = 0,<span name="dec_first_bits"></span><span name="dec_bits_cycle" style="text-decoration: overline;"></span><sub>2</sub>
                    </p>
                    <p>
                        On est tombé sur **une période** (partie soulignée), ce qui nous a permis **d'arrêter les calculs**.
                    </p>
                </div>
                <div name="dec_bits_is_0">
                    <p>
                        La **partie fractionnaire** (à droite de la virgule), est **0**, en décimal comme en binaire : 
                    </p>
                    <p style="text-align: center;">
                        0,0<sub>10</sub> = 0,0<sub>2</sub>
                    </p>
                </div>
            </div>
        </div>
        
        On a donc **le nombre à virgule en binaire** :

        <p style="text-align: center;">
            <span name="int_bits" style="color: #ff9100;"></span>,<span name="dec_first_bits" style="color: #00c853;"></span><span name="dec_bits_cycle" style="text-decoration: overline; color: #00c853;"></span><span name="ellipsis"></span><sub>2</sub>
        </p>

        En **représentation en virgule fixe “UQ<span name="n""></span>.<span name="f"></span>”**, on a **n = <span name="n"></span> bits de partie entière** suivis de **f = <span name="f"></span> bits de partie fractionnaire**.

        <p style="text-align: center;">
            [<span name="int_bits_0"></span><span name="int_bits_spaced" style="color: #ff9100;"></span><span name="dec_bits_spaced" style="color: #00c853;"></span><span name="dec_bits_0"></span>]<sup>UQ<span name="n"></span>.<span name="f"></span></sup>
        </p>
    
=== "Représentation → valeur"
    ## Représentation → valeur
    
    <a href="#__tabbed_1_1">Exercice inverse ici</a>

    !!! abstract "Énoncé"
        Choix du nombre de bits de partie entière : <label>n = <input type="number" min="1" max="32" value="4" style="font-size: 1em;" onchange="n = parseInt(this.value); update();"></label>, choix du nombre de bits de partie fractionnaire : <label>f = <input type="number" min="1" max="32" value="4" style="font-size: 1em;" onchange="f = parseInt(this.value); update();"></label>

        Ensemble des nombres à virgule représentables : {<span name="step">?</span>·k | k ∈ ℕ et <span name="step">?</span>·k < <span name="max">?</span> } ⊆ [0 ; <span name="max">?</span>[.

        Trouver **la valeur décimale** du **nombre à virgule** qui est écrit en **représentation en virgule fixe “UQ<span name="n">?</span>.<span name="f">?</span>”** (notation Q) par les bits **[<span name="bits"></span>]<sup>UQ<span name="n">?</span>.<span name="f">?</span></sup>**.

        <div class="challenge-input">
            <input class="input-submit" type="button" value="Nouveau nombre" onclick="update();">
        </div>

    ??? tip "Rappel virgule fixe et notation Q"
        En **représentation en virgule fixe**, la **position de la virgule** est **fixe**, ce qui répartit les bits entre **partie entière** et **partie fractionnaire**, respectivement sur **n bits pour la partie entière** et **f bits pour la partie fractionnaire**.

        La **notation Q** est un standard de représentation en virgule fixe qui se construit en accolant **partie entière à gauche** et **partie fractionnaire à droite** sur **n + f bits** au total :

        <p style="text-align: center;">
            [partie entière sur n bits ⋮ partie fractionnaire sur f bits]<sup>UQn.f</sup>
        </p>

        On note cette représentation **“UQn.f”**. Par exemple, **“UQ4.4”** indique une représentation en virgule fixe selon la notation Q avec **n = 4 bits de partie entière** et **f = 4 bits de partie fractionnaire**.

    !!! question "Réponse"
        <div class="challenge-input">
            <label class="info-input-label" for="value_answer_input">Réponse</label>
            <div class="info-input-div">
                <div id="value_answer_icon" class="info-input-icon icon-waiting icon-color-white"></div>
                <span class="info-input-credential-separator"></span>
                <input type="text" id="value_answer_input" class="info-input-input" style="width: revert; field-sizing: content;" spellcheck="false" placeholder="Valeur décimale">
                <span class="info-input-credential-separator"><sub style="font-size: small;">10</sub></span>
            </div>
            <input class="input-submit" type="button" value="Vérifier la réponse" onclick="check_value();">
        </div>

    ??? success "Correction"
        Pour commencer, on **identifie la partie entière et la partie fractionnaire** dans la représentation, sachant que on a **n = <span name="n"></span> bits de partie entière** suivis de **f = <span name="f"></span> bits de partie fractionnaire** :

        <p style="text-align: center;">
            [<span name="int_bits_0"></span><span name="int_bits_spaced" style="color: #ff9100;"></span><span name="dec_bits_spaced_retro" style="color: #00c853;"></span><span name="dec_bits_0_retro"></span>]<sup>UQ<span name="n"></span>.<span name="f"></span></sup>
        </p>

        On a donc **le nombre à virgule en binaire** :

        <p style="text-align: center;">
            <span name="int_bits" style="color: #ff9100;"></span>,<span name="dec_bits_spaced_retro" style="color: #00c853;"><sub>2</sub>
        </p>

        Enfin, on utilise la méthode de la **somme des puissances de 2** pour obtenir la **valeur décimale** à virgule :

        <p style="text-align: center;">
            <span name="int_val"></span>,<span name="exact_dec"></span><sub>10</sub>
        </p>



<script>
    let n;
    let f;
    let step;
    let max;
    let bits_count;
    let int_val;
    let int_bits;
    let dec_case;
    let dec_val;
    let dec_first_bits;
    let dec_bits_cycle;
    let bits;
    let exact_dec;

    function update() {
        // Vérification
        if (isNaN(n) || n < 1 ||n > 32) {
            alert("Le nombre de bits de partie entière n doit être un nombre entier entre 1 et 32 inclus.");
            return;
        }
        if (isNaN(f) || f < 1 ||f > 32) {
            alert("Le nombre de bits de partie fractionnaire f doit être un nombre entier entre 1 et 32 inclus.");
            return;
        }

        // Step and max for set of representable values display
        step = 2 ** -f;
        max = 2 ** n

        // Number
        int_val = Math.random() > 0.25 ? parseInt(Array(n).fill(0).map((_, i) => Math.random() > 0.5 ? 0 : 1).join(""), 2) : 0;
        let dec_type = ["precise", "cyclic", "long"][Math.floor(Math.random() * 3)]
        if (dec_type == "precise") {
            dec_val = parseInt((x => x == "" ? "0" : x)(Array(Math.floor(Math.random() * f) + 1).fill(0).map((_, i) => Math.random() > 0.5 ? 0 : 2 ** (-i-1)).reduce((a, b) => a + b).toString().slice(2)));
        } else if (dec_type == "cyclic") {
            dec_val = parseInt(Math.random().toString().substr(2, Math.floor(Math.random() * 2 + 1)));
        } else {
            dec_val = parseInt(Math.random().toString().substr(2, Math.floor(Math.random() * 2 + 1) + 2));;
        }
        if (dec_val != 0 && dec_val % 10 == 0) dec_val = parseInt(dec_val.toString().replace(/0+$/g, ''));
        if (int_val == 0 && dec_val == 0) dec_val = 1;

        // Bits of integer part
        int_bits = int_val.toString(2).split("").map(digit => parseInt(digit));

        // Bits of decimal part & mantissa & exponent
        let got_10 = false;
        let got_cycle = false;
        if (dec_val == 0) {
            dec_first_bits = [0];
            dec_bits_cycle = [];
        } else {
            dec_first_bits = [];
            dec_bits_cycle = [];
            let dec_val_hist = [];
            let curr_val = parseFloat("0." + dec_val.toString());
            while (dec_first_bits.length < f) {
                let double_val = curr_val * 2;
                let digits_count = curr_val.toString().length;
                if (double_val == 1.0) {
                    dec_first_bits.push(1);
                    got_10 = true;
                    break;
                } else if (dec_val_hist.includes(curr_val)) {
                    let i = dec_val_hist.indexOf(curr_val);
                    dec_bits_cycle = dec_first_bits.slice(i);
                    dec_first_bits = dec_first_bits.slice(0, i);
                    got_cycle = true;
                    break;
                } else if (double_val > 1.0) {
                    dec_val_hist.push(curr_val);
                    curr_val = parseFloat("0" + double_val.toString().slice(1));
                    dec_first_bits.push(1);
                } else {
                    dec_val_hist.push(curr_val);
                    curr_val = double_val;
                    dec_first_bits.push(0);
                }
            }
        }

        // Reverse computing
        let int_bits_full = int_bits.join("").padStart(n, "0").split("").map(digit => parseInt(digit));
        let dec_bits_full = dec_first_bits.concat(dec_bits_cycle);
        if (got_cycle) while (dec_bits_full.length < f)
            dec_bits_full = dec_bits_full.concat(dec_bits_cycle);
        else while (dec_bits_full.length < f)
            dec_bits_full = dec_bits_full.concat([0]);
        dec_bits_full = dec_bits_full.slice(0, f)
        let full_val_computed = int_val;
        for (let i = 0; i < dec_bits_full.length; i++)
            full_val_computed += dec_bits_full[i] * 2 ** (-i - 1);
        bits = int_bits_full.concat(dec_bits_full);
        exact_dec = parseInt(dec_bits_full.map((v, i) => v * 2 ** (-i - 1)).reduce((a, b) => a + b).toString().slice(2));
        if (isNaN(exact_dec)) exact_dec = 0;
        let dec_bits_retro = (x => x == 0 ? "  0" : x)(parseFloat("0." + dec_bits_full.join(""))).toString().slice(2).split("").map(digit => parseInt(digit));

        // Spacing
        let int_bits_0_length = n - int_bits.length;
        let int_bits_length = int_bits.length;
        let dec_bits_length = (!got_cycle || got_10 ? dec_first_bits : dec_bits_full).length
        let dec_bits_0_length = (f - dec_bits_length)

        // Display of all variables
        on_all_elements("n", e => e.innerText = n);
        on_all_elements("f", e => e.innerText = f);
        on_all_elements("step", e => e.innerText = step.toString().replace(/\./g, ","));
        on_all_elements("max", e => e.innerText = number_to_string(max));
        on_all_elements("int_val", e => e.innerText = number_to_string(int_val));
        on_all_elements("int_bits", e => e.innerText = number_to_string(int_bits.join(""), 2));
        on_all_elements("dec_val", e => e.innerText = dec_val);
        on_all_elements("dec_first_bits", e => e.innerText = dec_first_bits.join(""));
        on_all_elements("dec_bits_cycle", e => e.innerText = dec_bits_cycle.join(""));
        on_all_elements("ellipsis", e => e.innerText = !got_10 && !got_cycle && dec_val != 0 ? "…" : "");
        on_all_elements("equal_sign", e => e.innerText = got_10 || got_cycle ? "=" : "≃");
        on_all_elements("full_val_computed", e => e.innerText = full_val_computed);
        on_all_elements("int_bits_0", e => e.innerText = number_to_string(bits.slice(0, int_bits_0_length).join(""), 2, int_bits_length + dec_bits_length + dec_bits_0_length));
        on_all_elements("int_bits_spaced", e => e.innerText = number_to_string(bits.slice(int_bits_0_length, int_bits_0_length + int_bits_length).join(""), 2, dec_bits_length + dec_bits_0_length));
        on_all_elements("dec_bits_spaced", e => e.innerText = number_to_string(bits.slice(int_bits_0_length + int_bits_length, int_bits_0_length + int_bits_length + dec_bits_length).join(""), 2, dec_bits_0_length));
        on_all_elements("dec_bits_0", e => e.innerText = number_to_string(bits.slice(int_bits_0_length + int_bits_length + dec_bits_length).join(""), 2));
        on_all_elements("bits", e => e.innerText = number_to_string(bits.join(""), 2));
        on_all_elements("exact_dec", e => e.innerText = exact_dec);
        document.getElementById("bits_answer_input").placeholder = `Bits en UQ${n}.${f}`;
        on_all_elements("dec_bits_retro", e => e.innerText = dec_bits_retro.join(""));
        on_all_elements("dec_bits_spaced_retro", e => e.innerText = number_to_string(dec_bits_retro.join(""), 2, f - dec_bits_retro.length));
        on_all_elements("dec_bits_0_retro", e => e.innerText = number_to_string("0".repeat(f - dec_bits_retro.length), 2));
        
        // Hide and show of cases
        on_all_elements("int_bits_is_0", e => e.style.display = int_val == 0 ? "" : "none");
        on_all_elements("int_bits_is_not_0", e => e.style.display = int_val != 0 ? "" : "none");
        on_all_elements("dec_bits_is_0", e => e.style.display = dec_val == 0 ? "" : "none");
        on_all_elements("dec_bits_no_cycle_no_10", e => e.style.display = !got_10 && !got_cycle && dec_val != 0 ? "" : "none");
        on_all_elements("dec_bits_no_cycle_10", e => e.style.display = got_10 ? "" : "none");
        on_all_elements("dec_bits_has_cycle", e => e.style.display =  got_cycle ? "" : "none");
        on_all_elements("dec_bits_exact", e => e.style.display = got_10 || dec_val == 0 ? "" : "none");
        on_all_elements("dec_bits_not_exact", e => e.style.display = !got_10 && dec_val != 0 ? "" : "none");

        // Reset submit
        document.getElementById("bits_answer_icon").className = "info-input-icon icon-waiting icon-color-white";
        document.getElementById("bits_answer_input").value = "";
    }

    function check_bits() {
        let submited_bits_icon = document.getElementById("bits_answer_icon");
        let submited_bits_string = document.getElementById("bits_answer_input").value;

        if (!/^[01 ]+$/.test(submited_bits_string)) {
            submited_bits_icon.className = "info-input-icon icon-error icon-color-orange";
            alert("Veuillez ne saisir que des 0 et des 1 comme réponse. Il est possible de saisir des espaces pour séparer visuellement les bits.");
        } else {
            let submited_bits = submited_bits_string.replaceAll(" ", "").split("");
            if (submited_bits.join("") === bits.join("")) {
                submited_bits_icon.className = "info-input-icon icon-success icon-color-green";
                success();
            } else {
                submited_bits_icon.className = "info-input-icon icon-failure icon-color-red";
            }
        }
    }

    function check_value() {
        let submited_value_icon = document.getElementById("value_answer_icon");
        let submited_value_string = document.getElementById("value_answer_input").value;

        if (!/^[\d ]+[,\.][\d ]+$/.test(submited_value_string)) {
            submited_value_icon.className = "info-input-icon icon-error icon-color-orange";
            alert("Veuillez saisir un nombre à virgule en décimal (exemple : “3,6”).");
        } else {
            let submited_value = parseFloat(submited_value_string.replaceAll(" ", "").replaceAll(",", "."));
            if (submited_value == int_val + parseFloat("0." + exact_dec.toString())) {
                submited_value_icon.className = "info-input-icon icon-success icon-color-green";
                success();
            } else {
                submited_value_icon.className = "info-input-icon icon-failure icon-color-red";
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

    function number_to_string(number, base = 10, from_right = 0) {
        let s = [];
        let chars = number.toString(base).split("").reverse();

        let i = from_right;
        for (let j = 0; j < chars.length; j++) {
            if (i != 0 && ((base == 2 && i % 4 == 0) || (base == 16 && i % 2 == 0) || (base != 2 && base != 16 && i % 3 == 0))) {
                s.push("\u00A0");
            }

            s.push(chars[j]);
            i++;
        }
        
        return s.reverse().join("");
    }

    function separate_on_indexes(str, indexes) {
        rep = "";
        for (let i = 0; i < str.length; i++) {
            if (indexes.includes(i))
                rep += "\u00A0";
            rep += str[i];
        }
        if (indexes.includes(str.length))
            rep += "\u00A0";
        return rep;
    }

    document.addEventListener("DOMContentLoaded", () => { n = 4; f = 4; update(); });
</script>