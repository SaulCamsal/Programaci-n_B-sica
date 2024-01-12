//Leer un numero desde los argumentos (escrito en consola)
let numero = parseInt(process.argv[2])

//tabla de multiplicar del 1 al 10
for (let i=1; i<=10; i++){
    console.log(numero + " X " + i + " = " + (numero * i))
}