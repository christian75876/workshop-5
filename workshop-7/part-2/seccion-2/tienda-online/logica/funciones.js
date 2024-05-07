export {menu}


//menu
const menu = () => {
    let select = prompt('Ingrese: \n1. para ingresar como Administrador\n2.Para visualizar ropa\n3.compra');
        switch(select){
            case '1':
                admin();
                break;
            case '2':
                alert('Revisa la consola, para visualizar los productos');
                manejarDatosDeRopa();
                break;
            case '3':
                compra();
                break;
        }
}

//Data usuarios
async function dataUsuarios(){
    try{
        const response = await fetch("data/users.json");
        if(!response.ok){
            throw new Error('Error al cargar el achivo de usuarios');
        }
        const data = await response.json();
        return data;    
    }catch (error){
        console.log('Error', error);
        throw error;
    }
}

//Validacion usuarios
const admin = async () =>{
    const usuarios = await dataUsuarios();
    console.log(usuarios);
    let user = prompt('Ingrese el usuario que este previamente registrado');
    let contrasenia = prompt('Ingrese contraseña correspondiente al usuario');
    let validarUsuario = usuarios.some(element => {
        return(element.usuario == user) && (element.contrasena == contrasenia);
    });
    if(validarUsuario === true)alert('Bienvenido administrador!')
    else alert('As ingresado un valor erroneo'); 
}

//Data de Ropa
async function obtenerDatosDeRopa(){
    try{
        const response = await fetch("data/data.json");
        if(!response.ok){
            throw new Error('Error al cargar el archivo ropa');
        }
        const data = await response.json();
        return data;
    }catch (error){
        console.error('Error', error);
        throw error;
    }
    menu();
}

async function manejarDatosDeRopa() {
    let aux = {}
    try{
        const data = await obtenerDatosDeRopa();
        data.forEach((element, index) => {
            aux[index+1] = element;
        });
        console.table(aux)
    }catch (error) {
        console.log('Error al manejar los datos:', error);
    }
    menu();
}

const articulos = [];

const compra = () => {
    let eleccion = prompt('Ingresa el indice de la prenda que deseas comprar!')
    if(/^(10|[1-9])$/.test(eleccion)){
        articulos.push(eleccion);
    }else{
        alert('As escogido una opción no valida');
    }
    let aux = confirm('Deseas comprar otro articulo?');
    if(aux)compra();
    menu();
}