//Contro de flujo

//Determina si un numero es par o inpar
//2,4,6,8,10 son pares
//los dema pues no vea ;v;
//El usuario puede agregar el numero que quiera

let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log( "Los numero actuales son : " + numeros);
let numeroUsuario = parseInt(process.argv[2])
console.log( "el ultimo agregado fue : " + numeroUsuario);
numeros.push(numeroUsuario)

console.log("Los numeros:")
for (let i = 0 ; i < numeros.length; i++)
{
    let num = numeros[i]
    residuo = num % 2
    if(residuo){
        console.log("- " + num + " es INPAR")
    }else{
        console.log("- " + num + " es PAR")
    } 

}
