// Selectores del DOM
/*
# id
. clase
h2 etiqueta de html
*/
const heading = document.querySelector('.heading')

// console.log(heading);
// console.log(heading.textContent);
// console.log(heading.tagName);
// console.log(heading.classList);
// console.log(heading.id);
 // retorna solo un elemento

 const enlace = document.querySelector('.navegacion a')
 console.log(enlace);

 const enlaces = document.querySelectorAll('.navegacion a')
 console.log(enlaces);

 console.log(enlaces.forEach((e) => console.log(e)));