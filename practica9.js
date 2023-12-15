/*
    Escribir un programa que a partir de un numero proporcionado por el usuario, 
    determinar si es negativo o positivo
*/
let numero = parseInt(process.argv[2])

if (numero > 0 ){
    console.log("El número " + numero + " es positivo c:")
}if (numero < 0 ){
    console.log("El número " + numero + " es negaivo :c")
}if (numero == 0){
    console.log("El número " + numero + " es cero ;-;")
}else{
    console.log("Eso ni es un número xd")
}