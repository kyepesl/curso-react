// Scope - alcance que tiene una variable

const precio = 300 // existe de forma global

function unaFuncion (){
    const precio = 600 // existe unicamente dentro de las llaves 
    console.log(precio)
}

console.log(precio) // si no existe global genera un error porque no está declarado
unaFuncion()
