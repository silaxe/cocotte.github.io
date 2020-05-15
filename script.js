window.onload = function () {
  // Check if is IOS 13 when page loads. Solution Aframe
  if ( window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function' ){
      // Everything here is just a lazy banner. You can do the banner your way.
      const banner = document.createElement('div')
      banner.innerHTML = `<div id="autorisation" style="z-index: 1; position: absolute; width: 100%; background-color:#000; color: #fff"><p style="padding: 10px">Cliquez ici pour autoriser l'accès à votre capteur de mouvements.</p></div>`
      banner.onclick = ClickRequestDeviceOrientationEvent // You NEED to bind the function into a onClick event. An artificial 'onClick' will NOT work.
      document.querySelector('body').appendChild(banner)
  }

  function ClickRequestDeviceOrientationEvent () {
    window.DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          window.addEventListener('deviceorientation',function(e) {
    document.getElementById('autorisation').style.display = 'none';
    document.getElementById('beta').innerHTML = Math.round('Roulis : '+e.beta);
    document.getElementById('gamma').innerHTML = Math.round('Tangage : '+e.gamma) ;
  }
//document.getElementById('acceleration-including-gravity-x').innerHTML = Math.round(event.accelerationIncludingGravity.x);
          )} else {
          alert("Désolé, vous ne pouvez pas jouer à ce jeu car votre appareil n'a pas de capteur de mouvement.")
        }
      })
      .catch(e => {
        console.error(e)
    })
  }
//fonction pour interagir avec e ?
}
