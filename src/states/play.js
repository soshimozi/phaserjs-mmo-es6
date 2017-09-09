/**
 * Created by Monkey on 9/8/2017.
 */
import Phaser from 'phaser'
import Client from '../prefabs/client'

// import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    // this.mushroom = new Mushroom({game: this.game, x: this.world.centerX, y: this.world.centerY, asset: 'mushroom'})
    // this.game.add.existing(this.mushroom)

    this.game.stage.disableVisibilityChange = true

    let map = this.game.add.tilemap('map')
    map.addTilesetImage('tilesheet', 'tileset') // tilesheet is the key of the tileset in map's JSON file

    let layer = null
    for (let i = 0; i < map.layers.length; i++) {
      layer = map.createLayer(i)
    }
    layer.inputEnabled = true // Allows clicking on the map

    this.client = new Client()
    this.client.askNewPlayer()
  }
}
