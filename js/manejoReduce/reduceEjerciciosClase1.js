//Calcular la suma de todos los precios de los productos   Hint =>(Resultado = 125)
const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 40 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Sombrero', precio: 15 }
    ];
/*          //Solucion larga con otro array
const preciosProductos = productos.map(element => {
    return element.precio
});
console.log(preciosProductos)
const total = preciosProductos.reduce(
    (total, precioActual) => total+precioActual,
    0
)    
console.log(total)
*/
const total = productos.reduce(
    (total, productoActual) => total + productoActual.precio,
0)
console.log(total)