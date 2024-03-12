/*
Ejercicio 5 (No es Fácil):
Dame el total de las letras de todos los elementos de las palabras que
tengan una “i” (Mayúsucla o minúscula)
// => 20
*/

const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]
let counter = 0

caballeros.map((element) => {
    if (element.includes('i')){
        return counter = counter + element.length
    }
})

console.log(counter)