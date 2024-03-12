//Obtener con REDUCE el producto con valor mas alto

const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 40 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Sombrero', precio: 15 },
    ];


const valorMaximo = productos.reduce((acc, productoActual) => {
        if (Math.max(acc.precio, productoActual.precio)===acc.precio){
            return acc
        }
        return productoActual
    },
0)




console.log(valorMaximo)