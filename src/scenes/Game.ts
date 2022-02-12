import Phaser from 'phaser'

import Cryptonaut from '~/classes/Cryptonaut'
import CryptonautEnergyUi from '~/classes/ui/CryptonautEnergyUi';
import TurnTimerUi from '~/classes/ui/TurnTimerUi';

import TimeController from '~/classes/TimeController';

export default class GameScene extends Phaser.Scene
{
	private timeController: TimeController;

	constructor() {
		super('game-scene');
	}

	preload() {
    }

    create() {
		const cryptonaut1 = new Cryptonaut(2);
		const energy1 = new CryptonautEnergyUi(this, 100, 100, cryptonaut1);
		const timer1 = new TurnTimerUi(this, 100+2, 100+18, cryptonaut1);

		const cryptonaut2 = new Cryptonaut(3, 8);
		cryptonaut2.speed = 3.5;
		const energy2 = new CryptonautEnergyUi(this, 100, 100+35, cryptonaut2);
		const timer2 = new TurnTimerUi(this, 100+2, 100+35+18, cryptonaut2);

		this.timeController = new TimeController([cryptonaut1, cryptonaut2], [timer1, timer2], [energy1, energy2])
    }

	update(time: number, delta: number): void {
		this.timeController.tick(delta/80);
	}
}
