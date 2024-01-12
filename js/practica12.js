//Programa que suma números del 1 al 10
let suma = 0

// cuando      i     1 2 3 4  5  6
//------------------------------------
// entonces suma     0 1 3 6 10 
for (let i=1; i<=10; i++){
    
    console.log("El número sumado al total será = " + i + " + " + suma)
    suma = suma + i
    console.log("Total = "+suma)
}

console.log("RESULTADO FINAL: " + suma)