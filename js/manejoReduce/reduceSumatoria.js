//Sumatorias de el siguiente array
const array = [1,2,3,4,5,6,7,8,9]
//Sumatoria de un array con un forEach
let acumulador = 0
array.forEach(element =>{
    acumulador+= element
})
console.log(acumulador)

//Sumatoria con REDUCE

const suma =  array.reduce(
    (acumulador,valorActual) => acumulador + valorActual,
    0
    )
console.log(suma)