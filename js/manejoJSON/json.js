const array = [
    {
      nombre: "Juan",
      edad: 30,
      activo: true,
      intereses: ["programaciÃ³n", "viajes", "lectura"],
      direccion: {
        calle: "Calle Principal",
        numero: 123,
        ciudad: "Ciudad Principal"
      }
    },
    {
      nombre: "MarÃ­a",
      edad: 25,
      activo: false,
      intereses: ["mÃºsica", "deportes", "arte"],
      direccion: {
        calle: "Avenida Central",
        numero: 456,
        ciudad: "Ciudad Secundaria"
      }
    },
    {
      nombre: "Pedro",
      edad: 35,
      activo: true,
      intereses: ["fotografÃ­a", "naturaleza", "cocina"],
      direccion: {
        calle: "Calle de los Ãrboles",
        numero: 789,
        ciudad: "Ciudad Terciaria"
      }
    },
    {
      nombre: "Ana",
      edad: 28,
      activo: true,
      intereses: ["teatro", "moda", "viajes"],
      direccion: {
        calle: "Avenida de las Flores",
        numero: 1011,
        ciudad: "Ciudad Cuarta"
      }
    },
    {
      nombre: "Luis",
      edad: 40,
      activo: false,
      intereses: ["ciencia", "historia", "tecnologÃ­a"],
      direccion: {
        calle: "Avenida del Saber",
        numero: 1213,
        ciudad: "Ciudad Quinta"
      }
    },
    {
      nombre: "Teresa",
      edad: 15,
      activo: false,
      intereses: ["historia", "natacion", "tecnologÃ­a"],
      direccion: {
        calle: "Avenida del Conocimiento",
        numero: 1213,
        ciudad: "Ciudad Quinta"
      }
    },
  ];
  
/*  Ejercicio 0
array.forEach((element) =>{
    console.log(element.nombre + " - "+ element.edad)  
})
*/

////////////////////////////////////////////////////////////////////////////
//Ejercicio 1

let intereses = [] 

array.forEach((element) => {
    intereses.push(...element.intereses)
})
/*
element.intereses.forEach((interes) =>{
        element.intereses.forEach((interes) =>{
        intereses.push(interes)
    })
})

*/

console.log(intereses)
////////////////////////////////////////////////////////////////////////////
//Ejercicio 2
/*
let info=false
 array.forEach((element)=>{
         if(element.activo==true){
             info=true
             }
    })
    console.log(info)

*/
////////////////////////////////////////////////////////////////////////////
//Ejercicio 3

//array.sort()

////////////////////////////////////////////////////////////////////////////
//Ejercicio 4
const activeUsers = array.filter((item) => item.activo)

let sumAges