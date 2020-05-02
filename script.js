/* On définie nos variables
var options = {
    nb_joueurs: 2,
    difficulty: 1
};
var arrDifficulties = ['Facile', 'Moyen', 'Difficile'];*/
$(function(){
  $(document).bind("tap",tapHandler);
    function tapHandler(event){
      console.log("taped")
      $(event.target).css("background-color","red");
  }
});
//Appel du gyroscope
$(document).ready(function() {
window.addEventListener("deviceorientation", handleOrientation, true);
});
//Arrondis des variables beta et gamma et définition de leur état d'équilibre
function handleOrientation(event) {
  var beta = Math.round(event.beta);
  var gamma = Math.round(event.gamma);
  $('#beta').text("Roulage :" + beta);
  $('#gamma').text("Tangage :" + gamma);
};
