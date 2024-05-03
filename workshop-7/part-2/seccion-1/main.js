function Person(nombre, apellido, edad, profesión, hobbies) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.profesión = profesión;
  this.hobbies = hobbies;
};

//Metodo de saludar en person:
Person.prototype.saludar = function () {
  return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
};

//Heredar de Person creando nueva clase Student
function Student(nombre, apellido, edad, promedio, cursos) {
  Person.call(this, nombre, apellido, edad);
  this.promedio = promedio;
  this.cursos = cursos;
};

//Hereda todos los prototipos 'Metodos' de la clase padre:
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let jhonDoe = new Person('Jonh', 'Doe', 28, 'Estudiante', 'Programar');
console.log(jhonDoe);

console.log(jhonDoe.saludar());

const myStuden = new Student('Juan', 'Giraldo', 22, 'Regular', ['Sprinboot', 'go', 'java']);
console.log(myStuden);

Student.prototype.presentarExamen = function () {
  console.log("Estoy presentando un examen.");
};

myStuden.presentarExamen()


/**PART-2  ########################################################## */

console.log('************************\n************************');

//Reescribiendo un metodo heredado
Student.prototype.saludar = function(){
  return `${Person.prototype.saludar.call(this)} y soy un estudiante!`;
}

console.log(myStuden.saludar());