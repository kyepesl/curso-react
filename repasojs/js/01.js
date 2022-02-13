/*
// crear variables
var aprendiendoJS = true;
aprendiendoJS = false;
aprendiendoJS = 'Juan'
console.log(aprendiendoJS);

var aprendiendo;
aprendiendo = 'JavaScript';
console.log(aprendiendo);

// variables con var
var aprendiendo = 'JavaScript'

// variables con let
let aprendiendoLet;
aprendiendoLet = true;
console.log(aprendiendoLet);

//scope de una variable con var
var musica = 'Rock';
if (musica){
    var musica = 'Grunge';
    console.log('dentro del if: ' + musica);
}
console.log('fuera del if: ' + musica);

// scope con let
let musicaLet = 'Rock';
if (musicaLet){
    let musicaLet = 'Grunge';
    console.log('dentro del if: ' + musicaLet);
}
console.log('fuera del if: ' + musicaLet);

// template strings
const nombre = 'Juan';
const trabajo = 'Desarrollador Web';

// concatenar javascript
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// concatenar con múltiples líneas
const contenedorApp = document.querySelector('#app');
let html = '<ul>' + 
                '<li> Nombre: ' + nombre + '</li>' +
                '<li> Trabajo: ' + trabajo + '</li>' + 
            '</ul>';

let htmlNew = `<ul>
            <li> Nombre: ${nombre}</li>
            <li> Trabajo: ${trabajo}</li> 
        </ul>`;

contenedorApp.innerHTML = htmlNew;

//FUNCIONES
// function declaration
// el codigo js cuantas funciones hay en el documento y luego las ejecuta. Puede estar declarada antes de ser creada
function saludar(nombre){
    console.log('Bienvenido ' + nombre);
}
saludar('Juan');
saludar(); // se debe pasar un parámetro

// function expression
// Siempre se debe declarar antes de implementarla.
const cliente = function(nombre){
    console.log('Mostrando datos del cliente: ' + nombre);
}
cliente('Juan');


//funciones con parámetros por default
//function declaration
function actividad(nombre = 'Walter white', actividad = 'enseñar química'){
    console.log(`La persona ${nombre} está realizando la actividad ${actividad}`);
}

actividad('Juan','Aprender JavaScript');
actividad('Pedro','creando un sitio web');
actividad('Antonio');

//function expression
const actividad = function(nombre = 'Walter white',actividad = 'enseñar quimica'){
    console.log(`La persona ${nombre} está realizando la actividad ${actividad}`);
}

actividad('Juan','Aprender JavaScript');
actividad('Pedro','creando un sitio web');
actividad('Antonio');


// arrow function
// let viajando = function(destino){
//     return `Viajando a la ciudad de: ${destino}`
// }

// let viaje;
// viaje = viajando('París');
// viaje = viajando('Londres');
// viaje = viajando('Barcelona');
// console.log(viaje);

// let viajando = destino => `Viajando a la ciudad de ${destino}`;

// let viaje = viajando('Paris')
// console.log(viaje);

let viajando = (destino,duracion) => `Viajando a la ciudad de ${destino} por ${duracion} dias.`;

viaje = viajando('Barcelona',9);
console.log(viaje);

*/
// OBJETOS
//object literal
// let nombrePersona = 'Juan';
// let profesion = 'Desarrollador web';

// console.log(nombrePersona);
// console.log(profesion);

// const persona = {
//     nombre: 'Juan',
//     profesion:'Desarrollador web',
//     edad:25
// }

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.profesion);
// console.log(persona.edad);
// console.log(persona['edad']);

// object constructor

// function Tarea(nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia
// }

// const tarea1 = new Tarea('Aprender JavaScript y React','Urgente');
// // const tarea2 = new Tarea('Preparar café','Urgente');
// // const tarea3 = new Tarea('Pasear al perro','Media');
// // const tarea4 = new Tarea('Conocer a mis suegros','Baja');

// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);
// console.log(tarea4);
// console.log(tarea1.nombre);


