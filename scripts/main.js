"use strict";

function clearActive() {
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive(), counter >= sequence.length && (counter = 0), printSequence(counter), 
    document.getElementById("display").innerHTML = sequence[counter], counter++, setTimeout(stepSequence, frequency);
}

var frequency = 1e3, sequence = ['0000101', '1110101', '1111111', '1111111', '1111101', '0101101', '1110110', '1111011',
 '1111001', '0010101', '0100000'], elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;


window.onload = function() {
    stepSequence();
};
