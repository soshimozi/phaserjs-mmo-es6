/**
 * Created by Monkey on 9/8/2017.
 */
import io from 'socket.io-client'
import EventBus from '../misc/event-bus'

export default class Client {
  constructor () {
    this.socket = io()

    this.setupSocket()
    this.setupEvents()
  }

  askNewPlayer () {
    this.socket.emit('newplayer')
  }

  setupSocket () {
    this.socket.on('newplayer', (data) => {
      console.log('newplayer: ', data)

      EventBus.broadcast('newplayer', data.id, data.x, data.y)
      // this.game.addNewPlayer(data.id,data.x,data.y);
    })

    this.socket.on('allplayers', (data) => {
      console.log('allplayers: ', data)

      for (let i = 0; i < data.length; i++) {
        EventBus.broadcast('newplayer', data.id, data.x, data.y)
      }
    })
  }

  setupEvents () {}
}
