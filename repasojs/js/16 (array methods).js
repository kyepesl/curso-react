// array methods - no mutan el arreglo original página (https://doesitmutate.xyz/)0
const tecnologias = ["HTML", "CSS","JavaScript", "React", "Node.js"]
const numeros = [10, 20, 30]

let nuevoArray;

nuevoArray = tecnologias.filter( tech =>  tech !== "React")

//INCLUDES - comprobar si un elemento existe en el array
var resultado = tecnologias.includes('React')

//SOME - devuelve si al menos uno cumple la condición,retorna true o false
var resultado = numeros.some(numero => numero > 15)

//FIND - devuelve el primer elemento que cumple la condición
var resultado = numeros.find(numero => numero > 15)

// EVERY - retorna true o false si todos cumplen la condición
var resultado = numeros.every(numero => numero > 5)

// REDUCE - acumulando en el total
var resultado = numeros.reduce((total, numero) => numero + total, 0)

// FILTER - crea un nuevo array en base a una condición
var resultado = tecnologias.filter( tech => tech !== 'Node.js')
var resultado = numeros.filter( num => num > 15)

// FOREACH
tecnologias.forEach((tech,index) => console.log(index))

// MAP
var resultado = tecnologias.map(tech =>tech)
console.log(resultado);