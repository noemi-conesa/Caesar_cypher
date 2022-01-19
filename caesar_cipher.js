'use strict';

// function cypher(text, nr) {
//     let newWord = '';
//     for (let i = 0; i < text.length; i++) {
//         let asciiNr = text.charCodeAt(i);
//         asciiNr = asciiNr + nr;
//         newWord += String.fromCharCode(asciiNr);
//     }
//     return newWord;
// }



let btnEncr = document.getElementById('btn-encr');
let btnReset = document.getElementById('btn-reset');

let htmlNewWord = document.querySelector('.p-result');

btnEncr.addEventListener('click', function() {
    let newWord = '';
    let text = document.getElementById('inputtext').value;
    let nr = document.getElementById('number').value;
    if (nr % 26 === 0){
        nr = 26
        } else {
        nr = nr % 26;
        }
    for (let i = 0; i < text.length; i++) {
        let asciiNr = text.charCodeAt(i);
        let newNr = asciiNr + parseInt(nr);
        if (asciiNr > 64 && asciiNr < 91) {
            if (newNr > 90) {
                newNr = newNr - 90 + 64;
            }
            if (newNr < 65){
                newNr += 26;
            }
        }
        if (asciiNr > 96 && asciiNr < 123) {
            if (newNr > 122) {
                newNr = newNr - 122 + 96;
            }
            if (newNr < 97){
                newNr += 26;
            }
        }
        newWord += String.fromCharCode(newNr);
    }
    htmlNewWord.textContent = newWord;
})

btnReset.addEventListener('click', function() {
    htmlNewWord.textContent = '###';
    let htmlTextInput = document.querySelector('.txt-field');
    htmlTextInput.value = '';
    let htmlNr = document.querySelector('.nr-field');
    htmlNr.value = 0;
})