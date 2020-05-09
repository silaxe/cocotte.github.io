window.onload = function () {
  // Check if is IOS 13 when page loads. Solution Aframe
  if ( window.DeviceMotionEvent && typeof window.DeviceMotionEvent.requestPermission === 'function' ){
      // Everything here is just a lazy banner. You can do the banner your way.
      const banner = document.createElement('div')
      banner.innerHTML = `<div style="z-index: 1; position: absolute; width: 100%; background-color:#000; color: #fff"><p style="padding: 10px">Click here to enable DeviceMotion</p></div>`
      banner.onclick = ClickRequestDeviceMotionEvent // You NEED to bind the function into a onClick event. An artificial 'onClick' will NOT work.
      document.querySelector('body').appendChild(banner)
  }

  function ClickRequestDeviceMotionEvent () {
    window.DeviceMotionEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          alert("oui");
          window.addEventListener('devicemotion',
            () => { console.log('DeviceMotion permissions is granted.') },
            (e) => { throw e }
      document.getElementById('roulage').innerHTML = Math.round(event.acceleration.x);
        )} else {
          console.log('DeviceMotion permissions not granted.')
          alert("Non")
        }
      })
      .catch(e => {
        console.error(e)
    })
  }
//fonction pour interagir avec e ?
}
