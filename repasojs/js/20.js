const autenticado = true

// !autenticado ? 
//     console.log("Usuario autenticado") : 
//     console.log("Usuario no autenticado");

// autenticado ? 
//     console.log("Usuario autenticado") : 
//     console.log("Usuario no autenticado");


const saldo = 600
const pagar = 800
const tarjeta = true

saldo > pagar ? 
    console.log("Puedes pagar con saldo") : 
    tarjeta ? 
        console.log("Puedes pagar con tarjeta") : 
        console.log("No puedes pagar con tu saldo")

