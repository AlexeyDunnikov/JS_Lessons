const gameInfoEl = document.querySelector(".game__info-wrapper");

const gameOptions = {
  SIZE: 3,
};

class Game {
  players = [];

  constructor() {
    this.activePlayerInd = 0;
    this.draw = 0;
    this.addDraws();

    this.fieldEl = document.querySelector(".field");
    this.addCells();

    this.fillVirtualField();
  }

  play() {
    this.fieldEl.addEventListener("click", (evt) => {
      if (evt.target.dataset.value) {
        return;
      }

      evt.target.dataset.value = this.activePlayerInd === 0 ? "cross" : "null";
      this.updateVirtualField(evt.target);

      console.log(this.checkWinner(this.virtualField));

      if (this.checkWinner(this.virtualField)){
        this.activePlayer.win();
      }

      this.changeActivity();
    });
  }

  checkWinner(arr) {
    function Eq(a, b, c) {
      return a && a == b && a == c;
    }
    for (let i = 0; i < 3; i++) {
        if (Eq(arr[0][i], arr[1][i], arr[2][i])) {
          return arr[0][i];
        }

        if (Eq(arr[i][0], arr[i][1], arr[i][2])) {
          return arr[i][0];
        }
    }

    if (Eq(arr[0][0], arr[1][1], arr[2][2])) {
      return arr[0][0];
    }

    if (Eq(arr[0][2], arr[1][1], arr[2][1])) {
      return arr[0][2];
    }

    return 0;
  }

  addPlayer(player) {
    this.players.push(player);
    console.log(this.players);
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
        const cell = document.createElement("div");
        cell.classList.add("field__cell");

        cell.dataset.row = i;
        cell.dataset.coll = j;
        cell.dataset.value = "";

        this.fieldEl.append(cell);
      }
    }
    this.fieldEl.style.gridTemplateColumns = `repeat(${gameOptions.SIZE}, 100px)`;
  }

  addDraws() {
    this.drawEl = document.createElement("p");
    this.drawEl.classList.add("game__info-draw");
    this.drawEl.innerHTML = `Ничья: ${this.draw}`;

    gameInfoEl.append(this.drawEl);
  }

  updateDraws() {
    this.drawEl.innerHTML = `Ничья: ${this.draw}`;
  }

  fillVirtualField() {
    this.virtualField = [];

    for (let i = 0; i < gameOptions.SIZE; i++) {
      let innerArr = [];
      for (let j = 0; j < gameOptions.SIZE; j++) {
        innerArr.push(null);
      }
      this.virtualField.push(innerArr);
    }
  }

  updateVirtualField(item) {
    this.virtualField[item.dataset.row][item.dataset.coll] = item.dataset.value;
    console.log(this.virtualField);
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;

    this.addPlayerInfo();
  }

  win() {
    this.wins++;
    this.updateInfo();
  }

  addPlayerInfo() {
    this.playerInfoEl = document.createElement("p");
    this.playerInfoEl.classList.add("game__info-player");
    this.playerInfoEl.innerHTML = `Выиграл ${this.name}: ${this.wins}`;

    gameInfoEl.append(this.playerInfoEl);
  }

  updateInfo() {
    this.playerInfoEl.innerHTML = `Выиграл ${this.name}: ${this.wins}`;
  }
}

let player1 = new Player("X");
let player2 = new Player("0");

let game = new Game();
game.addPlayer(player1);
game.addPlayer(player2);

game.play();
