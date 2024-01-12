


function saludar(){
    //acceso al DOM por medio del Id 
    let elementoSection =  document.getElementById('resultado')
    let txtNombre = document.getElementById('txtNombre')
    
    elementoSection.innerText = "Hola muy buenas tardes, " + txtNombre.value
}

function llamarAOrdenar(){
    let elementoNumeros = document.getElementById('txtNumeros')
    //JSON.parse convierte cadenas a valores 
    let arreglo1 = JSON.parse(elementoNumeros.value)
    let resultado = ordenarArreglo(arreglo1)

    let elementoSection =  document.getElementById('resultado')
    elementoSection.innerText = resultado
}

//elementoSection.innerText