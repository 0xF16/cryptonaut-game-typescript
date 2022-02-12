import Cryptonaut from "./Cryptonaut";
import CryptonautEnergyUi from "./ui/CryptonautEnergyUi";
import TurnTimerUi from "./ui/TurnTimerUi";

export default class TimeController {
    // private maxTime: number; //Max Game time in seconds
    // private paused: boolean; //if true, then no counter is ticking

    private cryptonauts: Cryptonaut[];
    private timers: TurnTimerUi[];
    private energies: CryptonautEnergyUi[];

    constructor(cryptonauts: Cryptonaut[], timers: TurnTimerUi[], energies: CryptonautEnergyUi[]) {
        this.cryptonauts = cryptonauts;
        this.timers = timers
        this.energies = energies;
    }

    attachCryptonaut(cryptonaut: Cryptonaut) {
        this.cryptonauts.push(cryptonaut);
    }

    tick(delta: number): void {
        for(let i = 0; i < this.cryptonauts.length; i++) {
            let cryptonaut = this.cryptonauts[i];
            this.timers[i].draw();
            this.energies[i].draw();
            if(cryptonaut.time >= 100) {
                cryptonaut.time = 0;
                cryptonaut.addEnergy(1);
            }
            cryptonaut.nextTimeTick(delta);
        }
    }
}