// Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre:"Tablet",
    precio:"300",
    disponible:true
}

const cliente = {
    nombre : "Karen",
    premium : true
}

const { nombre, precio, disponible } = producto
// se usan alias cuando tienes variables con nombres iguales en distintos objetos
const { nombre: nombreCliente, premium } = cliente

console.log(nombre, precio, disponible);
console.log(nombreCliente, premium);
