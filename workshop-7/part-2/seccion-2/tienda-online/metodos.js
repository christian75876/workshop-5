import {Pedido, Producto, Cliente, Usuario} from "./clases.js";

const CrearProducto = () => {
    let descripcion = prompt('Ingrese la descripción del producto');
    let precio = Number(prompt('Ingrese el precio de ete producto $:'));
    let cantidad = Number(prompt('Ingrese la Cantidad de este producto'));
    let color = prompt('Ingrese el color de este producto');
    let marca = prompt('Ingrese la marca de este producto');
    const product = new Producto(color, marca, precio, cantidad, descripcion);
    console.log(product);
}

CrearProducto();