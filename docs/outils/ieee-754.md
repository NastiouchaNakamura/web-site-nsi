---
author: Anaël BARODINE
title: Exercice IEEE-754
hide:
  - toc
---

=== "Valeur → IEEE-754"
    ## Valeur → IEEE-754

    <a href="#__tabbed_1_2">Exercice inverse ici</a>

    !!! abstract "Énoncé"
        <label>Choix de la précision : <select style="font-size: 1em;" onchange="precision = this.value; update();">
            <option value="binary16">Demi-précision — binary16 (16 bits)</option>
            <option value="binary32">Simple précision — binary32 (32 bits)</option>
            <option value="binary64">Double précision — binary64 (64 bits)</option>
        </select></label>
        
        Écrire le nombre non-entier **<span name="sign">?</span><span name="int_val">?</span>,<span name="dec_val">?</span><sub>10</sub>** sur **<span name="bits_count">?</span> bits** en **représentation flottante “<span name="precision">?</span>”** (norme IEEE-754).

        <div class="challenge-input">
            <input class="input-submit" type="button" value="Nouveau nombre" onclick="update();">
        </div>

    ??? tip "Rappel de la norme IEEE-754"
        <p style="text-align: center;">***Cette norme n'est pas à connaître par cœur et sera toujours fournie avec les exercices.***</p>

        La **norme IEEE-754** décrit **un ensemble de représentations des nombres non-entiers**, sur différentes tailles d'octets :

        | Nom | Nb. total de bits | Nb. de bits du signe |Nb. de bits de la mantisse | Nb. de bits de l'exposant | Biais de l'exposant δ<sub>e</sub> |
        |:-:|:-:|:-:|:-:|:-:|:-:|
        | Demi-précision — binary16 | 16 | 1 | 10 | 5 | 15 |
        | Simple précision — binary32 | 32 | 1 | 23 | 8 | 127 |
        | Double précision — binary64 | 64 | 1 | 52 | 11 | 1 023 |
        | Quadruple précision — binary128 | 128 | 1 | 112 | 15 | 16 383 |
        | Octuple précision — binary256 | 256 | 1 | 236 | 19 | 262 143 |

        Pour **chaque précision**, le principe est identique : on **représente** un **nombre non-entier** par le biais de son **écriture binaire en notation à virgule flottante** (qu'on appelle aussi “**écriture scientifique**”) de la forme :

        <p style="text-align: center;">
            **s × m<sub>2</sub> × 2<sup>e<sub>10</sub></sup>**, avec…
        </p>

        <div style="display: flex; flex-direction: row;">
            <div style="width: 31%;">
                <p style="text-align: center;">
                    **s** ∈ {-1 ; +1},<br> le **signe**.
                </p>
            </div>
            <div style="width: 1px; margin-left: calc(2% - 0.1px); margin-right: calc(2% - 0.1px); background-color: var(--md-admonition-fg-color);"></div>
            <div style="width: 30%;">
                <p style="text-align: center;">
                    **m** ∈ [1 ; 2[,<br> la **mantisse**, écrite en binaire.
                </p>
            </div>
            <div style="width: 1px; margin-left: calc(2% - 0.1px); margin-right: calc(2% - 0.1px); background-color: var(--md-admonition-fg-color);"></div>
            <div style="width: 31%;">
                <p style="text-align: center;">
                    **e** ∈ ℤ,<br> l'**exposant**, écrit en décimal.
                </p>
            </div>
        </div>

        **Ces trois valeurs s, m et e** sont **représentées** par les représentations de la **norme IEEE-754** de manière différente pour chacune :

        <div style="display: flex; flex-direction: row;">
            <div style="width: 31%;">
                <p style="text-align: center;">
                    **[0 si s = +1, 1 si s = -1]** pour **s**.
                </p>
            </div>
            <div style="width: 1px; margin-left: calc(2% - 0.1px); margin-right: calc(2% - 0.1px); background-color: var(--md-admonition-fg-color);"></div>
            <div style="width: 30%;">
                <p style="text-align: center;">
                    **[partie non-entière de m]** pour **m**,<br>ce qui revient à écrire les bits uniquement à **droite de la virgule** de m.
                </p>
            </div>
            <div style="width: 1px; margin-left: calc(2% - 0.1px); margin-right: calc(2% - 0.1px); background-color: var(--md-admonition-fg-color);"></div>
            <div style="width: 31%;">
                <p style="text-align: center;">
                    **[e + δ<sub>e</sub>]** pour **e**,<br>δ<sub>e</sub> sert à empêcher les valeurs négatives.
                </p>
            </div>
        </div>

        La **représentation complète** du **nombre non-entier de départ** sera la **concaténation des représentations** de **s**, **e** et **m**, dans cet ordre :

        <p style="text-align: center;">
            **[0 si s = +1, 1 si s = -1 ⋮ e + δ<sub>e</sub> ⋮ partie non-entière de m]<sup>précision</sup>**,<br>où **précision** est **une des précisions** proposées par la norme : **binary16**, **binary32**, etc…
        </p>

    !!! question "Réponse"
        <div class="challenge-input">
            <label class="info-input-label" for="bits_answer_input">Réponse</label>
            <div class="info-input-div">
                <div id="bits_answer_icon" class="info-input-icon icon-waiting"></div>
                <span class="info-input-credential-separator">[</span>
                <input type="text" id="bits_answer_input" class="info-input-input" style="width: revert; field-sizing: content;" spellcheck="false" placeholder="Bits en binary16">
                <span class="info-input-credential-separator">]<sup style="font-size: small;">bin<span name="bits_count"></sup></span>
            </div>
            <input class="input-submit" type="button" value="Vérifier la réponse" onclick="check_bits();">
        </div>

    ??? success "Correction"
        ### ① Convertir en binaire

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
                        Pour la **partie non-entière** (à droite de la virgule), on utilise la technique des **multiplications par 2 successives** pour trouver : 
                    </p>
                    <p style="text-align: center;">
                        0,<span name="dec_val"></span><sub>10</sub> = 0,<span name="dec_first_bits"></span>…<sub>2</sub>
                    </p>
                    <p>
                        **On n'est pas tombé sur 1,0** après une multiplication, et il n'y a **aucune période** dans cette partie non-entière, donc **on a continué les calculs** jusqu'à avoir **assez de bits pour la mantisse**.
                    </p>
                </div>
                <div name="dec_bits_no_cycle_10">
                    <p>
                        Pour la **partie non-entière** (à droite de la virgule), on utilise la technique des **multiplications par 2 successives** pour trouver : 
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
                        Pour la **partie non-entière** (à droite de la virgule), on utilise la technique des **multiplications par 2 successives** pour trouver : 
                    </p>
                    <p style="text-align: center;">
                        0,<span name="dec_val"></span><sub>10</sub> = 0,<span name="dec_first_bits"></span><span name="dec_bits_cycle" style="text-decoration: overline;"></span><sub>2</sub>
                    </p>
                    <p>
                        On est tombé sur **une période** (partie souslignée), ce qui nous a permis **d'arrêter les calculs**.
                    </p>
                </div>
                <div name="dec_bits_is_0">
                    <p>
                        La **partie non-entière** (à droite de la virgule), est **0**, en décimal comme en binaire : 
                    </p>
                    <p style="text-align: center;">
                        0,0<sub>10</sub> = 0,0<sub>2</sub>
                    </p>
                </div>
            </div>
        </div>
        
        On a donc **le nombre non-entier binaire** :

        <p style="text-align: center;">
            <span name="int_bits"></span>,<span name="dec_first_bits"></span><span name="dec_bits_cycle" style="text-decoration: overline;"></span><span name="ellipsis"></span><sub>2</sub>
        </p>
        
        ### ② Écrire le nombre en notation à virgule flottante

        On écrit le nombre en **notation à virgule flottante** (“notation scientifique”), **en binaire** (donc avec des puissances de 2). Pour cela, on **décale la virgule** de sorte à **ne laisser qu'un seul 1 à gauche** de la virgule :

        <p style="text-align: center;">
            <span name="equal_sign"></span> <span name="sign" style="color: #ff9100;"></span><span style="color: #00c853;">1,</span><span name="floating_point_dec_bits" style="color: #00c853;"></span><sub>2</sub> × 2<sup><span name="exponent" style="color: #00b0ff;"></span></sup>
        </p>

        On identifie **le signe <span style="color: #ff9100;">s</span> = <span style="color: #ff9100;"><span name="sign"></span>1</span>**, **la mantisse <span style="color: #00c853;">m</span> = <span style="color: #00c853;">1,<span name="floating_point_dec_bits"></span></span>** et **l'exposant <span style="color: #00b0ff;">e</span> = <span style="color: #00b0ff;" name="exponent"></span>**.

        ### ③ Déterminer les représentations de s, m et e

        La **norme IEEE-754**, pour la **représentation flottante “<span name="precision"></span>”** nous donne les **méthodes de représentation** et le **nombre de bits** pour **<span style="color: #ff9100;">s</span>**, **<span style="color: #00c853;">m</span>** et **<span style="color: #00b0ff;">e</span>** :
        
        <p style="text-align: center;">
            <span style="color: #ff9100;">s</span> = <span style="color: #ff9100;"><span name="sign"></span>1</span> → [0 si <span style="color: #ff9100;">s</span> = +1, 1 si <span style="color: #ff9100;">s</span> = -1] = [<span name="sign_bit" style="color: #ff9100;"></span>]
        </p>
        <p style="text-align: center;">
            <span style="color: #00c853;">m</span> = <span style="color: #00c853;">1,<span name="floating_point_dec_bits"></span></span> → [partie non-entière de <span style="color: #00c853;">m</span> sur <span name="mantissa_length"></span> bits] = [<span name="floating_point_dec_bits_spaced" style="color: #00c853;"></span>]
        </p>
        <p style="text-align: center;">
            <span style="color: #00b0ff;">e</span> = <span style="color: #00b0ff;" name="exponent"></span> → [<span style="color: #00b0ff;">e</span> + δ<sub>e</sub> sur <span name="exponent_length"></span> bits] = [<span name="exponent" style="color: #00b0ff;"></span> + <span name="bias"></span> = <span name="biased_exponent"></span> sur <span name="exponent_length"></span> bits] = [<span name="biased_exponent_bits" style="color: #00b0ff;"></span>]
        </p>

        ### ④ Combiner les représentations

        On combine les représentations, dans l'ordre <span style="color: #ff9100;">s</span>, <span style="color: #00b0ff;">e</span> et <span style="color: #00c853;">m</span> :
        
        <p style="text-align: center;">
            [<span name="sign_bit" style="color: #ff9100;"></span><span name="combined_bits"><span name="combined_biased_exponent_bits" style="color: #00b0ff;"></span><span name="floating_point_dec_bits_spaced" style="color: #00c853;"></span></span>]<sup>bin<span name="bits_count"></span></sup>
        </p>
    
=== "IEEE-754 → valeur"
    ## IEEE-754 → valeur
    
    <a href="#__tabbed_1_1">Exercice inverse ici</a>

    !!! abstract "Énoncé"
        <label>Choix de la précision : <select style="font-size: 1em;" onchange="precision = this.value; update();">
            <option value="binary16">Demi-précision — binary16 (16 bits)</option>
            <option value="binary32">Simple précision — binary32 (32 bits)</option>
            <option value="binary64">Double précision — binary64 (64 bits)</option>
        </select></label>
        
        Trouver **la valeur du nombre non-entier** (*arrondie au centième si besoin*) qui est représenté en **représentation flottante “<span name="precision">?</span>”** par les bits [<span name="sign_bit"></span><span name="combined_bits"><span name="combined_biased_exponent_bits"></span><span name="floating_point_dec_bits_spaced"></span></span>]<sup>bin<span name="bits_count">?</span></sup>.

        <div class="challenge-input">
            <input class="input-submit" type="button" value="Nouveau nombre" onclick="update();">
        </div>

    ??? tip "Rappel de la norme IEEE-754"
        <p style="text-align: center;">***Cette norme n'est pas à connaître par cœur et sera toujours fournie avec les exercices.***</p>

        La **norme IEEE-754** décrit **un ensemble de représentations des nombres non-entiers**, sur différentes tailles d'octets :

        | Nom | Nb. total de bits | Nb. de bits du signe |Nb. de bits de la mantisse | Nb. de bits de l'exposant | Biais de l'exposant δ<sub>e</sub> |
        |:-:|:-:|:-:|:-:|:-:|:-:|
        | Demi-précision — binary16 | 16 | 1 | 10 | 5 | 15 |
        | Simple précision — binary32 | 32 | 1 | 23 | 8 | 127 |
        | Double précision — binary64 | 64 | 1 | 52 | 11 | 1 023 |
        | Quadruple précision — binary128 | 128 | 1 | 112 | 15 | 16 383 |
        | Octuple précision — binary256 | 256 | 1 | 236 | 19 | 262 143 |

        Pour **chaque précision**, le principe est identique : on **représente** un **nombre non-entier** par le biais de son **écriture binaire en notation à virgule flottante** (qu'on appelle aussi “**écriture scientifique**”) de la forme :

        <p style="text-align: center;">
            **s × m<sub>2</sub> × 2<sup>e<sub>10</sub></sup>**, avec…
        </p>

        <div style="display: flex; flex-direction: row;">
            <div style="width: 31%;">
                <p style="text-align: center;">
                    **s** ∈ {-1 ; +1},<br> le **signe**.
                </p>
            </div>
            <div style="width: 1px; margin-left: calc(2% - 0.1px); margin-right: calc(2% - 0.1px); background-color: var(--md-admonition-fg-color);"></div>
            <div style="width: 30%;">
                <p style="text-align: center;">
                    **m** ∈ [1 ; 2[,<br> la **mantisse**, écrite en binaire.
                </p>
            </div>
            <div style="width: 1px; margin-left: calc(2% - 0.1px); margin-right: calc(2% - 0.1px); background-color: var(--md-admonition-fg-color);"></div>
            <div style="width: 31%;">
                <p style="text-align: center;">
                    **e** ∈ ℤ,<br> l'**exposant**, écrit en décimal.
                </p>
            </div>
        </div>

        **Ces trois valeurs s, m et e** sont **représentées** par les représentations de la **norme IEEE-754** de manière différente pour chacune :

        <div style="display: flex; flex-direction: row;">
            <div style="width: 31%;">
                <p style="text-align: center;">
                    **[0 si s = +1, 1 si s = -1]** pour **s**.
                </p>
            </div>
            <div style="width: 1px; margin-left: calc(2% - 0.1px); margin-right: calc(2% - 0.1px); background-color: var(--md-admonition-fg-color);"></div>
            <div style="width: 30%;">
                <p style="text-align: center;">
                    **[partie non-entière de m]** pour **m**,<br>ce qui revient à écrire les bits uniquement à **droite de la virgule** de m.
                </p>
            </div>
            <div style="width: 1px; margin-left: calc(2% - 0.1px); margin-right: calc(2% - 0.1px); background-color: var(--md-admonition-fg-color);"></div>
            <div style="width: 31%;">
                <p style="text-align: center;">
                    **[e + δ<sub>e</sub>]** pour **e**,<br>δ<sub>e</sub> sert à empêcher les valeurs négatives.
                </p>
            </div>
        </div>

        La **représentation complète** du **nombre non-entier de départ** sera la **concaténation des représentations** de **s**, **e** et **m**, dans cet ordre :

        <p style="text-align: center;">
            **[0 si s = +1, 1 si s = -1 ⋮ e + δ<sub>e</sub> ⋮ partie non-entière de m]<sup>précision</sup>**,<br>où **précision** est **une des précisions** proposées par la norme : **binary16**, **binary32**, etc…
        </p>

    !!! question "Réponse"
        <div class="challenge-input">
            <label class="info-input-label" for="value_answer_input">Réponse</label>
            <div class="info-input-div">
                <div id="value_answer_icon" class="info-input-icon icon-waiting"></div>
                <span class="info-input-credential-separator"></span>
                <input type="text" id="value_answer_input" class="info-input-input" style="width: revert; field-sizing: content;" spellcheck="false" placeholder="Valeur décimale">
                <span class="info-input-credential-separator"><sub style="font-size: small;">10</sub></span>
            </div>
            <input class="input-submit" type="button" value="Vérifier la réponse" onclick="check_value();">
        </div>

    ??? success "Correction"
        ### ① Identifier les représentations de s, m et e

        On identifie **les représentations de <span style="color: #ff9100;">s</span>, <span style="color: #00c853;">m</span> et <span style="color: #00b0ff;">e</span>**, à l'aide du nombre de bits de chaque, indiquées par la **norme IEEE-754** pour la **représentation flottante “<span name="precision"></span>”** :

        <p style="text-align: center;">
            [<span name="sign_bit" style="color: #ff9100;"></span><span name="combined_bits"><span name="combined_biased_exponent_bits" style="color: #00b0ff;"></span><span name="floating_point_dec_bits_spaced" style="color: #00c853;"></span></span>]<sup>bin<span name="bits_count"></span></sup>
        </p>

        On a donc **[<span name="sign_bit" style="color: #ff9100;"></span>] pour <span style="color: #ff9100;">s</span>**, **[<span name="floating_point_dec_bits_spaced" style="color: #00c853;"></span>] pour <span style="color: #00c853;">m</span>** et **[<span name="biased_exponent_bits" style="color: #00b0ff;"></span>] pour <span style="color: #00b0ff;">e</span> = <span style="color: #00b0ff;" name="exponent"></span>**.

        ### ② Retrouver les valeurs de s, m et e

        À l'aide des indications de la **norme IEEE-754**, pour la **représentation flottante “<span name="precision"></span>”** on retrouve les **valeurs** de **<span style="color: #ff9100;">s</span>**, **<span style="color: #00c853;">m</span>** et **<span style="color: #00b0ff;">e</span>** :

        <p style="text-align: center;">
            <span style="color: #ff9100;">s</span> → [0 si <span style="color: #ff9100;">s</span> = +1, 1 si <span style="color: #ff9100;">s</span> = -1], donc [<span name="sign_bit" style="color: #ff9100;"></span>] représente <span style="color: #ff9100;">s</span> = <span style="color: #ff9100;"><span name="sign"></span>1</span>
        </p>
        <p style="text-align: center;">
            <span style="color: #00c853;">m</span> → [partie non-entière de <span style="color: #00c853;">m</span>], donc [<span name="floating_point_dec_bits_spaced" style="color: #00c853;"></span>] représente <span style="color: #00c853;">1,<span name="floating_point_dec_bits"></span></span>
        </p>
        <p style="text-align: center;">
            <span style="color: #00b0ff;">e</span> → [<span style="color: #00b0ff;">e</span> + δ<sub>e</sub>], donc <span style="color: #00b0ff;">e</span> = <span name="biased_exponent"></span> - δ<sub>e</sub> = <span name="biased_exponent"></span> - <span name="bias"></span> = <span style="color: #00b0ff;" name="exponent"></span>
        </p>

        ### ③ Recomposer le nombre en notation à virgule flottante

        On utilise **<span style="color: #ff9100;">s</span>**, **<span style="color: #00c853;">m</span>** et **<span style="color: #00b0ff;">e</span>** pour **écrire le nombre en binaire** en **notation à virgule flottante** :

        <p style="text-align: center;">
            <span name="equal_sign"></span> <span name="sign" style="color: #ff9100;"></span><span style="color: #00c853;">1,</span><span name="floating_point_dec_bits" style="color: #00c853;"></span><sub>2</sub> × 2<sup><span name="exponent" style="color: #00b0ff;"></span></sup>
        </p>

        On a donc le nombre non-entier binaire :

        <p style="text-align: center;">
            <span name="sign"></span><span name="int_bits"></span>,<span name="dec_bits_full"></span><sub>2</sub>
        </p>

        ### ④ Convertir en décimal

        <div name="dec_bits_not_exact">
            <p>
                On utilise la méthode de la **somme des puissances de 2** pour obtenir la **valeur décimale** (*comme on cherche la valeur au centième près, on s'arrête à 2<sup>-6</sup>*) :
            </p>
            <p style="text-align: center;">
                <span name="sign"></span><span name="int_bits"></span>,<span name="dec_bits_full"></span><sub>2</sub> = <span name="sign"></span><span name="full_val_computed"></span><sub>10</sub> ≃ <span name="sign"></span><span name="int_val"></span>,<span name="dec_val">?</span><sub>10</sub>
            </p>
        </div>
        <div name="dec_bits_exact">
            <p>
                On utilise la méthode de la **somme des puissances de 2** pour obtenir la **valeur décimale** :
            </p>
            <p style="text-align: center;">
                <span name="sign"></span><span name="int_bits"></span>,<span name="dec_bits_full"></span><sub>2</sub> = <span name="sign"></span><span name="int_val"></span>,<span name="dec_val">?</span><sub>10</sub>
            </p>
        </div>



<script>
    let precision;
    let bits_count;
    let sign;
    let int_val;
    let int_bits;
    let dec_case;
    let dec_val;
    let dec_first_bits;
    let dec_bits_cycle;
    let mantissa_length;
    let mantissa;
    let bits;

    function update() {
        // Bits count
        if (precision == "binary32") {
            bits_count = 32;
            mantissa_length = 24;
        } else if (precision == "binary64") {
            bits_count = 64;
            mantissa_length = 53;
        } else {
            precision = "binary16";
            bits_count = 16;
            mantissa_length = 11;
        }

        // Number
        sign = Math.random() > 0.5 ? -1 : +1;
        int_val = Math.random() > 0.5 ? Math.floor(Math.random() * 80) + 1 : 0;
        let dec_len = Math.floor(Math.random() * 3 + 1);
        dec_val = parseInt(Math.random().toString().substr(2, dec_len));
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
            mantissa = int_bits.slice();
            while (mantissa.length < mantissa_length)
                mantissa.push(0);
        } else {
            dec_first_bits = [];
            dec_bits_cycle = [];
            mantissa = int_val == 0 ? [] : int_bits.slice();
            let dec_val_hist = [];
            let curr_val = parseFloat("0." + dec_val.toString());
            while (mantissa.length < mantissa_length) {
                let double_val = curr_val * 2;
                let digits_count = curr_val.toString().length;
                if (double_val == 1.0) {
                    dec_first_bits.push(1);
                    mantissa.push(1);
                    while (mantissa.length < mantissa_length)
                        mantissa.push(0);
                    got_10 = true;
                } else if (dec_val_hist.includes(curr_val)) {
                    let i = dec_val_hist.indexOf(curr_val);
                    dec_bits_cycle = dec_first_bits.slice(i);
                    dec_first_bits = dec_first_bits.slice(0, i);
                    mantissa = int_bits.slice().concat(dec_first_bits).concat(dec_bits_cycle);
                    mantissa = mantissa.slice(mantissa.indexOf(1));
                    while (mantissa.length < mantissa_length)
                        mantissa = mantissa.concat(dec_bits_cycle);
                    mantissa = mantissa.slice(0, mantissa_length);
                    got_cycle = true;
                } else if (double_val > 1.0) {
                    dec_val_hist.push(curr_val);
                    curr_val = parseFloat("0" + double_val.toString().slice(1));
                    dec_first_bits.push(1);
                    mantissa.push(1);
                } else {
                    dec_val_hist.push(curr_val);
                    curr_val = double_val;
                    dec_first_bits.push(0);
                    if (mantissa.length != 0)
                        mantissa.push(0);
                }
            }
        }

        // Exponent
        if (int_val == 0) {
            exponent = -int_bits.concat(dec_first_bits).concat(dec_bits_cycle).indexOf(1);
        } else {
            exponent = int_bits.length - 1;
        }

        // Floating point number
        let bias = 2 ** (bits_count - mantissa_length - 1) - 1;
        let biased_exponent = exponent + bias;
        let biased_exponent_bits = biased_exponent.toString(2).padStart(bits_count - mantissa_length, "0").split("").map(digit => parseInt(digit));
        bits = (sign > 0 ? [0] : [1]).concat(biased_exponent_bits).concat(mantissa.slice(1));

        // Reverse computing
        let dec_bits_full = exponent >= 0 ? mantissa.slice(exponent + 1).join("") : Array.from({length: -exponent - 1}, _ => 0).concat(mantissa).join("");
        let full_val_computed = int_val;
        for (let i = 0; i < dec_bits_full.length; i++)
            full_val_computed += dec_bits_full[i] * 2 ** (-i - 1);


        // Display of all variables
        on_all_elements("bits_count", e => e.innerText = bits_count);
        on_all_elements("precision", e => e.innerText = precision);
        on_all_elements("sign", e => e.innerText = sign == -1 ? "-" : "+")
        on_all_elements("int_val", e => e.innerText = number_to_string(int_val));
        on_all_elements("int_bits", e => e.innerText = number_to_string(int_bits.join(""), 2));
        on_all_elements("dec_val", e => e.innerText = dec_val);
        on_all_elements("dec_first_bits", e => e.innerText = dec_first_bits.join(""));
        on_all_elements("dec_bits_cycle", e => e.innerText = dec_bits_cycle.join(""));
        on_all_elements("ellipsis", e => e.innerText = !got_10 && !got_cycle && dec_val != 0 ? "…" : "");
        on_all_elements("equal_sign", e => e.innerText = got_10 || got_cycle ? "=" : "≃");
        on_all_elements("floating_point_dec_bits", e => e.innerText = mantissa.slice(1).join(""));
        on_all_elements("floating_point_dec_bits_spaced", e => e.innerText = number_to_string(mantissa.slice(1).join(""), 2));
        on_all_elements("exponent", e => e.innerText = exponent);
        on_all_elements("sign_bit", e => e.innerText = sign == -1 ? "1" : "0")
        on_all_elements("mantissa_length", e => e.innerText = mantissa_length - 1);
        on_all_elements("exponent_length", e => e.innerText = bits_count - mantissa_length);
        on_all_elements("bias", e => e.innerText = 2 ** (bits_count - mantissa_length - 1) - 1);
        on_all_elements("biased_exponent", e => e.innerText = biased_exponent);
        on_all_elements("biased_exponent_bits", e => e.innerText = number_to_string(biased_exponent_bits.join(""), 2));
        on_all_elements("combined_biased_exponent_bits", e => e.innerText = separate_on_indexes(biased_exponent_bits.join(""), [3, 7, 11]));
        on_all_elements("dec_bits_full", e => e.innerText = dec_bits_full);
        on_all_elements("full_val_computed", e => e.innerText = full_val_computed);
        document.getElementById("bits_answer_input").placeholder = "Bits en " + precision;
        
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

    function check_value() {
        let submited_value_icon = document.getElementById("value_answer_icon");
        let submited_value_string = document.getElementById("value_answer_input").value;

        if (!/^[-+]? *\d+[,\.]\d+$/.test(submited_value_string)) {
            submited_value_icon.className = "info-input-icon icon-error";
            alert("Veuillez saisir un nombre avec virgule en décimal, avec le signe (exemple : “-3,6”).");
        } else {
            let submited_value = parseFloat(submited_value_string.replaceAll(" ", "").replaceAll(",", "."));
            if (Math.abs(submited_value - parseFloat((sign > 0 ? "+" : "-") + int_val.toString() + "." + dec_val.toString())) < 0.05) {
                submited_value_icon.className = "info-input-icon icon-success";
                success();
            } else {
                submited_value_icon.className = "info-input-icon icon-failure";
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
        if (indexes.includes(str.length))
            rep += "\u00A0";
        return rep;
    }

    document.addEventListener("DOMContentLoaded", () => { bits_count = 8; base = 10; update(); });
</script>