// On définit nos variables
var pression = 0;
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
  }
  else if((beta >= 20 && beta < 30) || (beta <= -20 && beta > -30))
  {
    $('#roulage').text('medium');
  }
  else if(beta >= 30 || beta <= -30)
  {
    $('#roulage').text('hard');
  }
  else
  {
    $('#roulage').text('None');
  }

  if((gamma >= 10 && gamma < 15) || (gamma <= -10 && gamma > -15))
  {
    $('#tangage').text('mini');
  }
  else if((gamma >= 15 && gamma < 30) || (gamma <= -15 && gamma > -30))
  {
    $('#tangage').text('medium');
  }
  else if(gamma >= 30 || gamma <= -30)
  {
    $('#tangage').text('hard');
  }
  else
  {
    $('#tangage').text('None');
  }
}
});   
