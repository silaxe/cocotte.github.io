window.onload = function () {
  // Check if is IOS 13 when page loads. Solution Aframe
  if ( window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function' ){
      // Everything here is just a lazy banner. You can do the banner your way.
      const banner = document.createElement('div')
      banner.innerHTML = `<div id="auto" style="z-index: 1; position: absolute; width: 100%; background-color:#000; color: #fff"><p style="padding: 10px">Click here to remove auto</p></div>`
      banner.onclick = ClickRequestDeviceOrientationEvent // You NEED to bind the function into a onClick event. An artificial 'onClick' will NOT work.
      document.querySelector('body').appendChild(banner)
  }

  function ClickRequestDeviceOrientationEvent () {
    window.DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          window.addEventListener('deviceorientation',function(e) {
    document.getElementById('auto').style.display = 'none';
    document.getElementById('beta').innerHTML = Math.round(e.beta);
    document.getElementById('gamma').innerHTML = Math.round(e.gamma);
  //  calcul();
  }
//document.getElementById('acceleration-including-gravity-x').innerHTML = Math.round(event.accelerationIncludingGravity.x);
          )} else {
          console.log('DeviceOrientation permissions not granted.')
          alert("Non")
        }
      })
      .catch(e => {
        console.error(e)
    })
  }
//fonction pour interagir avec e ?
//  function calcul() {
//  let i = 1;
//  let interval = setInterval(increment, 1000);
//  function increment(){i = i % 360 + 1;}
//  pression=incRoulis+incTangage;
//  document.getElementById('beta').innerHTML = ('Roulis : '+beta);
//  document.getElementById('gamma').innerHTML = ('Tangage : '+gamma);
//  document.getElementById('pression').innerHTML = ('Pressurisé : '+pression);
//  document.getElementById('incRoulis').innerHTML = incRoulis;
//  document.getElementById('incTangage').innerHTML = incTangage;
//  document.getElementById('interval').innerHTML = ('Intervalle : '+interval);

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
