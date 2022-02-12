import Phaser from "phaser";
import Cryptonaut from "../Cryptonaut";

export default class CryptonautEnergyUi extends Phaser.GameObjects.Graphics {
    private bar: Phaser.GameObjects.Graphics;
    x: number;
    y: number;
    private cryptonaut: Cryptonaut;
    private energy: number;
    private energyX: number;
    private maxEnergy: number;

    private barWidth: number = 200//76;
    private barHeight: number = 12;
    private barStroke: number = 2;

    constructor(scene: Phaser.Scene, x: number, y: number, cryptonaut: Cryptonaut) {
        super(scene);
        this.bar = new Phaser.GameObjects.Graphics(scene);

        this.x = x;
        this.y = y;

        this.cryptonaut = cryptonaut;

        this.energy = this.cryptonaut.getEnergy();
        this.maxEnergy = this.cryptonaut.getMaxEnergy();

        this.energyX = this.barWidth / this.maxEnergy;

        this.draw();
        scene.add.existing(this.bar);
    }

    decrease(amount) {
        this.energy -= amount;

        if (this.energy < 0) {
            this.energy = 0;
        }

        this.draw();

        return (this.energy === 0);
    }

    draw() {
        this.bar.clear();

        //  BG
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x, this.y, this.barWidth + 2*this.barStroke, this.barHeight + 2*this.barStroke);

        //  Health
        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x + this.barStroke, this.y + this.barStroke, this.barWidth, this.barHeight);
        this.bar.fillStyle(0xff0000);
        
        // if (this.health < 30) {
        //     this.bar.fillStyle(0xff0000);
        // } else {
        //     this.bar.fillStyle(0x00ff00);
        // }

        const d = Math.floor(this.energyX * this.cryptonaut.getEnergy());

        this.bar.fillRect(this.x + this.barStroke, this.y + this.barStroke, d, this.barHeight);

        for(let i = 1; i < this.maxEnergy; i++) {
            const x = this.x + Math.floor(this.energyX * i) + this.barStroke;
            this.bar.lineBetween(x, this.y + this.barStroke, x, this.y + this.barHeight + this.barStroke)
            this.bar.lineStyle(1, 0x0000, 1);
        }
    }

}