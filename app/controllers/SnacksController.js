import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawMoney() {
  let money = AppState.money
  console.log(money)
  setText("totalMoney", money.toFixed(2))
}

function _drawSnacksCatalog() {
  const snacks = AppState.snacks
  console.log("Here are the snacks", snacks)
  let content = ""
  snacks.forEach(snack => content += snack.CardTemplate)
  setHTML("snack-catalog", content)
}

export class SnacksController {
  constructor() {
    console.log("SnacksController is loaded.")
    console.log("Looking at snacks in the AppState", AppState.snacks)
    _drawSnacksCatalog()
    _drawMoney()

    AppState.on("money", _drawMoney)
  }
  checkButtons() {
    AppState.snacks.forEach(snack => {
      if (AppState.money >= snack.price) {
        snack.buyButtonDisabled = false
      } else {
        snack.buyButtonDisabled = true
      }
      _drawSnacksCatalog()
    })
  }

  addMoney() {
    console.log("Money added!")
    snacksService.addMoney()
    this.checkButtons()
  }


  buySnack(kind) {
    console.log("Test", kind)
    let foundKind = AppState.snacks.find(snack => snack.name == kind)
    if (AppState.money < foundKind.price) {
      console.log("Not enough money.")
      return
    } else {
      snacksService.buySnack(foundKind.price)
      this.checkButtons()
    }
  }
}