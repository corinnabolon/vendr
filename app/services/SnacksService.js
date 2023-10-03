import { AppState } from "../AppState.js";
import { Snack } from "../models/Snack.js";

class SnacksService {

  addMoney() {
    AppState.money += .25
    console.log("Added money, total:", AppState.money)
  }

  buySnack(price) {
    AppState.money -= price
  }

}

export const snacksService = new SnacksService()