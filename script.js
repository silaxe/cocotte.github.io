let beta, gamma, pression, incRoulis, incTangage, vapeur;

window.onload = function () {
  if ( window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function' ){
      const banner = document.createElement('div')
      banner.innerHTML = `<div id="autorisation" style="z-index: 1; position: absolute; width: 100%; background-color:#000; color: #fff"><p style="padding: 10px">Cliquez ici pour autoriser l'accès à votre capteur de mouvements.</p></div>`
      banner.onclick = ClickRequestDeviceOrientationEvent //
      document.querySelector('body').appendChild(banner)
  }

  function ClickRequestDeviceOrientationEvent () {
    window.DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          window.addEventListener('deviceorientation',function(e) {
    document.getElementById('autorisation').style.display = 'none';
    beta=(Math.round(e.beta));
    gamma=(Math.round(e.gamma));
    //on passe les valeurs récupérées à la fonction calcul
    calcul();
      }
          )} else {
          alert("Désolé, vous ne pouvez pas jouer à ce jeu car votre appareil n'a pas de capteur de mouvement.")
        }
      })
      .catch(e => {
        console.error(e)
    })
}

  function calcul() {
    //il faut trouver un moyen d'incrémenter la pression, pression+pression ?
    document.getElementById('beta').innerHTML = ('Roulis : '+beta);
    document.getElementById('gamma').innerHTML = ('Tangage : '+gamma);
    document.getElementById('pression').innerHTML = ('Pression : '+pression);
    document.getElementById('incRoulis').innerHTML = incRoulis;
    document.getElementById('incTangage').innerHTML = incTangage;
    pression = pression + Math.round((incRoulis+incTangage)/2);

    if((beta >= 5 && beta < 10) || (beta <= -5 && beta > -10))
    {
      incRoulis = 2;
    }
    else if((beta >= 10 && beta < 15) || (beta <= -10 && beta > -15))
    {
      incRoulis = 4;
    }
    else if(beta >= 15 || beta <= -15)
    {
      incRoulis = 6;
    }
    else
    {
      incRoulis = 1;
    }

    if((gamma >= 10 && gamma < 15) || (gamma <= -10 && gamma > -15))
    {
      incTangage = 2;
    }
    else if((gamma >= 15 && gamma < 30) || (gamma <= -15 && gamma > -30))
    {
      incTangage = 4;
    }
    else if(gamma >= 30 || gamma <= -30)
    {
      incTangage = 6;
    }
    else
    {
      incTangage = 1;
    }
  }
}

//Solution pour récupérer les paramètres de jeu depuis la fenêtre Option
//you can very easily use this to re-use the value of the variable in another function.
// Use this in source window.var1= oEvent.getSource().getBindingContext();
// Get value of var1 in destination var var2= window.var1;
