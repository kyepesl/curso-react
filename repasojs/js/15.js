const tecnologias = ["HTML", "CSS","JavaScript", "React", "Node.js"]

const nuevoArray = tecnologias.filter( tech =>  tech === "React")

// const nuevoArray = tecnologias.map(tech =>{
//     if(tech === 'HTML'){
//         return "GraphQL"
//     }
//     else {
//         return tech
//     }
// })
console.log(nuevoArray)