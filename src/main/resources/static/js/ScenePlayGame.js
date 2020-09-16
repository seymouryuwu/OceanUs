class ScenePlayGame extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.rnd = Phaser.Math.RND;
        this.backgroundUp = this.add.tileSprite(0, 0, 800, 150, "background_up");
        this.backgroundUp.setOrigin(0, 0);
        this.backgroundDown = this.add.tileSprite(0, 150, 800, 450, "background_down");
        this.backgroundDown.setOrigin(0, 0);

        this.physics.world.enableBody(this.backgroundUp);
        this.backgroundUp.body.setImmovable();

        this.bar = this.physics.add.image(400, 563, "bar");
        this.bar.setImmovable();

        this.score = 0;
        this.lives = 3;
        this.stage = 1;
        this.initialTime = 180;

        this.shark = this.physics.add.sprite(750, 300, "shark").setScale(0.08);
        this.shark.setCollideWorldBounds(true);

        this.sharkSpeed = gameSettings.sharkSpeed;
        this.isSharkSpeedUp = false;
        this.isSharkSpeedDown = false;

        this.sharkBuffTimerConfig = {
            delay: 10000,
            callback: this.resetSharkSpeed,
            callbackScope: this,
            loop: true
        };
        this.sharkBuffTimer = this.time.addEvent(this.sharkBuffTimerConfig);

        this.sharkDebuffTimerConfig = {
            delay: 1000,
            callback: this.resetSharkSpeed,
            callbackScope: this,
            loop: true
        };
        this.sharkDebuffTimer = this.time.addEvent(this.sharkDebuffTimerConfig);

        this.eggShells = this.add.group();
        this.milkBoxes = this.add.group();
        this.oilBottles = this.add.group();
        this.medicines = this.add.group();
        this.fishes = this.add.group();
        this.toiletPapers = this.add.group();

        this.createItemSpeedConfig();
        this.createThrowItemsTimers();

        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel = this.add.bitmapText(10, 545, "kiddoFont", "SCORE " + scoreFormated, 40);

        this.lifeIcon = this.physics.add.image(300, 563, "toilet_paper").setScale(0.05);
        this.lifeLabel = this.add.bitmapText(340, 545, "kiddoFont", "X " + this.lives, 40);

        this.timeLabel = this.add.bitmapText(500, 545, "kiddoFont", this.formatTime(this.initialTime), 40);
        this.countdownTimer = this.time.addEvent({ delay: 1000, callback: this.clockOnEvent, callbackScope: this, loop: true });

        this.exit = this.add.image(700, 563, "exit").setScale(0.4);
        this.exit.setInteractive();
        this.exit.on('pointerup', () => { this.scene.start("main"); });

        this.physics.add.collider(this.shark, this.backgroundUp);
        this.physics.add.collider(this.shark, this.bar);

        this.physics.add.overlap(this.shark, this.eggShells, this.collectEggShell, null, this);
        this.physics.add.overlap(this.shark, this.milkBoxes, this.collectMilkBox, null, this);
        this.physics.add.overlap(this.shark, this.oilBottles, this.collectOilBottle, null, this);
        this.physics.add.overlap(this.shark, this.medicines, this.collectMedicine, null, this);
        this.physics.add.overlap(this.shark, this.fishes, this.collectFish, null, this);
        this.physics.add.overlap(this.shark, this.toiletPapers, this.collectToiletPaper, null, this);

        this.AKey = this.input.keyboard.addKey("A");
        this.DKey = this.input.keyboard.addKey("D");
        this.WKey = this.input.keyboard.addKey("W");
        this.SKey = this.input.keyboard.addKey("S");


    }

    update() {
        this.backgroundUp.tilePositionX -= 0.5;
        this.backgroundDown.tilePositionX -= 0.8;

        this.movePlayerManager();

        if (this.score < 30) {
            this.stage = 1;
        } else if (this.score < 100) {
            this.stage = 2;
            this.throwItemsTimer2.paused = false;
        } else if (this.score < 300) {
            this.stage = 3;
            this.throwItemsTimer3.paused = false;
        } else {
            this.stage = 4;
            this.throwItemsTimer4.paused = false;
        }

        this.clearProjectTiles();
    }

    collectEggShell(shark, eggShell) {
        eggShell.destroy();
        // TO DO waterdrop
        this.score += 1;
        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel.text = "SCORE " + scoreFormated;
    }

    collectMilkBox(shark, milkBox) {
        milkBox.destroy();
        // TO DO waterdrop
        this.score += 3;
        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel.text = "SCORE " + scoreFormated;
    }

    collectOilBottle(shark, oilBottle) {
        oilBottle.destroy();
        // TO DO waterdrop
        this.score += 6;
        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel.text = "SCORE " + scoreFormated;
    }

    collectMedicine(shark, medicine) {
        medicine.destroy();
        // TO DO waterdrop
        this.score += 10;
        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel.text = "SCORE " + scoreFormated;
    }

    collectFish(shark, fish) {
        fish.destroy();
        // TO DO waterdrop
        this.isSharkSpeedDown = false;
        this.isSharkSpeedUp = true;
        this.sharkDebuffTimer.paused = true;
        this.sharkBuffTimer.reset(this.sharkBuffTimerConfig);
    }

    collectToiletPaper(shark, toiletPaper) {
        toiletPaper.destroy();
        // TO DO waterdrop
        this.isSharkSpeedUp = false;
        this.isSharkSpeedDown = true;
        this.sharkBuffTimer.paused = true;
        this.sharkDebuffTimer.reset(this.sharkDebuffTimerConfig);

        if (this.lives > 0) {
            this.lives -= 1;
        }
        this.lifeLabel.text = "X " + this.lives;

        if (this.lives == 0) {
            var scoreData = {
                score: this.score
            }
            this.scene.start("gameOver", scoreData);
        }
    }

    throwItems() {
        if (this.stage == 1) {
            var itemSpeedConfig = this.itemSpeedConfig1;
        } else if (this.stage == 2) {
            var itemSpeedConfig = this.itemSpeedConfig2;
        } else if (this.stage == 3) {
            var itemSpeedConfig = this.itemSpeedConfig3;
        } else if (this.stage == 4) {
            var itemSpeedConfig = this.itemSpeedConfig4;
        }

        var categoryValue = this.rnd.between(1, 100);
        var positionValue = this.rnd.between(200, 500);

        if (categoryValue <= 32) {
            var eggShell = new EggShell(this, positionValue, itemSpeedConfig.eggShellSpeed);
        } else if (categoryValue <= 56) {
            var milkBox = new MilkBox(this, positionValue, itemSpeedConfig.milkBoxSpeed);
        } else if (categoryValue <= 72) {
            var oilBottle = new OilBottle(this, positionValue, itemSpeedConfig.oilBottleSpeed);
        } else if (categoryValue <= 80) {
            var medicine = new Medicine(this, positionValue, itemSpeedConfig.medicineSpeed);
        } else if (categoryValue <= 85) {
            var fish = new Fish(this, positionValue, itemSpeedConfig.fishSpeed);
        } else {
            var toiletPaper = new ToiletPaper(this, positionValue, itemSpeedConfig.toiletPaperSpeed);
        }

        //var fish = new Fish(this, positionValue, itemSpeedConfig.fishSpeed);
        //var toiletPaper = new ToiletPaper(this, positionValue, itemSpeedConfig.toiletPaperSpeed);
    }

    createThrowItemsTimers() {
        this.throwItemsTimer1 = this.time.addEvent({
            delay: 2000,
            callback: this.throwItems,
            callbackScope: this,
            loop: true
        });

        this.throwItemsTimer2 = this.time.addEvent({
            delay: 1500,
            callback: this.throwItems,
            callbackScope: this,
            loop: true,
            paused: true
        });

        this.throwItemsTimer3 = this.time.addEvent({
            delay: 1000,
            callback: this.throwItems,
            callbackScope: this,
            loop: true,
            paused: true
        });

        this.throwItemsTimer4 = this.time.addEvent({
            delay: 500,
            callback: this.throwItems,
            callbackScope: this,
            loop: true,
            paused: true
        });

    }

    createItemSpeedConfig() {
        this.itemSpeedConfig1 = {
            eggShellSpeed: 75,
            milkBoxSpeed: 125,
            oilBottleSpeed: 175,
            medicineSpeed: 225,
            fishSpeed: 150,
            toiletPaperSpeed: 175
        };

        this.itemSpeedConfig2 = {
            eggShellSpeed: 100,
            milkBoxSpeed: 150,
            oilBottleSpeed: 200,
            medicineSpeed: 250,
            fishSpeed: 175,
            toiletPaperSpeed: 200
        };

        this.itemSpeedConfig3 = {
            eggShellSpeed: 150,
            milkBoxSpeed: 200,
            oilBottleSpeed: 250,
            medicineSpeed: 300,
            fishSpeed: 225,
            toiletPaperSpeed: 250
        };

        this.itemSpeedConfig4 = {
            eggShellSpeed: 250,
            milkBoxSpeed: 300,
            oilBottleSpeed: 350,
            medicineSpeed: 400,
            fishSpeed: 325,
            toiletPaperSpeed: 350
        };
    }

    movePlayerManager() {
        this.shark.setVelocity(0);
        if (this.isSharkSpeedUp) {
            this.sharkSpeed = gameSettings.sharkHighSpeed;
        }

        if (this.isSharkSpeedDown) {
            this.sharkSpeed = gameSettings.sharkLowSpeed;
        }

        if (this.AKey.isDown) {
            this.shark.setVelocityX(- this.sharkSpeed);
            this.shark.play("shark_left");
        } else if (this.DKey.isDown) {
            this.shark.setVelocityX(this.sharkSpeed);
            this.shark.play("shark_right");
        }

        if (this.WKey.isDown) {
            this.shark.setVelocityY(- this.sharkSpeed);
        } else if (this.SKey.isDown) {
            this.shark.setVelocityY(this.sharkSpeed);
        }
    }

    resetSharkSpeed() {
        this.sharkSpeed = gameSettings.sharkSpeed;
        this.isSharkSpeedUp = false;
        this.isSharkSpeedDown = false;
    }

    zeroPad(number, size) {
        var stringNumber = String(number);
        while (stringNumber.length < (size || 2)) {
            stringNumber = "0" + stringNumber;
        }
        return stringNumber;
    }

    formatTime(seconds){
        var minutes = Math.floor(seconds/60);
        var partInSeconds = seconds%60;
        partInSeconds = partInSeconds.toString().padStart(2,'0');
        
        return `${minutes}:${partInSeconds}`;
    }

    clockOnEvent() {
        this.initialTime -= 1;
        this.timeLabel.setText(this.formatTime(this.initialTime));

        if (this.initialTime == 0) {
            var scoreData = {
                score: this.score
            }
            this.scene.start("gameOver", scoreData);
        }
    }

    clearProjectTiles() {
        for (var i = 0; i < this.eggShells.getChildren().length; i++) {
            var eggShell = this.eggShells.getChildren()[i];
            eggShell.update();
        }

        for (var i = 0; i < this.milkBoxes.getChildren().length; i++) {
            var milkBox = this.milkBoxes.getChildren()[i];
            milkBox.update();
        }

        for (var i = 0; i < this.oilBottles.getChildren().length; i++) {
            var oilBottle = this.oilBottles.getChildren()[i];
            oilBottle.update();
        }

        for (var i = 0; i < this.medicines.getChildren().length; i++) {
            var medicine = this.medicines.getChildren()[i];
            medicine.update();
        }

        for (var i = 0; i < this.fishes.getChildren().length; i++) {
            var fish = this.fishes.getChildren()[i];
            fish.update();
        }

        for (var i = 0; i < this.toiletPapers.getChildren().length; i++) {
            var toiletPaper = this.toiletPapers.getChildren()[i];
            toiletPaper.update();
        }
    }
}