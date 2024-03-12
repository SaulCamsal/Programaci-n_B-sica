//const url = "https://pokeapi.co/api/v2/pokemon/"
const url =  "https://catfact.ninja/facts"

//  []
/*
//  [Process]
function fnInsertPk (arr){
    //arr.sort((a, b) => a.name.localeCompare(b.name))        //  localCompare   es para ordenar Streings
    //const pokedexSpace = document.querySelector(".tbl")
    arr.forEach(pokemon => {
        const tbody = document.getElementById("tablaPokemon")

        const row = document.createElement("tr")
        row.innerHTML = `<td>${pokemon.name}</td> <td>${url + pokemon.name}/</td>`

        tbody.appendChild(row)
    })
}
*/
/*
fetch(url).then((response) => {
    console.log(response)
    return response.json()
}).then((data) => { 
    fnInsertPk(data.results); 
});
//          */

//  =================================== Ejercicio 2 ===================================  // 

//Ejercicio Ruleta Rusa gustos, Crear promesa que espere 2 segundos para contestar
//  un coinflip 50/50 de posibilidades entre las dos opciones

//  1 Exito => regresara una lista de cosas que te gustan
//  2 Error => lista de cosasa que te desagradan 
/*
const obtenerDatos = new Promise((resolve, reject) => {
    setTimeout(() => {
    const exito = false  
    const randNum = Math.random() // Simulación de éxito o fracaso
    if (randNum >= 0.5){
        exito = true
    }
    if (exito) {
    resolve('Datos obtenidos exitosamente'); // Resuelve la promesa con éxito
    } else {
    reject('Error al obtener datos'); // Rechaza la promesa con un error
    }
    }, 20); // Simulación de retardo de 2 segundos
    });
    // Consumir la promesa utilizando .then() y .catch()
    obtenerDatos.then((resultado) => {
    console.log(resultado); // Manejo del caso de éxito
    }).catch((error) => {
    console.error(error); // Manejo del caso de error
    });

*/

//  =================================== Ejercicio 3 CatFacts ===================================  // 

//      [Function]
const fnPrintCatFacts = (facts) =>{
    facts.forEach(fact => {
        const counter =+ 1 
        const lbody = document.getElementById("listaCatFactos")
        const row = document.createElement("ul")
        row.innerHTML = `<li>${counter}: Cats are...  ${fact.fact}. Lenght = ${fact.length} </li>`
        lbody.appendChild(row)
    });
}


//      [JS Promise]
fetch(url).then((response) => {
    
    return response.json()
}).then((data) => { 
    console.log(data)
    fnPrintCatFacts(data.data); 

});