import { Pedido } from "./logica/clases.js";

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
}



async function manejarDatosDeRopa() {
    try{
        const data = await obtenerDatosDeRopa();
        console.log(data)
    }catch (error) {
        console.log('Error al manejar los datos:', error);
    }
}

manejarDatosDeRopa()


