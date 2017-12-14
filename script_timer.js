// On définie nos variables
var options = {
    nb_joueurs: 2,
    difficulty: 1
};
var arrDifficulties = ['Facile', 'Moyen', 'Difficile'];

// Jeu

  $(function(){
    $( "div.safeZone" ).bind( "tap", tapHandler );
      function tapHandler( event ){
        console.log("taped")
        $( event.target ).css("background-color", "red");
      }
    });
