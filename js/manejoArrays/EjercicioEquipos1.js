/*
Problema 1: 
Elimina los espacios entre palabras
[Input] const text="hola como estas el dia de hoy"
[Output] "holacomoestaseldiadehoy"
*/
const text="hola como estas el dia de hoy"
/*
const array = text.split(' ')

let nuevoTexto = array.join("") 
console.log (nuevoTexto)*/

//  text.replace(/\s/g,'')      <= exp regular
const textoNuevo = text.replace(/ /g,'')
console.log(textoNuevo)