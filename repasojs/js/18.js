// Comparación y operador estricto

const numero1 = 20
const numero2 = "20"

/**
 * == (comparacion pero no es estricto)
 * === (comparacion estricta)
 */

console.log(typeof numero1)
console.log(typeof numero2)

if (String(numero1) === Number(numero2)){
    console.log("Si, son iguales");
}
else {
    console.log("No, no son iguales");
}

const autenticado = true;
if (autenticado){
    console.log("Si esta autenticado");
}

