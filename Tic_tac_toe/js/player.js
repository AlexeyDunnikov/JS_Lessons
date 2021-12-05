export class Player {
  constructor(name) {
    this.name = name;

    this.infoEl = document.querySelector(`.game__info-win--${this.name}`);
    this.setDefault();
  }

  setDefault() {
    this.wins = 0;
    this.infoEl.textContent = 0;
  }

  win() {
    this.wins++;
    this.updateInfo();
  }

  getName() {
    return this.name;
  }

  updateInfo() {
    this.infoEl.textContent = this.wins;
  }
}
