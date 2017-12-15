// On définit nos variables
// SI UTILISATEUR == 1 ==> FIN DE PARTIE
var options = {
    gravity: 2,
    difficulty: 1
};
var Difficulties = ['Facile', 'Moyen', 'Difficile'];
var pression = 0;
var fuego = 0;
var nombre_joueur = 5;
var loopInterval = 33;
var timerGlobal ;
var inc_pression_roulage = 1;
var inc_pression_tangage = 1;

function myTimer() {
    pression = pression + Math.round((inc_pression_roulage+inc_pression_tangage)/2);
    $("#timing").text(pression);
    if (pression == 100){
      // location.href = "#bang_page";

      pression = 0;
      window.clearTimeout(timeoutVariable);

      //envoi de la page Bang -> décrément du nombre de joueurs

    }
}


$(document).ready(function() {
window.addEventListener("deviceorientation", handleOrientation, true);

  $('#game').click(function() {
    $('.gameZone').addClass('fire');
    timerGlobal=setInterval(myTimer, 3000);
  });

function handleOrientation(event) {
  //Définition des axes
  var beta = Math.round(event.beta);
  var gamma = Math.round(event.gamma);

  $('#beta').text("Roulage :" + beta);
  $('#gamma').text("Tangage :" + gamma);

  if((beta >= 15 && beta < 20) || (beta <= -15 && beta > -20))
  {
    $('#roulage').text('mini');
    inc_pression_roulage = 2;
  }
  else if((beta >= 20 && beta < 30) || (beta <= -20 && beta > -30))
  {
    $('#roulage').text('medium');
    inc_pression_roulage = 4;
  }
  else if(beta >= 30 || beta <= -30)
  {
    $('#roulage').text('hard');
    inc_pression_roulage = 6;
  }
  else
  {
    $('#roulage').text('None');
    inc_pression_roulage = 1;
  }

  if((gamma >= 10 && gamma < 15) || (gamma <= -10 && gamma > -15))
  {
    $('#tangage').text('mini');
    inc_pression_tangage = 2;
  }
  else if((gamma >= 15 && gamma < 30) || (gamma <= -15 && gamma > -30))
  {
    $('#tangage').text('medium');
    inc_pression_tangage = 4;
  }
  else if(gamma >= 30 || gamma <= -30)
  {
    $('#tangage').text('hard');
    inc_pression_tangage = 6;
  }
  else
  {
    $('#tangage').text('None');
    inc_pression_tangage = 1;
  }

  $('#img_1').css("visibility","hidden");
  $('#img_2').css("visibility","hidden");
  $('#img_3').css("visibility","hidden");

  if (inc_pression_roulage >= 2 || inc_pression_tangage >= 2) {
    $('#img_1').css("visibility","visible");
    $('#son_mini').get(0).play();
  }
  if (inc_pression_roulage >= 4 || inc_pression_tangage >= 4) {
    $('#img_2').css("visibility","visible");
    $('#son_medium').get(0).play();
  }
  if (inc_pression_roulage >= 6 || inc_pression_tangage >= 6) {
    $('#img_3').css("visibility","visible");
    $('#son_hard').get(0).play();
  }
}
});
