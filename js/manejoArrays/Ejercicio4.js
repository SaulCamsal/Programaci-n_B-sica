/*
Ejercicio 4 (Fácil):
Agregar ! al final de todos los elementos
*/
const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]

let newArr = caballeros.map((element) => 
    element+"!"
)
console.log(newArr)