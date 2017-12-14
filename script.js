$(document).ready(function() {
    //On test si le navigateur peut accéder au gyroscope
    if (window.DeviceOrientationEvent)
    {
        $('#type').html('DeviceOrientation');
        //Dans le cas DeviceOrientationEvent on écoute l'évenement deviceorientation
        window.addEventListener('deviceorientation', function(e) {
            //gamma calcul en degrés la position gauche/droite (droite positif)
            var x = e.gamma;

            //beta calcul en degrés la position haut/bas (haut positif)
            var y = e.beta;

            //alpha calcul en degrés la position de la boussole
            var dir = e.alpha

            //On écrit les valeurs dans les span HTML
            $('#Gamma').html(Math.round(x));
            $('#Beta').html(Math.round(y));
            $('#Alpha').html(Math.round(dir));

            //On écrit détecte le mouvement gauche/droite, s'il est plus grand que 0 on augmente le rouge de la div, sinon on augmente le noir de la div
            if(x>0)
                $('#carre').css('background', '-webkit-gradient(linear, left top, right top, color-stop(' + x/90 + ', #ff0000), color-stop(1, #000000))');
            else
                $('#carre').css('background', '-webkit-gradient(linear, left top, right top, color-stop(0, #ff0000), color-stop(' + (1-(x/-90)) + ', #000000))');

        }, false);
    }
    else
        $('#type').html('Non supporté');
});
