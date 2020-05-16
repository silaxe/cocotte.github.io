let beta, gamma,pression=(beta+gamma);

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
    document.getElementById('beta').innerHTML = ('Roulis : '+beta);
    document.getElementById('gamma').innerHTML = ('Tangage : '+gamma);
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
    document.getElementById('pression').innerHTML = ('Pression : '+pression);
  }
}
