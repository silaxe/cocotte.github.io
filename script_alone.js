window.onload = function () {
  // Check if is IOS 13 when page loads. Solution Aframe
  if ( window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function' ){
      // Everything here is just a lazy banner. You can do the banner your way.
      const banner = document.createElement('div')
      banner.innerHTML = `<div style="z-index: 1; position: absolute; width: 100%; background-color:#000; color: #fff"><p style="padding: 10px">Click here to enable DeviceOrientation</p></div>`
      banner.onclick = ClickRequestDeviceOrientationEvent // You NEED to bind the function into a onClick event. An artificial 'onClick' will NOT work.
      document.querySelector('body').appendChild(banner)
  }

  function ClickRequestDeviceOrientationEvent () {
    window.DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          alert("oui");
          window.addEventListener('deviceorientation',function(e) {
    window.getElementById('roulage').innerHTML = (e.alpha) ;
//document.getElementById('acceleration-including-gravity-x').innerHTML = Math.round(event.accelerationIncludingGravity.x);
    })

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
}
