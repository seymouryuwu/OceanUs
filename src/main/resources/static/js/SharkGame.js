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