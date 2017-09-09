/**
 * Created by Monkey on 9/8/2017.
 */
import _ from 'lodash'

class Listeners {
  constructor () {
    this.list = {}
  }

  create (eventName, id, cb) {
    if (!this.list[eventName]) {
      this.list[eventName] = {}
    }
    this.list[eventName][id] = cb
  }

  destroy (eventName, id) {
    delete this.list[eventName][id]
  }
  fire (eventName, args) {
    _.each(this.list[eventName], cb => {
      cb.apply(window, args)
    })
  }
}

class EventBus {
  constructor () {
    this.listeners = new Listeners()
  }

  subscribe (eventName, id, cb, once) {
    this.listeners.create(eventName, id, cb)

    if (once) {
      this.unsubscribe(eventName, id)
    }
  }

  once (eventName, id, cb) {
    this.subscribe(eventName, id, cb, true)
  }

  unsubscribe (eventName, id) {
    this.listeners.destroy(eventName, id)
  }

  broadcast (eventName, args) {
    this.listeners.fire(eventName, args)
  }
}

export default new EventBus()
