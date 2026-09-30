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

    let pad = 3; // Default
    if (base == 2)
        pad = 4;
    else if (base == 16)
        pad = 2;

    let i = from_right;
    for (let j = 0; j < chars.length; j++) {
        if (i != 0 && i % pad == 0) {
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