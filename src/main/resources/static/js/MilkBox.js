class MilkBox extends Phaser.Physics.Arcade.Image {
    constructor(scene, y, velocityX) {
        super(scene, 0, y, "milk_box");
        this.setScale(0.05);
        scene.add.existing(this);

        scene.physics.world.enableBody(this);
        this.body.velocity.x = velocityX;

        scene.milkBoxes.add(this);
    }

    update() {
        if (this.x > 800) {
            this.destroy();
        }
    }
}