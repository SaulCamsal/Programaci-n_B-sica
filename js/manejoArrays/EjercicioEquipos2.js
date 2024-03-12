/*
Problema 2:
Identifica en un arreglo las palabras que contengan 
"t" y muevelas al inicio del arreglo
[Input] ["Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori", "Tenma"]
[Output] ["Tenma"."Seiya", "Shiryu", "Hyōga", "Shun", "Ikki", "Saori"]
*/

const caballeros = ["Seiya", "Shiryu", "Hyōga", "Tatsumi","Shun", "Ikki", "Saori", "Tenma"]

/*      Error
let nuevoArr = caballeros.forEach((element) => {
    if (element.includes('t')){
        caballeros.unshift(element)
    }
})

console.log(caballeros)*/

//  const newarr = arr      MAL
//  const newArr = […arr]   Correcto

let nuevoArray = []

caballeros.forEach((element) => {
    if (element.toLowerCase().includes('t')){
        nuevoArray.unshift(element)
    }else{
        nuevoArray.push(element)
    }
    
})

console.log(nuevoArray)