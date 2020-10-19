
var aid = '';

$( document ).ready(function() {
    let searchParams = new URLSearchParams(window.location.search);
    aid = searchParams.get('aid');
});


var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");

$(document).ajaxSend(function(e, xhr, options) {
    xhr.setRequestHeader(header, token);
});

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

function closeSharkGame() {

  if (aid && aid != 0) {
    window.open('content/' + aid, '_self');
  } else {
    window.history.back();
  }

}
