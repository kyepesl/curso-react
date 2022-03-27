// Eventos del DOM CLICK

const heading = document.querySelector('.heading')
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo Heading al dar Click'
})//clickHeading)

function clickHeading() {
    console.log('Diste click en heading');
}

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach((enlace) => 
    enlace.addEventListener('click', () => console.log('Diste click en un enlace'))    
)
