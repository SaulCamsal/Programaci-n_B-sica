//Escribir un programa que encuentre el indice pivote
//Un indice pivote es aquel que divide el arreglo (sin considerarse) en 2 sumas iguales
// [1,7,3,6,5,6] el indice pivote es 3 suma izq [1,7,3] = 11 y la suma derecha [5,6] = 11
// [1,2,3] el indice es -1 no hay indice pivote
// [2,1,-1] el indice pivote es 0  suma izq 0 ( no hay elementos ) suma derecha es [1,-1] = 0

//pista 1 : son varios ciclos
//pista 2 : los ciclos pueden ser uno dentro del otro
//pista 3 : necesitas llevar la suma izq y la derecha para poder compararlos
//pista 4 : utiliza return para terminar el programa

let numeros = [1,7,3,6,5,6]
let sumaIzq = 0
let sumaDer = 0
let pivote = true

for(let i = 0; i < numeros.length; i++){
    sumaDer = 0
    for(let j = i+1; j < numeros.length; j++ ){
        sumaDer = sumaDer + numeros[j]
    }
           
    if (sumaDer == sumaIzq){
    console.log("El indice pivote es = " + i)
    return
    } else{
        pivote = false
    }
    sumaIzq = sumaIzq + numeros[i]
}
if (pivote == false){
    console.log("El indice pivote no existe en el arreglo ")
}

/*
if(sumIzq == sumDer)
    return
console.log(indice)
*/