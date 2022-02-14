// Funciones - Function Expression
// function sumar(numero = 0, numero2 = 0) {
//     console.log(numero + numero2);
// }

// Diferencia ppal la funcion no se puede declarar primero antes de registrarla.
const sumar = function (numero, numero2) {
    return numero + numero2;
}

const resultado = sumar(30,20)
console.log(resultado);

