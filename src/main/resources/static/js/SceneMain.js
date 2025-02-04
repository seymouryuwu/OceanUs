class SceneMain extends Phaser.Scene {
    constructor() {
      super("main");
    }

    create() {
        this.background = this.add.image(0, 0, "background_main");
        this.background.setOrigin(0, 0);

        this.start = this.add.image(350, 450, "start").setScale(0.4);
        this.exit = this.add.image(500, 450, "exit").setScale(0.4);
        this.help = this.add.image(425, 400, "help").setScale(0.4);

        this.start.setInteractive();
        this.exit.setInteractive();
        this.help.setInteractive();
        this.start.on('pointerup', () => { this.scene.start("playGame"); });
        this.help.on('pointerup', () => { this.scene.start("instruction"); });
        // this.exit.on('pointerup', () => { this.sys.game.destroy(true); });
        this.exit.on('pointerup', () => { closeSharkGame(); });      
    }
}
