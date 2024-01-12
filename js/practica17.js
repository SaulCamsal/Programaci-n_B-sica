//Muestra la suma de los valores del siguiente arreglo
let edades = [15,20,13,18,25,27,32,38]
let total = 0

for (let indice=0;indice < edades.length;indice++){
    total = total + edades[indice]    
}

console.log(total)
//edades.length == 8
//indice = 3
//total = 48