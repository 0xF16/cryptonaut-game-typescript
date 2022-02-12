enum Type {
    FIRE,
    ICE,
    GOLD,
    SILVER
}

export default class Card {
    private _flipped: boolean;
    private _extracted: boolean;

    private type: any; //TODO: add types
    private quantity: number;

    constructor() {
        this._flipped = !!Phaser.Math.Between(0, 1);
        this._extracted = !!Phaser.Math.Between(0, 1);

        this.type = Phaser.Math.Between(0, 4);
        this.quantity = Phaser.Math.Between(0, 5);
    }

    public get flipped(): boolean {
        return this._flipped;
    }

    public get extracted(): boolean {
        return this._extracted;
    }
}