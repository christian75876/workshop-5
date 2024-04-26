//Objeto padre
const vehiculo = {
    tipo: '',
    consumo: 0,
    velocidadMax: 0,
    peso: 0,
    eficiente : function(){
        let aux = (this.consumo < 10) && (this.velocidadMax > 100) && (this.peso < 2000)? 'Vehiculo eficiente' : 'Vehiculo NO eficiente';
        console.log(aux);
    }
}

const carros = [];

//Enum de vehiculos!
const selectType = (chart) => {
    switch(chart){
        case '1': 
            return 'carga';
        case '2':
            return 'transporte';
        case '3':
            return 'pasajeros';
        case '4':
            return 'acuaticos';
    }
}

const type = () => {
    let types = prompt('Ingrese el numero segun el carro:\n1.Carga\n2.Transporte\n3.Pasajeros\nAcuaticos');
    if(!/^[1-3]$/.test(types)){
        alert('Ingresaste un valor no valido!');
        type();
    }else{
        selectType(types);
    }
}

//Tipos de vehiculos
// const typesCars = (i) => {
//     let car = {}
//     switch (i) {
//         case '1':
//             car = {
//                 volumen: 0,
//             }
//             Object.setPrototypeOf(car, vehiculo);
//             return(car)
//         case '2':
//             car = {

//             }
//     }
    
// }

let select = confirm('Desea crear un vehiculo?');

if(select){
    let ty = type();
    let consume = Number(prompt('Ingrese el consumo del vehiculo cada 100Km'));
    let maxSpeed = Number(prompt('Ingrese cual es la velocidad maxima del vehículo'));
    let weigth = Number(prompt('Ingrese el peso del vehiculo en kg'));
    if(isNaN(consume, maxSpeed, weigth)){
        alert('ingresaste un valor no valido! vuelve a ingresar correctamente unicamente ingresa numeros');
        type();
    }
    
    let car = Object.create(vehiculo);
    car.tipo = ty;
    car.consumo = consume;
    car.velocidadMax = maxSpeed;
    car.peso = weigth;
    car.eficiente();
    carros.push(car);

    console.log(car);

}



