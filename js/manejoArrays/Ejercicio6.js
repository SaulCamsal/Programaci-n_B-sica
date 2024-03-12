/*
Ejercicio 6 (No es Fácil):
El número de letras de la palabra más grande
// => 6
*/


const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]
let maxLengthWord = ""
let word = ""

caballeros.map((element) => {
    if (element.length> word.length && element.length> maxLengthWord.length){
        maxLengthWord = element
    }
    word = element
})

console.log(maxLengthWord.length)