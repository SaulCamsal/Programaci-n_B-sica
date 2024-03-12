//Es un programa donde le pida al usuario n numeros y debe determinar cuál de todos los números es el menor
// n [1,5] y los números todos son positivos
// menor = 

// -3 -2 -1 0 1 2 3  .. infinito

// primer argumento (n)
//args (0)      (1)     (2)  3   4   5  6  7 
//    node practica15.js 4 100 500 450 50 
//    node practica15.js 2 0   1000
//    node practica15.js 5 5    4    3  2  1 
//si n <> fuera de los limites
//argumentos comienzan desde 2
let n = parseInt(process.argv[2])

//validar que n este en rango
if(n < 1 || n > 5){
    console.log("n esta fuera de rango")
    return;
}

let menor = Infinity

for(let i=3;i<=(n+2);i++){

    let numeroActual = parseInt(process.argv[i])
    //determina el nuevo menor
    if(menor > numeroActual)
        menor = numeroActual

}

//salida
console.log("El menor es "  + menor)


//Tip de ejecución  =>  definir primero la cantidad de números, luego los números a comparar 