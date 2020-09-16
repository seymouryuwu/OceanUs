class OilBottle extends Phaser.Physics.Arcade.Image {
    constructor(scene, y, velocityX) {
        super(scene, 0, y, "oil_bottle");
        this.setScale(0.05);
        scene.add.existing(this);

        scene.physics.world.enableBody(this);
        this.body.velocity.x = velocityX;

        scene.oilBottles.add(this);
    }

    update() {
        if (this.x > 800) {
            this.destroy();
        }
    }
}