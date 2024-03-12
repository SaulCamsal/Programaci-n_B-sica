
const url = "https://pokeapi.co/api/v2/pokemon/"; // Endpoint
/*
fetch(url) // va a regresar una promesa
.then((response) => response.json()) // Convertir a Json, regresa promesa
.then((data) => { // Resolviendo la promesa de json()
    console.log(data); // Imprime los datos convertidos
});
// */
/*  Copien la llamada y hagamos algunos ejercicios
        - Intenten imprimir la respuesta del fetch(url) (¿Comprensible?).
        - Crea un método para ordenar los pokemones por nombre e imprimirlos y ejécutalo.
        - El fetch ponlo en una función y mándalo llamar.
        - ¿Qué pasa si ejecutas un console.log después del método fetch? ¿Qué se ejecuta
            primero, los datos o este último console.log?
        - Crea un método que reciba el nombre de un pokemon y traiga sus datos.

*/



/////////////////////  - Intenten imprimir la respuesta del fetch(url) (¿Comprensible?).  /////////////////////
/*
fetch(url).then((response) => {
    console.log(response)
    return response.json()
}).then((data) => { 
    console.log(data); 
}); // */



//////////////////  - Crea un método para ordenar los pokemones por nombre e imprimirlos y ejécutalo. //////////////////
/*
function fnOrdenarPk (arr){
    arr.sort((a, b) => a.name.localeCompare(b.name))        //  localCompare   es para ordenar Streings
    arr.forEach(element => {
        console.log(element.name)
    })
}

fetch(url).then((response) => {
    //console.log(response)
    return response.json()
}).then((data) => { 
    fnOrdenarPk(data.results); 
});
//  */



/////////////////////   - El fetch ponlo en una función y mándalo llamar.   /////////////////////
/*
function fnLlamarFetch (url){
    fetch(url).then((response) => {
        console.log(response)
        return response.json()
    }).then((data) => { 
        //console.log(data); 
    });
}

fnLlamarFetch(url)


//        */
/////////////////////   - ¿Qué pasa si ejecutas un console.log después del método fetch?     /////////////////////
/////////                  ¿Qué se ejecuta primero, los datos o este último console.log?                //////////
/*
fetch(url).then((response) => {
    return response.json()
}).then((data) => { 
    console.log(data); 
}); 
console.log(fetch.response)


// */
/////////////////////   - Crea un método que reciba el nombre de un pokemon y traiga sus datos.     /////////////////////
let pokemon = "crobat"

function fnPokemonPorNombre(pokemon){
    let url = "https://pokeapi.co/api/v2/pokemon/" +  pokemon + '/'
    
    fetch(url).then((response) => {
        if (response.ok){
            return response.json()
        }    
    }).then((data) => { 
        console.log(data); 
    }); 
}

fnPokemonPorNombre(pokemon)

