/**
 * Created by Monkey on 9/7/2017.
 */
import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/boot'
import PreloadState from './states/preload'
import PlayState from './states/play'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight
    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Preload', PreloadState, false)
    this.state.add('Play', PlayState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
