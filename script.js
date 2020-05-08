window.onload = function () {

function ClickRequestDeviceMotionEvent () {
  window.DeviceMotionEvent.requestPermission()
    .then(response => {
      if (response === 'granted') {
        window.addEventListener('devicemotion',
          () => { console.log('DeviceMotion permissions granted.') },
          (e) => { throw e }
      )} else {
        console.log('DeviceMotion permissions not granted.')
      }
    })
    .catch(e => {
      console.error(e)
    })
  }
}
