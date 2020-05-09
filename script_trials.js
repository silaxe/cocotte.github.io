window.onload = function () {

//panellum solution. "U must assign the function to an onClick rather than have it run in the sequential flow of the script.é"
  function onClick()
  {
  	if (typeof DeviceMotionEvent.requestPermission === 'function')
  	{
  		DeviceMotionEvent.requestPermission()
  		.then(permissionState => {
  			if (permissionState === 'granted')
        //rajouter suppression de la bannière si permission accordée
  			{
  				// DeviceMotionEvent.requestPermission() has been granted
  			}
          })
          .catch(console.error);
    }
  }
}
