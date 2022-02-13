// Objetos - unir dos objetos o mas

const producto = {
    nombre:"Tablet",
    precio:"300",
    disponible:true
}

const cliente = {
    nombre : "Karen",
    premium : true
}
// este procedimiento se puede realizar pero modifica el objeto original
//producto.cliente = cliente

// OBJECT ASSIGN
// Este método también modifica el objeto inicial de producto
// const nuevoObjeto = Object.assign(producto, cliente)
// console.log(nuevoObjeto);

// EXPREAD OPERATOR
// Con este metodo como tienen un campo con el mismo nombre no guarda el valor de los dos
const nuevoObjeto = {...producto, ...cliente};

// Así se guarda la información completa de ambos objetos
// En REACT se trata de evitar estar modificando lso arrglos originales
const nuevoObjeto2 = {
    producto: {...producto}, 
    cliente: {...cliente}};

console.log(nuevoObjeto);
console.log(nuevoObjeto2);











