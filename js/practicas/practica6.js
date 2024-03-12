//Definir 2 números
let num1 = parseInt(process.argv[2])
let num2 = parseInt(process.argv[3])


//Operaciones Básicas
//+
let suma = num1 + num2
//-
let resta = num1 - num2
// /
let div = num1 / num2
// *
let mul = num1 * num2
//Imprimir todos los resultados
console.log("Los resultados son: " + "\n" +
"  Suma: " + suma, "\n" +
"  Resta: " + resta, "\n" + 
"  Division: " + div, "\n" +
"  Multiplicación: " + mul)