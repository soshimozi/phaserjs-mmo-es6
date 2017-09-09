/**
 * Created by Monkey on 9/7/2017.
 */
import Phaser from 'phaser'
import MushroomSprite from '../assets/images/mushroom.png'
import TileMap from '../assets/map/example_map.json'
import TileSpriteSheet from '../assets/map/tilesheet.png'
import SpriteImage from '../assets/images/sprite.png'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')

    this.loaderBg.anchor.setTo(0.5, 0.5)
    this.loaderBar.anchor.setTo(0.5, 0.5)

    this.load.setPreloadSprite(this.loaderBar)

    this.load.image('mushroom', MushroomSprite)

    this.load.tilemap('map', TileMap, null, Phaser.Tilemap.TILED_JSON)
    this.load.spritesheet('tileset', TileSpriteSheet, 32, 32)
    this.load.image('sprite', SpriteImage)
  }

  create () {
    this.state.start('Play')
  }
}
