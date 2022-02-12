import Phaser from 'phaser'

import GameScene from './scenes/Game'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1500,
	height: 700,
	scene: [GameScene]
}

export default new Phaser.Game(config)
