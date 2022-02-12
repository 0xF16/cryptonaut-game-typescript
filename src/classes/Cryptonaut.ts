export default class Cryptonaut {
    private energy: number;
    private maxEnergy: number;

    private _speed: number;

    private _time: number;
    
    constructor(energy: number, maxEnergy?: number, speed?: number) {
        this.energy = energy;
        this.maxEnergy = maxEnergy || 6;

        this._speed = speed || 1;

        this._time = 0;
    }

    public getEnergy() {
        return this.energy;
    }

    public spendEnergy(energy: number) {
        this.energy -= energy;

        if(this.energy < 0) this.energy = 0;

        return (this.energy === 0);
    }

    public addEnergy(energy: number) {
        this.energy += energy;
        if(this.energy > this.maxEnergy) this.energy = this.maxEnergy;
    }

    public getMaxEnergy() {
        return this.maxEnergy;
    }

    public get speed(): number {
        return this._speed;
    }
    
    public set speed(value: number) {
        this._speed = value;
    }

    public get time(): number {
        return this._time;
    }

    public set time(value: number) {
        this._time = value;
    }

    public nextTimeTick(delta: number) {
        this._time += delta*this._speed;
    }

}