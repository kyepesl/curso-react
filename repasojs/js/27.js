// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit',e => {
    e.preventDefault() 

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia){
        alertaPrevia.remove()
    }
    const alerta = document.createElement('DIV')
    // alerta.id = 'Hola' //agregar un id
    // alerta.classList.add('alerta', 'segundaclase') // agregar una o varias clases

    alerta.classList.add('alerta')

    if (nombre === '' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    } else {
        alerta.textContent = 'Todo bien, enviando....'
        alerta.classList.add('exito')
    }

    formulario.appendChild(alerta)
})
