class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "player");

        scene.add.existing(this);

        this.HP = 1;
        this.HPmax = 1;
        this.movable = true;
        this.canBeHurt = true;
        this.wannaClimbing = false;
        this.faceTowards = "right";

        scene.physics.world.enableBody(this);
        this.play("right");
        this.setGravityY(800);
        this.setBounceY(0.2);
        this.setCollideWorldBounds(true);
    }

    update() {

    }
}