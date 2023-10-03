export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get CardTemplate() {
    return `
    <div class="col-2 m-5 snack-box rounded text-center fw-bold fs-4">
    <img src="${this.imgUrl}" alt="Sample"
      class="snack-img m-4 border">
    <div class="d-flex justify-content-around">
      <p>${this.name}</p>
      <p>$${this.price.toFixed(2)}</p>
    </div>
    <button onclick="app.SnacksController.buySnack('${this.name}')" class="btn buy-button mb-3 fs-3" type="button">Buy</button>
  </div>`
  }
}