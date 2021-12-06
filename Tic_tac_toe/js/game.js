import { gameOptions } from "./constants.js";

export default class Game {
  players = [];

  constructor() {
    this.drawEl = document.querySelector(".game__info-draw-value");

    this.fieldEl = document.querySelector(".field");
    this.addCells();

    this.moveEl = document.querySelector(".game__move-value");
  }

  play() {
    this.setDefault();

    this.fieldEl.addEventListener("click", (evt) => {
      if (!evt.target.classList.contains("field__cell")) {
        return;
      }

      if (evt.target.dataset.value) {
        return;
      }
      
      evt.target.dataset.value = this.activePlayerInd === 0 ? "cross" : "nule";

      this.updateVirtualField(evt.target);

      //Somebody win
      if (this.checkWinner(this.virtualField)) {
        this.activePlayer.win();
        this.clearField();
      }

      //Draw
      if (this.checkDraw()) {
        this.draw++;
        this.updateDraws();
        this.clearField();
      }

      this.changeActivity();
      this.moveEl.textContent = this.activePlayer.getName();
    });
  }

  repeat() {
    this.setDefault();
  }

  setDefault() {
    this.draw = 0;
    this.updateDraws();

    this.clearField();

    this.activePlayerInd = 0;
    this.activePlayer = this.players[0];

    this.updateMove();

    this.players.forEach((player) => player.setDefault());
  }

  clearField() {
    Array.from(this.fieldEl.children).forEach((cell) => {
      cell.dataset.value = "";
    });

    this.fillVirtualField();
  }

  checkWinner(arr) {
    for (let i = 0; i < 3; i++) {
      if (this.Eq(arr[0][i], arr[1][i], arr[2][i])) {
        return arr[0][i];
      }

      if (this.Eq(arr[i][0], arr[i][1], arr[i][2])) {
        return arr[i][0];
      }
    }

    if (this.Eq(arr[0][0], arr[1][1], arr[2][2])) {
      return arr[0][0];
    }

    if (this.Eq(arr[0][2], arr[1][1], arr[2][0])) {
      return arr[0][2];
    }

    return 0;
  }

  Eq(a, b, c) {
    return a !== 0 && a == b && a == c;
  }

  checkDraw() {
    for (let cell of this.fieldEl.children) {
      if (!cell.dataset.value) {
        return false;
      }
    }
    return true;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  changeActivity() {
    this.activePlayerInd++;

    if (this.activePlayerInd > this.players.length - 1) {
      this.activePlayerInd = 0;
    }

    this.activePlayer = this.players[this.activePlayerInd];
  }

  addCells() {
    for (let i = 0; i < gameOptions.SIZE; i++) {
      for (let j = 0; j < gameOptions.SIZE; j++) {
        this.createCell(i, j);
      }
    }
    this.fieldEl.style.gridTemplateColumns = `repeat(${gameOptions.SIZE}, 100px)`;
  }

  createCell(i, j) {
    const cell = document.createElement("div");
    cell.classList.add("field__cell");

    cell.dataset.row = i;
    cell.dataset.coll = j;
    cell.dataset.value = "";

    this.fieldEl.append(cell);
  }

  updateDraws() {
    this.drawEl.textContent = this.draw;
  }

  updateMove() {
    this.moveEl.textContent = this.activePlayer.getName();
  }

  fillVirtualField() {
    this.virtualField = [];

    for (let i = 0; i < gameOptions.SIZE; i++) {
      let innerArr = [];
      for (let j = 0; j < gameOptions.SIZE; j++) {
        innerArr.push(0);
      }
      this.virtualField.push(innerArr);
    }
  }

  updateVirtualField(item) {
    this.virtualField[item.dataset.row][item.dataset.coll] = item.dataset.value;
  }
}
