function encontrarPivote(arreglo){
    let numeros = arreglo
    let sumaIzq = 0
    let sumaDer = 0
    let pivote = true

    for(let i = 0; i < numeros.length; i++){
        sumaDer = 0
        for(let j = i+1; j < numeros.length; j++ ){
            sumaDer = sumaDer + numeros[j]
        }
           
        if (sumaDer == sumaIzq){
        return "para la cadena = " + arreglo + '\n' + "El indice pivote es: " + i
        } else{
            pivote = false
        }
        sumaIzq = sumaIzq + numeros[i]
    }
    
    if (pivote == false){
        
        return "para la cadena = " + arreglo + '\n' +  "El indice pivote no existe "
    }
}

let arreglo1 = encontrarPivote([1,7,3,6,5,6])

console.log(arreglo1)