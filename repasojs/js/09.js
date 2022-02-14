// Operaciones en los arreglos
const tecnologias = ["HTML", "CSS","JavaScript", "React", "Node.js"]

////Añadir elementos al array
// tecnologias.push("GraphQL") //Añade elementos al final del array
// tecnologias.unshift("GraphQL") //Añade elementos al inicio del array

// const nuevoArreglo = [...tecnologias, "GraphQL"]
// const nuevoArreglo2 = ["GraphQL", ...tecnologias]

// console.table(nuevoArreglo);
// console.table(nuevoArreglo2);

////Eliminar elementos del array
// tecnologias.pop() //Elimina el ultimo elemento del array
// tecnologias.shift() //Elimina el primer elemento del array
// tecnologias.splice(2,1) //El método splice elimina elementos dentro del array

// //Array metods
// // filter permite iterar en cada elemento del arreglo y no modifica el arreglo original
// const nuevoArray = tecnologias.filter( function(tech ){
//     return tech === "React"
// })
// console.table(nuevoArray);

// // Reemplazar elementos de un arreglo
// tecnologias[0] = "GraphQL"
// console.table(tecnologias)

const nuevoArray = tecnologias.map(function(tech){
    if(tech === 'HTML'){
        return "GraphQL"
    }
    else {
        return tech
    }
})
console.table(nuevoArray)

