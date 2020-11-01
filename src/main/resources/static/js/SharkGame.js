/* --------------- */
/* OCEANUS PROJECT */
/* --------------- */

/* JAVASCRIPT  : Adventure Quiz Page */
/* DESCRIPTION : JavaScript functions only applicable to the adventure quiz page */
/* AUTHOR      : Malcolm Malloy */
/* TARGET HTML : templates/adventurequiz.html */

/* ---------------------------- */
/* SHARK VS RUBBISH : PAGE LOAD */
/* ---------------------------- */
/* Retrieves aid parameter from URL */

var aid = '';

$( document ).ready(function() {
    let searchParams = new URLSearchParams(window.location.search);
    aid = searchParams.get('aid');
});


/* ------------------------------------ */
/* SHARK VS RUBBISH : LOAD PAGE HEADERS */
/* ------------------------------------ */
/* Loads the headers to attach to AJAX post requests */

var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");

$(document).ajaxSend(function(e, xhr, options) {
    xhr.setRequestHeader(header, token);
});


/* ------------------------------ */
/* SHARK VS RUBBISH : GAME CONFIG */
/* ------------------------------ */

var gameSettings = {
  sharkSpeed: 200,
  sharkHighSpeed: 400,
  sharkLowSpeed: 75,
  maxPowerups: 2,
  powerUpVel: 50,
}

var config = {
  width: 800, //256
  height: 600, //272
  backgroundColor: 0x000000,
  parent: "shark_section",
  scene: [SceneBootGame, SceneMain, SceneInstruction, ScenePlayGame, SceneGameOver],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
}

var game = new Phaser.Game(config);


/* ----------------------------------- */
/* SHARK VS RUBBISH : CLOSE SHARK GAME */
/* ----------------------------------- */
/* If aid is set navigate to next article
   Navigates to the previous page if aid is not set*/

function closeSharkGame() {

  if (aid && aid != 0) {
    window.open('adventurequiz/' + aid, '_self');
  } else {
    window.history.back();
  }

}
