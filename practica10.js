/*
    Elaborar un programa que determine el grupo de edad al que pertenece una 
    persona a partir de su edad

    Bebé -> 0-2 años
    Niño -> 3-11 años
    Adolescente -> 12-17 años
    Adulto Joven -> 18 - 40 años
    Crisis de la mediana edad -> 41-60 años
    Adulto Mayor -> 61+
*/ 

let edad = parseInt(process.argv[2])


if (edad < 0 ) {
    console.log("Ingresa una edad real en números.")
}else if (edad < 3  && edad >=0){
    console.log("La edad de= " + edad + ", Corresponde al grupo de edad de ")
    console.log("bebé.")
}else if (edad > 2 && edad < 12 ){
    console.log("La edad de= " + edad + ", Corresponde al grupo de edad de ")
    console.log("niño.")
}else if (edad > 11 && edad < 18 ){
    console.log("La edad de= " + edad + ", Corresponde al grupo de edad de ")
    console.log("Adolescente.")
}else if (edad > 17 && edad < 41 ){
    console.log("La edad de= " + edad + ", Corresponde al grupo de edad de ")
    console.log("Adulto Joven.")
}else if (edad > 40 && edad < 61 ){
    console.log("La edad de= " + edad + ", Corresponde al grupo de edad de ")
    console.log("Crisis de la mediana edad.")
}else if (edad > 60){
    console.log("La edad de= " + edad + ", Corresponde al grupo de edad de ")
    console.log("Adulto Mayor.")
}else{
    console.log("Eso ni es una edad xd, o no digitaste solo el número")
}