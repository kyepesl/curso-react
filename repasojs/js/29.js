// Fetch API
// Consumir una api o un servicio
// callback - llamado a una acción cuando x es pase (de forma asíncrona)

const url = "https://jsoaceholder.typicode.com/comments"

// fetch(url)
//     .then(respuesta => respuesta.json())
//     .then(resultado => {
//         resultado.forEach(element => {
//             console.log(element);
//         })}
//     )

const consultarAPI = () => {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            resultado.forEach(element => {
                console.log(element);
            })}
    ).catch(error => {
        console.log(error);
    })
}

consultarAPI()