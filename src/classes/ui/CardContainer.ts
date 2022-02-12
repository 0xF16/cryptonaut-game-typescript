import { Scene } from "phaser";
import CardGraphic from "../graphics/CardGraphic";

export default class CardContainer extends Phaser.GameObjects.Container {
    private card: CardGraphic;

    constructor(scene: Scene, x: number, y: number) {
        super(scene, x, y);
    }
}