// Funciones - Function Declaration
// function sumar(numero = 0, numero2 = 0) {
//     console.log(numero + numero2);
// }

// sumar(10, 20)
// sumar(10, 3)
// sumar(100)
// sumar(100, 3)

// function sumar(numero = 0, numero2 = 0) {
//     return [numero + numero2, 'Hola Mundo'];
// }

// // destructuring de arrays
// const [resultado, holamundo] = sumar(20,30)
// console.log(resultado);
// console.log(holamundo);

// // destructuring de objetos
function sumar(numero = 0, numero2 = 0) {
    return {
        resultado: numero + numero2, 
        mensaje: 'Hola Mundo'};
}

const {resultado, mensaje} = sumar(20,30)
console.log(resultado);
console.log(mensaje);