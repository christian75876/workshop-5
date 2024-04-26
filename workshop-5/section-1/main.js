
//Objeto numero 1.
const obj = {
    nombre: 'jhon',
    apellido: 'doe',
    edad: 22,
    profesion: 'coder',
    hobbies: 'mecanica',
    saludar:  () =>{
        console.log(`Hola ${obj.nombre} ${obj.apellido}`);
    }
};


//Objeto numero 2

const student = {
    promedio : 3.2,
    cursos: ['matematicas', 'ingles', 'filosofia'],
    presentarExament: ()=>{
        console.log('Presentacion del examen.');
    }
}

Object.setPrototypeOf(student, obj);

obj.saludar = () => {
    console.log(`Hola ${obj.nombre} ${obj.apellido} ${obj.edad}`);
}

student.saludar = () => {
    console.log(`Desde el objeto student los cursos son ${student.cursos}`);
} 

student.saludar();
obj.saludar();