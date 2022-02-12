import Phaser, { Scene } from "phaser";
import Card from "../Card";

export default class CardGraphic extends Phaser.GameObjects.Graphics {
    x: number;
    y: number;

    private cardGraphic: Phaser.GameObjects.Graphics;
    private card: Card;

    private height: number = 100;
    private width: number = 100;

    constructor(scene: Scene, x: number, y: number) {
        super(scene);
        this.x = x;
        this.y = y;
        this.cardGraphic = new Phaser.GameObjects.Graphics(scene);
        this.card = new Card();

        this.draw();
        scene.add.existing(this.cardGraphic);
    }

    draw() {
        this.cardGraphic.clear();

        this.cardGraphic.fillStyle(0x44AAFF);
        if(this.card.extracted) this.cardGraphic.setAlpha(0.5)
        
        this.cardGraphic.fillRect(this.x, this.y, this.width, this.height);
    }
}