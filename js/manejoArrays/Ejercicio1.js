/*
Ejercicio 1 (Muy Fácil):
Contar los elementos del arreglo
// => 7
*/

const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]

let counter = 0
caballeros.forEach((element) => {
    counter++
})

console.log(counter)