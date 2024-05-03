// import {Pedido, Producto, Cliente, Usuario} from "./clases";



//Personas y tipos de rolles usuario y cliente!
function Person(nombre, edad, email){
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
};

function Usuario(id, user, password, nombre, edad, email){
    Person.call(this, nombre, edad, email);
    this.id = id;
    this.user = user;
    this.password = password;
}

function Cliente(tel, direccion, nombre, edad, email){
    Person.call(this, nombre, edad, email);
    this.tel = tel;
    this.direccion = direccion;
}

//Articulos Productos y pedidos!
function Articulo(precio, cantidad, descripcion){
    this.precio = precio;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
};

function Producto(color, marca, precio, cantidad, descripcion){
    Articulo.call(this, precio, cantidad, descripcion);
    this.color = color;
    this.marca = marca;
}

function Pedido(nombreCliente, tel, dir,precio, cantidad, descripcion, color, marca){
    Producto.call(this, precio, cantidad, descripcion, color, marca);
    this.nombreCliente = nombreCliente;
    this.tel = tel;
    this.dir = dir;
}

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