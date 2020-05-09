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
          window.addEventListener('devicemotion',
            () => { console.log('DeviceMotion permissions granted.') },
             banner.style.property = #ff0000;
            (e) => { throw e }
        )} else {
          console.log('DeviceMotion permissions not granted.')
        }
      })
      .catch(e => {
        console.error(e)
    })
  }

  window.addEventListener('devicemotion', function(event) {
    const nb = document.getElementById("nb");
    nb.innerHTML = (event.acceleration.x);
  });
}
