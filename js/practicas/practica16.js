//Iteración en arreglos
let alumnos = ["Carlos", "Armando", "Jorge","Daniel","Roberto","Abraham"]


console.log("Contenido: ")
console.log(alumnos)
console.log("Tamaño: " + alumnos.length)

console.log("Primer elemento: " + alumnos[0])
console.log("último elemento: " + alumnos[alumnos.length-1])

console.log("En este programa hay varios arreglos")
console.log(process.argv)//argumentos

console.log("Otro arreglo en este programa tiene tamaño de: ")
console.log(alumnos[4].length)

//Armando dice 3
//Carlos undefined
//Daniel primeros 3 nombres
//Jorge dice 3

//para i iniciando en 0 hasta el tamaño de nombres(i<6), 
//incrementando en 1 el valor de i en cada iteración
for (let i=0;i<alumnos.length;i++){
    console.log("El nombre: " + alumnos[i] + " tiene " + alumnos[i].length + " letras")
}