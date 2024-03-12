
const url =  "https://catfact.ninja/facts"
const url_images = "https://api.thecatapi.com/v1/images/search"

//  =================================== Ejercicio 3 CatFacts ===================================  // 

//      [Function]  
/*
const fnPrintCatFacts = (facts) =>{
    facts.forEach(fact => {
        const counter =+ 1 
        const lbody = document.getElementById("listaCatFactos")
        const row = document.createElement("ul")
        row.innerHTML = `<li>${counter}: Cats are...  ${fact.fact}. Lenght = ${fact.length} </li>`
        lbody.appendChild(row)
    });
}
//      */
const cardTemplate = document.getElementById("cardTemplate").innerHTML


//      [JS Promise]
fetch(url).then((response) => 
    response.json()
).then((data) =>{ 
    document.getElementById("content").innerHTML= ""
    let i=0;
    response.data.forEach(fact => {
        fetch(url_images).then(rs => rs.json().then((img) => {
            i++;
            document.getElementById("content").innerHTML +=
            cardTemplate.replace("_FACT_TEXT_",fact.fact)
            .replace("_FACT_NUMBER_",i)
            .replace("_URL_IMAGE_",img[0].url)
        })
        )

    });


    /*console.log(data)
    fnPrintCatFacts(data.data); 
*/
});