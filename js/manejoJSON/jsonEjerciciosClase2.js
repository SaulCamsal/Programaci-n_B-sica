//Dividir en dos arreglos los que viven en una calle en uno y los que viven en avenida en otro

const array = [
    {
      nombre: "Juan",
      edad: 30,
      activo: true,
      intereses: ["programación", "viajes", "lectura"],
      direccion: {
        calle: "Calle Principal",
        numero: 123,
        ciudad: "Ciudad Principal"
      }
    },
    {
      nombre: "María",
      edad: 25,
      activo: false,
      intereses: ["música", "deportes", "arte"],
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
      intereses: ["fotografía", "naturaleza", "cocina"],
      direccion: {
        calle: "Calle de los Árboles",
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
      intereses: ["ciencia", "historia", "tecnología"],
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
      intereses: ["historia", "natacion", "tecnología"],
      direccion: {
        calle: "Avenida del Conocimiento",
        numero: 1213,
        ciudad: "Ciudad Quinta"
      }
    },
  ];

let arrayAvenue = array.map(element =>{
    if (element.direccion.calle.toLowerCase().includes("Avenida")){
        return element
    }    
})  
let arrayStreet = array.map(element =>{
    if (element.direccion.calle.toLowerCase().includes("Calle")){
        return element
    }    
}) 

console.log(arrayAvenue)


