let beta, gamma, pression=0, gameover=false, audio_source;

//window.onload = function () {
function bannerAuthorisation() {
   if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function'){
      const banner = document.createElement('div');
      banner.innerHTML = `<div id="autorisation" style="z-index: 1; position: absolute; width: 100%; background-color:#000; color: #fff" onclick="clickRequestDeviceOrientationEvent(); launchAudio();"><p style="padding: 10px">Cliquez ici pour autoriser l'accès à votre capteur de mouvements.</p></div>`;
//      banner.onclick = clickRequestDeviceOrientationEvent();
      document.querySelector('body').appendChild(banner)
}
else {
  alert("Essaye avec un iphone");
  alert(typeof window.DeviceOrientationEvent);
  alert(typeof window.DeviceOrientationEvent.requestPermission);
  alert(typeof DeviceOrientationEvent.requestPermission);

  }
}
 //}

function clickRequestDeviceOrientationEvent() {
  window.DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
            window.addEventListener('deviceorientation', (e) => {
            document.getElementById('autorisation').style.display = 'none';
            beta=(Math.round(e.beta));
            gamma=(Math.round(e.gamma));
            changeColor();
            increasePression();
            changeSound();
            document.getElementById('roulis').innerHTML = ('Roulis** : '+beta);
            document.getElementById('tangage').innerHTML = ('Tangage : '+gamma);
            document.getElementById('jauge').innerHTML = ('Pression : '+pression);
            }
          )} else {
          alert("Désolé, vous ne pouvez pas jouer à ce jeu car votre appareil n'a pas de capteur de mouvement.")
      }
  })
      .catch(e => {
        console.error(e)
  })
}

// document.getElementById("start").addEventListener("click", function() {
// refreshInfo();
// });


// function refreshInfo() {
//  pression=0;
//}

function test (){
  document.getElementById("difficulté").innerHTML = pression;
}

function increasePression() {

    if (gameover) {
      document.getElementById('jauge').style.color = "purple";
      document.getElementById('gameover').style.visibility = "visible";
    } else {
      if((beta >= 5 && beta < 10) || (beta <= -5 && beta > -10))
      {
        pression+=2;
      }
      else if((beta >= 10 && beta < 15) || (beta <= -10 && beta > -15))
      {
        pression+=4;
      }
      else if(beta >= 15 || beta <= -15)
      {
        pression+=6;
      }
      else
      {
        pression+=1;
      }
      if((gamma >= 10 && gamma < 15) || (gamma <= -10 && gamma > -15))
      {
        pression+=2;
      }
      else if((gamma >= 15 && gamma < 30) || (gamma <= -15 && gamma > -30))
      {
        pression+=4;
      }
      else if(gamma >= 30 || gamma <= -30)
      {
        pression+=6;
      }
      else
      {
        pression+=1;
      }
  }
}

function changeColor () {

  if (pression == 0) {
    document.getElementById('jauge').style.color = "purple";
    }

  else if (pression >= 0 && pression < 500) {
    document.getElementById('jauge').style.color = "green";
    }

  else if (pression >= 500 && pression < 1000) {
    document.getElementById('jauge').style.color = "orange";
    }

  else if (pression >= 1000 && pression <= 1999) {
    document.getElementById('jauge').style.color = "red";
    }

  else {
    gameover = true;
    }
  }

function launchAudio() {

  const audio = document.getElementById("au");
  audio.play();

  const startPlaying = ()=>{
    audio.removeEventListener('playing', startPlaying);
    audio.src = 'https://raw.githubusercontent.com/anars/blank-audio/master/5-seconds-of-silence.mp3';
    audio.play();
  }
  audio.addEventListener('playing', startPlaying);

}

function changeSound() {

//Fonction sonore qui tourne dans la boucle deviceorientation:
// i) on examine le changement de la variable jauge;
// ia) si la variable ne change pas, on break;
// ib) si la variable change et que la nouvelle couleur est X, on lance le son suivant.

//const startPlaying = ()=>{
//  audio.removeEventListener('playing', startPlaying);
//  audio.src = 'assets/son_hard.mp3';
//  audio.play();
//  audio.loop = true;
//}
//audio.addEventListener('playing', startPlaying);

}

// Pour faire des boucles sonores sans blanc, voir SeamlessLoop 2.0 for JavaScript: https://github.com/Hivenfour/SeamlessLoop

/*
Solution pour récupérer les paramètres de jeu depuis la fenêtre Options
you can very easily use this to re-use the value of the variable in another function.
Use this in source window.var1= oEvent.getSource().getBindingContext();
Get value of var1 in destination var var2= window.var1;
*/
