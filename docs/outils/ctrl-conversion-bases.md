---
author: Anaël BARODINE
title: Contrôle de conversion de bases
hide:
  - toc
---

!!! question "Seed"
    Saisir **le seed** qui est **l'identifiant du sujet** ci-dessous.
    
    <div class="challenge-input">
        <label class="info-input-label" for="seed">Seed</label>
        <div class="info-input-div">
            <div id="bits_answer_icon" class="info-input-icon icon-waiting icon-color-white"></div>
            <input type="text" id="seed" class="info-input-input" spellcheck="false" placeholder="Identifiant du sujet" onchange="seed = this.value; update();">
        </div>
    </div>

!!! success "Exercice 1 – Conversion de bases"
    <ol style="list-style-type: lower-alpha;">
        <li>
            <span name="ex1_a_in">?</span><sub name="ex1_a_in_base">?</sub>
             = 
            <span name="ex1_a_out">?</span><sub name="ex1_a_out_base">?</sub>
        </li>
        <li>
            <span name="ex1_b_in">?</span><sub name="ex1_b_in_base">?</sub>
             = 
            <span name="ex1_b_out">?</span><sub name="ex1_b_out_base">?</sub>
        </li>
        <li>
            <span name="ex1_c_in">?</span><sub name="ex1_c_in_base">?</sub>
             = 
            <span name="ex1_c_out">?</span><sub name="ex1_c_out_base">?</sub>
        </li>
        <li>
            <span name="ex1_d_in">?</span><sub name="ex1_d_in_base">?</sub>
             = 
            <span name="ex1_d_out">?</span><sub name="ex1_d_out_base">?</sub>
        </li>
        <li>
            <span name="ex1_e_in">?</span><sub name="ex1_e_in_base">?</sub>
             = 
            <span name="ex1_e_out">?</span><sub name="ex1_e_out_base">?</sub>
        </li>
        <li>
            <span name="ex1_f_in">?</span><sub name="ex1_f_in_base">?</sub>
             = 
            <span name="ex1_f_out">?</span><sub name="ex1_f_out_base">?</sub>
        </li>
    </ol>

!!! success "Exercice 2 – Le nombre d'octets"
    <ol style="list-style-type: lower-alpha;">
        <li>
            <span name="ex2_a_in">?</span><sub name="ex2_a_in_base">?</sub>
             = 
            <span name="ex2_a_bin">?</span><sub>2</sub>
             → 
            <span name="ex2_a_bytes">?</span> octet(s)
        </li>
        <li>
            <span name="ex2_b_in">?</span><sub name="ex2_b_in_base">?</sub>
             = 
            <span name="ex2_b_bin">?</span><sub>2</sub>
             → 
            <span name="ex2_b_bytes">?</span> octet(s)
        </li>
        <li>
            <span name="ex2_c_in">?</span><sub name="ex2_c_in_base">?</sub>
             = 
            <span name="ex2_c_bin">?</span><sub>2</sub>
             → 
            <span name="ex2_c_bytes">?</span> octet(s)
        </li>
        <li>
            <span name="ex2_d_in">?</span><sub name="ex2_d_in_base">?</sub>
             = 
            <span name="ex2_d_bin">?</span><sub>2</sub>
             → 
            <span name="ex2_d_bytes">?</span> octet(s)
        </li>
    </ol>


<script>
    let seed = "first";
    let hash = seed;

    async function nextRandom(max) {
        const newHashBuffer = await window.crypto.subtle.digest("SHA-1", new TextEncoder().encode(hash));
        hash = Array.from(new Uint8Array(newHashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
        return Number(`0x${hash.substring(0, 4)}`) % max;
    }

    async function update() {
        if (seed === "")
            seed = "first";
        hash = seed;
        
        // Ex. 1
        let in_bases = [10, 2, 16, 10, 8, 10]
        let out_bases = [2, 10, 8, 8, 2, 16]
        for (let i = 0; i < in_bases.length; i++) {
            let n = 0;
            for (let p = 1; p <= 512; p *= 2)
                n += await nextRandom(2) * p;
            
            on_all_elements(`ex1_${String.fromCharCode(97 + i)}_in`, e => e.innerText = number_to_string(n, in_bases[i]));
            on_all_elements(`ex1_${String.fromCharCode(97 + i)}_in_base`, e => e.innerText = in_bases[i]);
            on_all_elements(`ex1_${String.fromCharCode(97 + i)}_out`, e => e.innerText = number_to_string(n, out_bases[i]));
            on_all_elements(`ex1_${String.fromCharCode(97 + i)}_out_base`, e => e.innerText = out_bases[i]);
        }

        // Ex. 2
        let bases = [10, 2, 8, 16]
        for (let i = 0; i < bases.length; i++) {
            let n = 0;
            if (i < 2)
                for (let p = 1; p <= 256; p *= 2)
                    n += await nextRandom(2) * p;
            else
                for (let p = 1; p <= 2 ** 32; p *= 2)
                    n += await nextRandom(2) * p;
            
            on_all_elements(`ex2_${String.fromCharCode(97 + i)}_in`, e => e.innerText = number_to_string(n, bases[i]));
            on_all_elements(`ex2_${String.fromCharCode(97 + i)}_in_base`, e => e.innerText = bases[i]);
            on_all_elements(`ex2_${String.fromCharCode(97 + i)}_bin`, e => e.innerText = number_to_string(n, 2));
            on_all_elements(`ex2_${String.fromCharCode(97 + i)}_bytes`, e => e.innerText = Math.ceil(n.toString(2).length / 8));
        }
    }

    document.addEventListener("DOMContentLoaded", () => { bits_count = 8; base = 10; update(); });
</script>