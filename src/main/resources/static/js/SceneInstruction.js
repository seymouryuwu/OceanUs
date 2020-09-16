class SceneInstruction extends Phaser.Scene {
    constructor() {
      super("instruction");
    }

    create() {
        this.background = this.add.image(0, 0, "background_instruction");
        this.background.setOrigin(0, 0);

        this.operationText1 = this.add.bitmapText(325, 100, "kiddoFont", "Control the shark cleaner to collect the", 25);
        this.operationText2 = this.add.bitmapText(380, 130, "kiddoFont", "following items except toilet paper!", 25);
        this.operationText3 = this.add.bitmapText(375, 160, "kiddoFont", "Use keys \'W\', \'A\', \'S\' \'D\' to control direction！", 25);
        
        this.eggShellText1 = this.add.bitmapText(150, 300, "kiddoFont", "Egg Shell", 30);
        this.eggShellText2 = this.add.bitmapText(175, 335, "kiddoFont", "+ 1", 30);

        this.milkBoxText1 = this.add.bitmapText(300, 300, "kiddoFont", "Milk Box", 30);
        this.milkBoxText2 = this.add.bitmapText(325, 335, "kiddoFont", "+ 3", 30);

        this.oilBottleText1 = this.add.bitmapText(425, 300, "kiddoFont", "Oil Bottle", 30);
        this.oilBottleText2 = this.add.bitmapText(450, 335, "kiddoFont", "+ 6", 30);

        this.medicineText1 = this.add.bitmapText(575, 300, "kiddoFont", "Medicine", 30);
        this.medicineText2 = this.add.bitmapText(600, 335, "kiddoFont", "+ 10", 30);

        this.medicineText1 = this.add.bitmapText(575, 300, "kiddoFont", "Medicine", 30);
        this.medicineText2 = this.add.bitmapText(600, 335, "kiddoFont", "+ 10", 30);

        this.fishText1 = this.add.bitmapText(250, 375, "kiddoFont", "Fish", 30);
        this.fishText2 = this.add.bitmapText(250, 410, "kiddoFont", "Speed up for", 30);
        this.fishText3 = this.add.bitmapText(250, 445, "kiddoFont", "10 seconds", 30);

        this.toiletPaperText1 = this.add.bitmapText(510, 375, "kiddoFont", "Toilet Paper", 30);
        this.toiletPaperText2 = this.add.bitmapText(510, 410, "kiddoFont", "Don\'t touch it!", 30);
        this.toiletPaperText3 = this.add.bitmapText(510, 445, "kiddoFont", "If you collect 3,", 30);
        this.toiletPaperText3 = this.add.bitmapText(510, 480, "kiddoFont", "game over!", 30);

        this.exit = this.add.image(400, 500, "exit").setScale(0.4);

        this.exit.setInteractive();
        this.exit.on('pointerup', () => { this.scene.start("main"); });
    }
}