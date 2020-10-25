class SceneGameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }

    init(scoreData) {
        this.score = scoreData.score;
    } 

    create() {
        var result = {score : this.score,
                      gameId : 1};

        $.ajax({
           url: '/game/postshark',
           type: 'POST',
           data: JSON.stringify(result),
           dataType: 'json',
           contentType : "application/json",
           success: function(response, textStatus, jqXHR) {
             alert("Yay!");
           },
           error: function(jqXHR, textStatus, errorThrown){
             alert(textStatus, errorThrown);
          }
        });

        this.background = this.add.image(0, 0, "background_gameover");
        this.background.setOrigin(0, 0);
        
        this.result = this.add.bitmapText(300, 375, "kiddoFont", "Your score is " + this.score, 40);
        this.playAgain = this.add.image(350, 450, "play_again").setScale(0.4);
        this.exit = this.add.image(500, 450, "exit").setScale(0.4);

        this.playAgain.setInteractive();
        this.exit.setInteractive();

        this.playAgain.on('pointerup', () => { this.scene.start("playGame"); });
        this.exit.on('pointerup', () => { this.scene.start("main"); });
    }
}