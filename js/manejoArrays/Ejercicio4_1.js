/*
Ejercicio 4.1 (Fácil):
Dame un arreglo con el total de letras de cada palabra
// => [5, 6, 5, 4, 4, 5, 5]
*/

const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]

let newArr = caballeros.map((element) => 
    element.length
)

console.log(newArr)

