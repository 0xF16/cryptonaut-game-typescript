import Phaser from 'phaser'

import Cryptonaut from '~/classes/Cryptonaut'
import CryptonautEnergyUi from '~/classes/ui/CryptonautEnergyUi';
import TurnTimerUi from '~/classes/ui/TurnTimerUi';

import TimeController from '~/classes/TimeController';
import CardGraphic from '~/classes/graphics/CardGraphic';

export default class GameScene extends Phaser.Scene
{
	private timeController: TimeController;

	constructor() {
		super('game-scene');
	}

	preload() {
    }

    create() {
		let cryptonauts: Cryptonaut[] = [];
		let energies: CryptonautEnergyUi[] = [];
		let timers: TurnTimerUi[] = [];

		for(let i = 0; i < 6; i++) {
			const cryptonaut = new Cryptonaut(3, Phaser.Math.Between(6,8));
			cryptonaut.speed = Phaser.Math.Between(1,4);
			const energy = new CryptonautEnergyUi(this, 1250, 100+i*(24+40), cryptonaut);
			const timer = new TurnTimerUi(this, 1250+2, 118+i*(24+40), cryptonaut);
			cryptonauts.push(cryptonaut); energies.push(energy); timers.push(timer);
		}

		let x = 500;
		let y = 100;
		for(let i = 0; i < 5; i++) {
			for(let j = 0; j < 5; j++) {
				const card = new CardGraphic(this, j*(5+100)+x, i*(5+100)+y);
				card.setInteractive();
				card.on('pointerdown', function() {
					card.card.flipped = true;
					card.draw();
				})
			}
		}
		// new CardGraphic(this, 100, 100);

		this.timeController = new TimeController(cryptonauts, timers, energies);
    }

	update(time: number, delta: number): void {
		this.timeController.tick(delta/80);
	}
}