// Prototypes
// function mostrarInformationTarea(tarea, prioridad){
//     return `La tarea ${tarea} tiene una prioridad ${prioridad}`;
// }

// const mostrarInfo = mostrarInformationTarea(tarea1.nombre,tarea1.urgencia);
// console.log(mostrarInfo);

// const mostrarCliente = mostrarInformationTarea(persona.nombre,persona.profesion);
// console.log(mostrarCliente);

// function Tarea(nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia
// }
// // puede ser creado solo para objetos de tipo tarea. Atar funciones a un tipo de objeto
// Tarea.prototype.mostrarInformationTarea = function(){
//     return `La tarea ${this.nombre} tiene una prioridad ${this.urgencia}`;
// }

// const tarea1 = new Tarea('Aprender JavaScript y React','Urgente');
// const tarea2 = new Tarea('Pasear al perro','Media');

// console.log(tarea1.mostrarInformationTarea()); 
// console.log(tarea2.mostrarInformationTarea()); 
// //-------------------- ensayo con otro objeto----------------------//
// const persona = {
//     nombre: 'Juan',
//     profesion:'Desarrollador web',
//     edad:25
// }

// console.log(persona.mostrarInformationTarea());

// Destructuring de objetos
// const aprendiendoJS = {
//     version: {
//         nueva:'ES6',
//         anterior:'ES5'
//     },
//     frameworks:['React','VueJS','AngularJS']
// }

//extraer valores de un objeto
// console.log(aprendiendoJS);

// //version anterior
// // let version = aprendiendoJS.version.nueva;
// // let framework = aprendiendoJS.frameworks[1];
// // console.log(version);
// // console.log(framework);

// // destructuring de objetos forma nueva
// let {nueva, anterior} = aprendiendoJS.version;
// console.log(nueva);
// console.log(anterior);

// Object literal enhacement
const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of puppets','seek & destroy','enter sandman'];

// forma anterior
// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }
// console.log(metallica);

//forma nueva
// const metallica = {banda, genero, canciones}
// console.log(metallica);

// funciones a un objeto
// const persona = {
//     nombre: 'Juan',
//     trabajo: 'Desarrollador web',
//     edad: 500,
//     musicaRock: true,
//     mostrarInformacion: function(){
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
//     }
// }

// persona.mostrarInformacion();

// forma nueva
// const persona = {
//     nombre: 'Juan',
//     trabajo: 'Desarrollador web',
//     edad: 500,
//     musicaRock: true,
//     mostrarInformacion(){
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
//     }
// }

// persona.mostrarInformacion();

//ARREGLOS, MAP Y OBJECT.KEYS
// const carrito = ['producto1','producto2','producto3']
// console.log(carrito);

// const appContenedor = document.querySelector('#app');
// let html = '';
// carrito.forEach(producto => {
//     html += `<li>${producto}</li>`
// })

// appContenedor.innerHTML = html;

// map
// carrito.map(producto => 'El producto es ' + producto);

// object keys
// const persona = {
//     nombre: 'Juan',
//     profesion: 'Desarrollador web',
//     edad: 500
// }

// console.log(persona);
// const {nombre} = persona;
// console.log(nombre);

// console.log(Object.keys(persona));

//SPREAD OPERATOR...
// combinar dos arreglos diferentes
let lenguajes = ['JavaScript','Python','PHP']
let frameworks = ['React','Django','Laravel']

// // forma vieja
// let combinacion = lenguajes.concat(frameworks)
// console.log(combinacion);

// forma nueva
let combinacion = [...lenguajes,...frameworks]
console.log(combinacion);

//copiar un arreglo

let nuevoArreglo = [...lenguajes]
console.log(nuevoArreglo);

//quedarme con el ultimo valor
let [ultimo] = [...lenguajes].reverse()
console.log(lenguajes);
console.log(ultimo);

function suma(a,b,c){
    console.log(a + b + c);
}

const numeros = [1,2,3];
suma(...numeros);