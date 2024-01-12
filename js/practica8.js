//condicionales

//Entrada
let usuario = (process.argv[2])
let contrasena = (process.argv[3])

//usuario "loquesea@hotmail.com"
//pwd "noSoyUnContrasenia"

if (usuario == "loquesea@hotmail.com" && contrasena =="noSoyUnContrasenia"){
    console.log("Usuario valido")
    console.log("Bienvenido")
}else{
    console.log("Usuario o contraseña invalidas")
}