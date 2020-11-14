/**
 * INCORRECTO
 * 
 * Aunque querySelector solo busca la primer coicidencia y se detiene ahí
 * Es mejor por temas de rendimiento buscar un único elemento por su id
 * Al ser un elemento que no se reasigna su valor se debe declarar con "const"
 */
let iconMenu = document.querySelector('#icon-menu');

// Correcto
const mainMenu = document.getElementById('main-menu');

/**
 * Una función de flecha tiene un return implícito,
 * y aunque la forma declarada aquí es válida
 * si se va a ejecutar más de una línea de código, son obligatoriso los corchetes
 */
iconMenu.addEventListener('click', () =>
  mainMenu.classList.toggle('show')
);