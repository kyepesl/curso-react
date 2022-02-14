// Mas de una condicion
/**
 * || al menos una debe cumplirse
 * && todas deben cumplirse
 */

const saldo = 600
const pagar = 400
const tarjeta = true

// if (saldo > pagar){
//     console.log("Puedes pagar con tu saldo");
// }
// else if (tarjeta){
//     console.log("Puedes pagar con tu tarjeta");
// }
// else{
    
//     console.log("No puedes pagar con tu saldo");
// }

if (saldo > pagar && tarjeta){
    console.log("Puedes pagar");
}
else{
    
    console.log("No puedes pagar con tu saldo");
}