// On définit nos variables
var pression = 0;
var fuego = 0;
var nombre_joueur;

$(function(){
  $( "div.gameZone" ).bind( "tap", tapHandler );
    function tapHandler(event){
      fuego = fuego+1;

      $( event.target ).css("background-color", "red");
    }
  });

$(document).ready(function() {
window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
  //Définition des axes
  var beta = Math.round(event.beta);
  var gamma = Math.round(event.gamma);

  $('#beta').text("Roulage :" + beta);
  $('#gamma').text("Tangage :" + gamma);

  if((beta >= 15 && beta < 20) || (beta <= -15 && beta > -20))
  {

    $('#roulage').text('mini');
    $('#img_1').css("visibility","visible");
    $('#img_2').css("visibility","hidden");
    $('#img_3').css("visibility","hidden");
  }
  else if((beta >= 20 && beta < 30) || (beta <= -20 && beta > -30))
  {
    $('#roulage').text('medium');
    $('#img_1').css("visibility","hidden");
    $('#img_2').css("visibility","visible");
    $('#img_3').css("visibility","hidden");
  }
  else if(beta >= 30 || beta <= -30)
  {
    $('#roulage').text('hard');
    $('#img_1').css("visibility","hidden");
    $('#img_2').css("visibility","hidden");
    $('#img_3').css("visibility","visible");
  }
  else
  {
    $('#roulage').text('None');
    $('#img_1').css("visibility","hidden");
    $('#img_2').css("visibility","hidden");
    $('#img_3').css("visibility","hidden");
  }

  if((gamma >= 10 && gamma < 15) || (gamma <= -10 && gamma > -15))
  {
    $('#tangage').text('mini');
    $('#img_1').css("visibility","visible");
    $('#img_2').css("visibility","hidden");
    $('#img_3').css("visibility","hidden");
  }
  else if((gamma >= 15 && gamma < 30) || (gamma <= -15 && gamma > -30))
  {
    $('#tangage').text('medium');
    $('#img_1').css("visibility","hidden");
    $('#img_2').css("visibility","visible");
    $('#img_3').css("visibility","hidden");
  }
  else if(gamma >= 30 || gamma <= -30)
  {
    $('#tangage').text('hard');
    $('#img_1').css("visibility","hidden");
    $('#img_2').css("visibility","hidden");
    $('#img_3').css("visibility","visible");
  }
  else
  {
    $('#tangage').text('None');
    $('#img_1').css("visibility","hidden");
    $('#img_2').css("visibility","hidden");
    $('#img_3').css("visibility","hidden");
  }
}
});
