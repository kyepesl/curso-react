//Iteradores en JS
const tecnologias = ["HTML", "CSS","JavaScript", "React", "Node.js"]

// // forEach - acceder a cada elemento del array
// tecnologias.forEach(function(tech){
//     console.log(tech);
// })

const arrayForEach = tecnologias.forEach(function(tech){
    console.log(tech);
    return tech
})

// map - crea un nuevo arreglo

const arrayMap = tecnologias.map(function(tech){
    return tech;
    console.log(tech);
})

console.log(arrayForEach); // solo listar elementos del arreglo
console.log(arrayMap); // Si se llena un nuevo arreglo

