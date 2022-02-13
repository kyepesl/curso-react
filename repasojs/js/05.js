// Objetos manipulación

const producto = {
    nombre:"Tablet",
    precio:"300",
    disponible:true
}

// // Con esto ya no se pued emodificar ninguna propiedad del objeto
// Object.freeze(producto);

// permite reescribir las propiedades existentes pero no te permite crear nuevas ni eliminarlas
Object.seal(producto);

// Reescribir un valor
producto.nombre = "Monitor turbo";

// Si no existe lo va a añadir
producto.imagen = "imagen.jpg"

// eliminar una propiedad del objeto
delete producto.disponible

// si eliminas una propiedad que no existe js no te va a sacar un error
delete producto.calificaciones
console.table(producto);







