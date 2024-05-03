

//Personas y tipos de rolles usuario y cliente!
function Person(nombre, edad, email){
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
};

function Usuario(id, user, password){
    Person.call(nombre, edad, email);
    this.id = id;
    this.user = user;
    this.password = password;
}

function Cliente(tel, direccion){
    Person.call(nombre, edad, email);
    this.tel = tel;
    this.direccion = direccion;
}

//Articulos Productos y pedidos!
function Articulo(precio, cantidad, descripcion){
    this.precio = precio;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
};

function Producto(color, marca){
    Articulo.call(precio, cantidad, descripcion);
    this.color = color;
    this.marca = marca;
}

function Pedido(nombreCliente, tel, dir){
    Producto.call(precio, cantidad, descripcion, color, marca);
    this.nombreCliente = nombreCliente;
    this.tel = tel;
    this.dir = dir;
}

export {Pedido, Producto, Cliente, Usuario};