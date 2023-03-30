// Seleccionamos el botón por su id
const button = document.getElementById('my-button');

// Agregamos el evento 'click' al botón
button.addEventListener('click', () => {
  alert('click en el botón');
});

// Agregamos el evento 'click' al botón utilizando jQuery
$('#my-button').click(() => {
  console.log('Hola, estoy utilizando jQuery');
});
