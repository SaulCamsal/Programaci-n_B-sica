/*
Ejercicio 3 (Fácil):
Contar el total de las letras de todos los elementos
5
*/
let elementLength = ""
const caballeros = ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]
caballeros.forEach((element) =>{
    elementLength = elementLength + ", " + element.length
})
console.log(elementLength)