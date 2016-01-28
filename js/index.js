$(document).ready(function(){
  //Se inicializa la funcion que se encarga de que la navegación superior funcione correctamente.
  $(".button-collapse").sideNav();
  //Se inicializa el parallax del index
  $('.parallax').parallax();
  //Se inicializa el arranque de las pantallas modales de apoyo
  $('.modal-trigger').leanModal();
});
