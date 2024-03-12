//Contro de flujo

//Determina si un numero es par o inpar
//2,4,6,8,10 son pare
//los dema pues no vea ;v;
let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log( "Los numero son = " + numeros);

for (let i = 0 ; i < numeros.length; i++)
{
    let num = numeros[i]
    residuo = num % 2
    if(residuo){
        console.log("El número " + num + " es PAR")
    }else{
        console.log("El número " + num + " es INPAR")
    } 

}


/*
1
2
3
4
5
6
7
8
9
10
*/