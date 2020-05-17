// On définit nos variables
var options = {
    gravity: 2,
    difficulty: 1
};
var arrDifficulties = ['Facile', 'Moyen', 'Difficile'];
var gameInterval;
var loopInterval = 33;

var kenny;
var kennySpeed = 8;
var isDead = false;

var directions = {
    top: 0,
    left: 0
};
var pressedKeys = {};
var gravity = getRandomGravityDirection();
var gravityInterval = 8000;
var gravityTimer = 10000;
addToHomescreen();

//Equivalent du document ready de jQuery
$(document).on('pagecreate', function(e) {
    //OPTIONS
    //Quand on change la valeur #menuDonut
    $('#menuGravity').change(function() {
        //On sauvegarde la nouvelle valeur dans l'option adéquate puis on appel la fonction refreshInfo() pour mettre à jour l'affichage du footer
        options.gravity = parseInt($(this).val());
        refreshInfo();
    });

    //Quand on sélectionne autre bouton radion du groupe "menuDifficulty"
    $('input[name=menuDifficulty]').change(function() {
        //On sauvegarde la nouvelle valeur dans l'option adéquate et on met à jour la variable donutSpeed puis on appel la fonction refreshInfo() pour mettre à jour l'affichage du footer
        options.difficulty = parseInt($(this).val());
        refreshInfo();
    });

    //Au démarrage on appel la fonction refreshInfo() et refreshOptions()
    refreshInfo();
    refreshOptions();
}).on('pagecontainerbeforeshow', function (event, ui) {
    //Avant que l'on affiche une page, si l'on va vers la page game on supprime tout le contenu qu'il y avait dans le bloc main afin de pouvoir générer le jeu de nouveau
    if(ui.toPage.attr('id') == 'game') {
        $('#game .kenny').remove();
        isDead = false;
        $('#audio-jingle').get(0).play();
    }
    else
        clearInterval(gameInterval);//Si on va vers une autre page on arrete le gameInterval
}).on('pagecontainerchange', function( event, ui ) {
    //Quand on a changé de page, si l'on est arrivé sur la page game on démarre le jeu
    if(ui.toPage.attr('id') == 'game')
        initializeGame();
});

/***** Fonctions de la page home *****/
//Fonction permettant de mettre à jour l'affichage du footer de la page home
function refreshInfo() {
    $('.infoGravity').html(options.gravity);
    $('.infoDifficulty').html(arrDifficulties[options.difficulty - 1]);
}

//Fonction permettant de mettre à jour le menu option en fonction des options par défaut définits dans la variables options (on l'appelle au chargement de l'app)
//Grace à cette fonction on a juste à modifier la varible options et le menu sera automatiquement mis à jour
function refreshOptions() {
    $('#menuGravity').val(options.gravity).change();
    $('input[name=menuDifficulty][value=' + options.difficulty + ']').siblings('label').trigger('click');
}

/***** Fonctions de la page game *****/
function initializeGame(){
    $('#game div[data-role="main"]')
        //On définit la hauteur du bloc "main" de la page game pour qu'elle corresponde à la hauteur de la fenetre
        .css({height : window.innerHeight})
        .append('<div class="kenny"></div>')

    //On définit la position "left" de kenny pour le centrer
    kenny = $('.kenny');
    kenny.offset({
        left: (window.innerWidth / 2) - (kenny.width() / 2),
        top: (window.innerHeight / 2) - (kenny.height() / 2)
    });

    gravityTimer = gravityInterval - (options.difficulty * 1800);

    // On démarre l'interval gameInterval qui va executer toute les 33 milisecondes la fonction gameLoop()
    // Cette fonction se charge de faire bouger kenny dans la direction décidé mais aussi selon la direction dans laquelle la gravité l'attire
    // On va aussi vérifier si il entre en contact avec la lave sur le bord de l'écran et determiner si il est mort
    gameInterval = setInterval(function(){
        gameLoop();
    }, loopInterval);
}

//On récupère les données du gyroscope pour déplacer kenny
window.addEventListener('deviceorientation', function(e) {
    //Si l'on est pas sur la page game on ne fait rien
    if(!$('#game').is(':visible'))
        return;

    e.preventDefault();

    // On récupère les valeurs d'inclinaison du deviceorientation
    // On normalise ces valeurs pour avoir un nombre compris entre 0 et 1
    directions.left = Math.min(e.gamma / 65);
    directions.top = Math.min(e.beta / 65);
})

function gameLoop(){
    // On vérifie que kenny ne soit pas mort
    if(isDead)
        return;

    // On récupère la nouvelle position de kenny
    var offset = getKennyOffset();
    kenny.offset({ left : offset.left, top : offset.top });

    // On regarde si kenny est entré en contact avec la lave
    var rightOffset = offset.left + kenny.width();
    var bottomOffset = offset.top + kenny.height();
    if((offset.left <= 0 || rightOffset >= window.innerWidth) ||
        (offset.top <= 0 || bottomOffset >= window.innerHeight)
    )
        isDead = true;

    // Si Kenny est mort on change son image et on joue un son
    if(isDead){
        $('.audio-dead').get(0).play();
        kenny.addClass('dead');
    }

    // Le bloc de code suivant permet de déterminer à quelle moment la gravité va changer de direction
    // Selon la difficulté, l'interval entre chaque changement de direction est de plus en plus court
    gravityTimer -= loopInterval;
    if(gravityTimer <= 0){
        gravityTimer = gravityInterval - (options.difficulty * 1800);
        gravity = getRandomGravityDirection();
    }
}

// Cette fonction permet de déterminer la nouvelle position de kenny selon 2 critères
// 1) La direction dans laquelle on le fait aller
// 2) La direction dans laquelle kenny est attirée par la gravité
function getKennyOffset(){
    // On récupère la position actuelle de Kenny
    var kennyOffset = kenny.offset();

    // On applique la direction vers laquelle on souhaite le faire aller (touche ou orientation)
    var horizontalMove = kennyOffset.left + (directions.left * kennySpeed);
    var verticalMove = kennyOffset.top + (directions.top * kennySpeed);

    // On applique la gravité
    horizontalMove += ((kennySpeed / 10) * options.gravity) * gravity.horizontal;
    verticalMove += ((kennySpeed / 10) * options.gravity) * gravity.vertical;

    // Ensuite on vérifie si kenny ne sort pas en dehors de l'écran
    // Auquel cas, on ajuste sa position pour qu'il reste toujours visible
    var leftOffset = horizontalMove;
    if(horizontalMove > 0){
        if((horizontalMove + kenny.width()) >= window.innerWidth)
            leftOffset = window.innerWidth - kenny.width();
    }
    else
        leftOffset = 0;

    var topOffset = verticalMove;
    if(verticalMove > 0) {
        if((verticalMove + kenny.height()) >= window.innerHeight)
            topOffset = window.innerHeight - kenny.height();
    }
    else
        topOffset = 0;

    return { left: leftOffset, top: topOffset };
}

function getRandomGravityDirection(){
    var horizontal = Math.floor(Math.random() * (1 - -1 + 1)) - 1,
        vertical = Math.floor(Math.random() * (1 - -1 + 1)) - 1;

    if(!horizontal && !vertical)
        horizontal = 1;

    return { horizontal: horizontal, vertical: vertical };
}
