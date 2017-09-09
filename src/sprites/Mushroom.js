/**
 * Created by Monkey on 9/8/2017.
 */
import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({game, x, y, asset}) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5, 0.5)
  }

  update () {
    this.angle += 1
  }
}
