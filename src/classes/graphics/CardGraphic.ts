import Phaser, { Scene } from "phaser";
import Card, { Type } from "../Card";

export default class CardGraphic extends Phaser.GameObjects.Graphics {
    x: number;
    y: number;

    private cardGraphic: Phaser.GameObjects.Graphics;
    card: Card;

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

        if(this.card.flipped === true) {
            switch(this.card.type) {
                case Type.TRAP:
                    this.cardGraphic.fillStyle(0x000000);
                    break;
                case Type.FIRE:
                    this.cardGraphic.fillStyle(0xE70909);
                    break;
                case Type.ICE:
                    this.cardGraphic.fillStyle(0x1EE0EE);
                    break;
                case Type.GOLD:
                    this.cardGraphic.fillStyle(0xEECE1E);
                    break;
                case Type.SILVER:
                    this.cardGraphic.fillStyle(0x4D4D4D);
                    break;
            }

            if(this.card.extracted && this.card.type !== Type.TRAP) {
                this.cardGraphic.lineStyle(5, 0x707070);
                this.cardGraphic.lineBetween(this.x, this.y, this.x+this.width, this.y+this.height);
                this.cardGraphic.lineBetween(this.x+this.width, this.y, this.x, this.y+this.height);
                this.cardGraphic.setAlpha(0.3)
            }
        } else {//card not flipped
            this.cardGraphic.fillStyle(0xFFFFFF);
        }
        
        this.cardGraphic.fillRect(this.x, this.y, this.width, this.height);
    }
}