

const listaProducto = []

//Personas y tipos de rolles usuario y cliente!
function Persona(nombre, edad, email){
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
};

function Usuario(id, user, password, nombre, edad, email){
    Persona.call(this, nombre, edad, email);
    this.id = id;
    this.user = user;
    this.password = password;
}

function Cliente(tel, direccion, nombre, edad, email){
    Persona.call(this, nombre, edad, email);
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

function Pedido(nombreCliente, tel, dir, precio, cantidad, descripcion, color, marca){
    Producto.call(this, precio, cantidad, descripcion, color, marca);
    this.nombreCliente = nombreCliente;
    this.tel = tel;
    this.dir = dir;
}

/**METODOS */

//CREAR PRODUCTO
Producto.prototype.crearProducto = function() {
    let descripcion = prompt('Ingrese la descripción del producto');
    let precio = Number(prompt('Ingrese el precio de ete producto $:'));
    let cantidad = Number(prompt('Ingrese la Cantidad de este producto'));
    let color = prompt('Ingrese el color de este producto');
    let marca = prompt('Ingrese la marca de este producto');
    return new Producto(color, marca, precio, cantidad, descripcion);
    
}

// let aux = new Producto;
// aux = aux.crearProducto();

// console.table(aux);
// console.log(listaProducto);

//HERENCIA DE PERSONA SALUDAR
Persona.prototype.saludar = function() {
    return `Hola soy ${this.nombre} mi edad es ${this.edad} y mi email es: ${this.email}`;
}
//MODIFICANDO LA HERENCIA DE PERSONA DESDE USUARIO.
Usuario.prototype = Object.create(Persona.prototype);
Usuario.prototype.constructor = Usuario

//ACCEDIENDO A LA HERENCIA Y METODO DE PROTOTIPO!
Pedido.prototype = Object.create(Producto.prototype);
Pedido.prototype.constructor = Pedido;

Pedido.prototype.crearProducto = function (){
    let nombre = prompt('ingrese el nombre del cliente');
    let dir = prompt('Ingrese la dirección del cliente');
    let tel = prompt('Ingrese el telefono del cliente')
    let product =  Producto.prototype.crearProducto.call(this) 
    return {
        nombre,
        dir,
        tel,
        product
    }
}

let pedidio = new Pedido;
pedidio = pedidio.crearProducto();
console.table(pedidio);


