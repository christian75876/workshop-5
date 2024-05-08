export { menu, product };
import {
  Articulo,
  Cliente,
  Pedido,
  Persona,
  Producto,
  Usuario,
} from "./clases.js";

//menu
const menu = () => {
  let select = prompt(
    "Ingrese: \n1. para ingresar como Administrador\n2.compra\n3.Pedido"
  );
  switch (select) {
    case "1":
      admin();
      break;
    case "2":
      manejarDatosDeRopa();
      break;
    case "3":
      pedido();
      break;
    default:
      break;
  }
};

//Data usuarios
async function dataUsuarios() {
  try {
    const response = await fetch("data/users.json");
    if (!response.ok) {
      throw new Error("Error al cargar el achivo de usuarios");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

//Validacion usuarios
const admin = async () => {
  const usuarios = await dataUsuarios();
  console.log(usuarios);
  let user = prompt("Ingrese el usuario que este previamente registrado");
  let contrasenia = prompt("Ingrese contraseña correspondiente al usuario");
  let validarUsuario = usuarios.some((element) => {
    return element.usuario == user && element.contrasena == contrasenia;
  });
  if (validarUsuario === true) alert("Bienvenido administrador!");
  else alert("As ingresado un valor erroneo");
};

//Data de Ropa
async function obtenerDatosDeRopa() {
  try {
    const response = await fetch("data/data.json");
    if (!response.ok) {
      throw new Error("Error al cargar el archivo ropa");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
let product = {};
const recogerData = (data) => {
  product = data;
  compra();
};

async function manejarDatosDeRopa() {
  let aux = {};
  try {
    const data = await obtenerDatosDeRopa();
    data.forEach((element, index) => {
      aux[index + 1] = element;
    });
    recogerData(aux);
  } catch (error) {
    console.log("Error al manejar los datos:", error);
  }
  menu();
}

const articulos = [];

const compra = () => {
  console.table(product); 
  let eleccion = prompt("Ingresa el índice de la prenda que deseas comprar");

  // Verificar si el índice ingresado es válido
  if (/^\d+$/.test(eleccion) && eleccion >= 1 && eleccion <= Object.keys(product).length) {
    let productoSeleccionado = product[eleccion];
    console.log("Producto seleccionado:", productoSeleccionado);

    // Agregar el índice del producto al array de artículos
    articulos.push(eleccion);
  } else {
    alert("Has escogido una opción no válida");
  }

  // Preguntar si desea comprar otro artículo
  let aux = confirm("¿Deseas comprar otro artículo?");
  if (aux) {
    compra();
  } else {
    menu();
  }
};

const pedido = () => {
  if (Object.keys(product).length > 0) {
    let nombre = prompt('Ingrese el nombre del cliente');
    let dir = prompt('Ingrese direccion del cliente');
    let tel = prompt('Ingrese numero de telefono del cliente')
    let pedido = new Pedido(nombre, tel, dir); // Crear una instancia de Pedido
    console.log("Productos seleccionados:");
    for (const indice of articulos) {
      let productoSeleccionado = product[indice];
      console.log(productoSeleccionado);
      // Agregar el producto seleccionado al pedido
      pedido.agregarProducto(productoSeleccionado);
    }
    console.log("Pedido creado:", pedido);
  } else {
    console.log("El carrito de compras está vacío");
  }
  menu();
};
