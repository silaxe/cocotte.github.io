var pression = 0;
var timerGlobal ;
var inc_pression_roulage = 1;
var inc_pression_tangage = 1;

window.onload = function () {
  // Au chargement de la page, on vérifie qu'on a la permission d'utiliser l'orientation.
  if ( window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function' ){
      // On récupère l'autorisation de l'utilisateur via la bannière.
      const banner = document.createElement('div')
      banner.innerHTML = `<div style="z-index: 1; position: absolute; width: 100%; background-color:#000; color: #fff"><p style="padding: 10px">Click here to enable DeviceOrientation</p></div>`
      banner.onclick = ClickRequestDeviceOrientationEvent // You NEED to bind the function into a onClick event. An artificial 'onClick' will NOT work.
      document.querySelector('body').appendChild(banner)
  }

  function ClickRequestDeviceOrientationEvent () {
    window.DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          window.addEventListener('deviceorientation',function(e) {
    document.getElementById('alpha').innerHTML = Math.round(e.alpha);
    document.getElementById('beta').innerHTML = Math.round(e.beta) ;
    document.getElementById('gamma').innerHTML = Math.round(e.gamma) ;
    document.getElementById('timer').innerHTML = timerGlobal ;
    document.getElementById('pression').innerHTML = pression ;

  }
//Si impossible de récupérer orientation alors affichage bannière erreur.
          )} else {
          alert("Désolé vous ne pouvez pas jouer à ce jeu :-(")
        }
      })
      .catch(e => {
        console.error(e)
    })
  }
/* On crée une fonction pour calculer la pression selon l'orientation du téléphone.
  function myTimer() {
    pression = pression + Math.round((inc_pression_roulage+inc_pression_tangage)/2);
    $("#timing").text(pression);
  if (pression >= 100){
    $('.bang_div').css("visibility","visible");
    $('#bang_img').css("visibility","visible");
    $('#game .btnContinue').show();
    pression = 0;
    clearInterval(timerGlobal);
  //Envoi de la page Bang -> décrément du nombre de joueurs
      }
  }

  function handleOrientation(event) {
    var beta = Math.round(event.beta);
    var gamma = Math.round(event.gamma);

    $('#beta').text("Roulage :" + beta);
    $('#gamma').text("Tangage :" + gamma);
    /*test affichage
    $('#img_1').css("visibility","hidden");
    $('#img_2').css("visibility","hidden");
    $('#img_3').css("visibility","hidden");

    if((beta >= 5 && beta < 10) || (beta <= -5 && beta > -10))
    {
      $('#roulage').text('mini');
  //test affichage
  //    $('#img_1').css("visibility","visible");
      inc_pression_roulage = 2;
    }
    else if((beta >= 10 && beta < 15) || (beta <= -10 && beta > -15))
    {
      $('#roulage').text('medium');
  //test affichage
  //    $('#img_2').css("visibility","visible");
      inc_pression_roulage = 4;
    }
    else if(beta >= 15 || beta <= -15)
    {
      $('#roulage').text('hard');
  //    $('#img_3').css("visibility","visible");
      inc_pression_roulage = 6;
    }
    else
    {
      $('#roulage').text('Parfait');
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
      $('#tangage').text('Parfait');
      inc_pression_tangage = 1;
    }
}
*/
}
