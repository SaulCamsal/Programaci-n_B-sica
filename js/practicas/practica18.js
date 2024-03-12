//Muestra la edad más grande de los valores del siguiente arreglo
let edades = []

// Llenar el arreglo con 550 valores numéricos aleatorios entre 1 y 450
for (let i = 0; i < 250; i++) {
    edades.push(Math.floor(Math.random() * 450) + 1);
}

console.log("El arreglo")
console.log(edades)

let mayor = -1


for (let indice=0;indice < edades.length;indice++){   
    if(mayor < edades[indice]){
        mayor = edades[indice] 
    }
}

console.log(mayor)

//edades.length == 6
//indice = 6
//mayor = 50