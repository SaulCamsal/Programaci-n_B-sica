//Crear una función que ordene arrays   

function ordenarArreglo (arreglo){
    let numeros = arreglo

    for (let i = 0; i < numeros.length; i++ ){
        for (let j = 0; j <numeros.length ; j++){
            if (numeros[j] > numeros[j+1]){
                let aux = numeros[j+1] 
                numeros[j+1] = numeros [j]
                numeros [j] = aux
            }
        }
    } 
    return arreglo
}

//Ejecutar con estos dos valores
let arreglo1 = ordenarArreglo([50, 39, 78, 100, 55, 36, 17])
console.log(arreglo1)
let arreglo2 = ordenarArreglo([100, 50, -1])
console.log(arreglo2)