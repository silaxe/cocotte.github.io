/* On définie nos variables
var options = {
    nb_joueurs: 2,
    difficulty: 1
};
var arrDifficulties = ['Facile', 'Moyen', 'Difficile'];*/
/*$(function(){
  $(document).bind("tap",tapHandler);
    function tapHandler(event){
      console.log("taped")
      $(event.target).css("background-color","red");
  }
});
Appel du gyroscope
window.onload = function () {

  // Check if is IOS 13 when page loads.
  if ( window.DeviceMotionEvent && typeof window.DeviceMotionEvent.requestPermission === 'function' ){

      // Everything here is just a lazy banner. You can do the banner your way.
      const banner = document.createElement('div')
      banner.innerHTML = `<div style="z-index: 1; position: absolute; width: 100%; background-color:#000; color: #fff"><p style="padding: 10px">Click here to enable DeviceMotion</p></div>`
      banner.onclick = ClickRequestDeviceMotionEvent // You NEED to bind the function into a onClick event. An artificial 'onClick' will NOT work.
      document.querySelector('body').appendChild(banner)
  }
}
*/

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
/*DeviceOrientationEvent.requestPermission()
.then(response => {
  if (response == 'granted') {
    window.addEventListener('deviceorientation', (e) => {
      // do something with e
    })
  }
})
.catch(console.error)*/
