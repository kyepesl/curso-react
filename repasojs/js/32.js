// Template Strings

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "orange"

function texto (){
    return "este texto proviene de la funcion"
}

console.log(producto + " $" + precio + " Dolares, Marca: " + marca);
console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${texto()}`);