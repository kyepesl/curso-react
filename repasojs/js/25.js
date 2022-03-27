// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')
//console.log(inputNombre);
//inputNombre.type = 'password'
//inputNombre.placeholder = 'Un placeholder desde js'

// inputNombre.addEventListener('input', function(){
//     console.log(inputNombre.value);
// })

inputNombre.addEventListener('input', function(evt){
    console.log(evt.target.value);
})

// inputNombre.addEventListener('keydown', function(){
//     console.log('Escribiendo en el input');
// })

const inputPass = document.querySelector('.password')
inputPass.addEventListener('input',funcionPassword)

function funcionPassword(e) {
    inputPass.type = 'text'

    setTimeout(() => {
        inputPass.type = 'password'
    }, 100)
}