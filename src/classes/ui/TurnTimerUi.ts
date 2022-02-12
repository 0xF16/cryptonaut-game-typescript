import Phaser from "phaser";

import Cryptonaut from "../Cryptonaut";

export default class TurnTimerUi extends Phaser.GameObjects.Graphics {
    private bar: Phaser.GameObjects.Graphics;
    x: number;
    y: number;
    private cryptonaut: Cryptonaut;

    private maxTime: number = 100;
    private elapsedTime: number = 57;
    private timeX: number;

    private barWidth: number = 200;//76;
    private barHeight: number = 4;

    constructor(scene: Phaser.Scene, x: number, y: number, cryptonaut: Cryptonaut) {
        super(scene);
        this.bar = new Phaser.GameObjects.Graphics(scene);

        this.x = x;
        this.y = y;

        this.cryptonaut = cryptonaut;
        this.elapsedTime = this.cryptonaut.time;

        this.timeX = this.barWidth / this.maxTime;

        this.draw();
        scene.add.existing(this.bar);
    }

    draw() {
        this.bar.clear();

        this.elapsedTime = this.cryptonaut.time

        //  BG
        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x, this.y, this.barWidth, this.barHeight);

        const d = Math.floor(this.timeX * this.elapsedTime);

        this.bar.fillStyle(0xFF9900);
        this.bar.fillRect(this.x, this.y, d, this.barHeight);
    }

}