import { Snack } from "./models/Snack.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/IsValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  snacks = [
    new Snack({ name: 'Sample', price: 3.50, imgUrl: 'https://www.pngall.com/wp-content/uploads/8/Sample-Watermark-Transparent.png' }),
    new Snack({ name: "Chocolate", price: 2.00, imgUrl: "https://cdn.pixabay.com/photo/2016/04/01/10/16/bar-1299829_1280.png" }),
    new Snack({ name: "Popcorn", price: 3.00, imgUrl: "https://cdn.pixabay.com/photo/2013/07/13/01/21/popcorn-155602_1280.png" }),
    new Snack({ name: "French Fries", price: 5.00, imgUrl: "https://cdn.pixabay.com/photo/2013/07/13/01/24/french-fries-155679_1280.png" }),
    new Snack({ name: "Cookie", price: 1.50, imgUrl: "https://cdn.pixabay.com/photo/2014/04/02/10/52/chocolate-chip-cookies-304801_1280.png" }),
    new Snack({ name: "Banana", price: 1.00, imgUrl: "https://cdn.pixabay.com/photo/2014/04/02/10/40/bananas-304202_1280.png" }),
    new Snack({ name: "Pizza", price: 4.50, imgUrl: "https://cdn.pixabay.com/photo/2013/07/13/09/36/pizza-155771_1280.png" }),
    new Snack({ name: "Ice Cream Bar", price: 2.50, imgUrl: "https://cdn.pixabay.com/photo/2013/07/12/19/20/popsicle-154587_1280.png" })
  ]

  money = 0


  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
