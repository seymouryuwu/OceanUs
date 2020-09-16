class Medicine extends Phaser.Physics.Arcade.Image {
    constructor(scene, y, velocityX) {
        super(scene, 0, y, "medicine");
        this.setScale(0.05);
        scene.add.existing(this);

        scene.physics.world.enableBody(this);
        this.body.velocity.x = velocityX;

        scene.medicines.add(this);
    }

    update() {
        if (this.x > 800) {
            this.destroy();
        }
    }
}