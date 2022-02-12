export enum Type {
    TRAP,
    FIRE,
    ICE,
    GOLD,
    SILVER
}

export default class Card {
    private _flipped: boolean;
    private _extracted: boolean;

    private _type: Type; //TODO: add types
    private quantity: number;

    constructor() {
        this._flipped = false; //!!Phaser.Math.Between(0, 1);
        this._extracted = false; //!!Phaser.Math.Between(0, 1);

        this._type = randomEnum(Type); //Phaser.Math.Between(0, 4);
        this.quantity = Phaser.Math.Between(1, 5);
    }

    public get flipped(): boolean {
        return this._flipped;
    }

    public set flipped(value: boolean) {
        this._flipped = value;
    }

    public get extracted(): boolean {
        return this._extracted;
    }

    public get type(): Type {
        return this._type;
    }
}

function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum)
      .map(n => Number.parseInt(n))
      .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
}