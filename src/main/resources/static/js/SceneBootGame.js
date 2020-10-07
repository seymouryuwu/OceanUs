class SceneBootGame extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background_main", "../static/images/shark-game/main.png");

    this.load.image("start", "../static/images/shark-game/start.png");
    this.load.image("exit", "../static/images/shark-game/exit.png");
    this.load.image("help", "../static/images/shark-game/help.png");

    this.load.image("background_instruction", "../static/images/shark-game/instruction.png")

    this.load.image("background_up", "../static/images/shark-game/background_up.png");
    this.load.image("background_down", "../static/images/shark-game/background_down.png");
    this.load.image("bar", "../static/images/shark-game/bar.png");

<<<<<<< Updated upstream
    this.load.image("toilet_paper_origin", "../images/shark-game/toilet_paper_origin.png");

    this.load.spritesheet("shark", "../images/shark-game/shark_cropped.png", { frameWidth: 1000, frameHeight: 790 });
    this.load.image("eggshell", "../images/shark-game/eggshell.png");
    this.load.image("fish", "../images/shark-game/fish.png");
    this.load.image("medicine", "../images/shark-game/medicine.png");
    this.load.image("milk_box", "../images/shark-game/milk_box.png");
    this.load.image("oil_bottle", "../images/shark-game/oil_bottle.png");
    this.load.image("waterdrop", "../images/shark-game/waterdrop.png");
    this.load.image("toilet_paper", "../images/shark-game/toilet_paper.png");
=======
    this.load.spritesheet("shark", "../static/images/shark-game/shark_cropped.png", { frameWidth: 1000, frameHeight: 790 });
    this.load.image("eggshell", "../static/images/shark-game/eggshell.png");
    this.load.image("fish", "../static/images/shark-game/fish.png");
    this.load.image("medicine", "../static/images/shark-game/medicine.png");
    this.load.image("milk_box", "../static/images/shark-game/milk_box.png");
    this.load.image("oil_bottle", "../static/images/shark-game/oil_bottle.png");
    this.load.image("waterdrop", "../static/images/shark-game/waterdrop.png");
    this.load.image("toilet_paper", "../static/images/shark-game/toilet_paper.png");
>>>>>>> Stashed changes

    this.load.bitmapFont("kiddoFont", "../static/fonts/font.png", "../static/fonts/font.xml");

    this.load.image("background_gameover", "../static/images/shark-game/gameover.png");
    this.load.image("play_again", "../static/images/shark-game/play_again.png");
  }

  create() {
    this.background = this.add.image(0, 0, "background_main");
    this.background.setOrigin(0, 0);
    this.add.text(400, 400, "Loading game...");
    this.scene.start("main");

    this.anims.create({
      key: "shark_left",
      frames: [{ key: "shark", frame: 0 }],
      frameRate: 20
    });

    this.anims.create({
      key: "shark_right",
      frames: [{ key: "shark", frame: 1 }],
      frameRate: 20
    });
  }
}
