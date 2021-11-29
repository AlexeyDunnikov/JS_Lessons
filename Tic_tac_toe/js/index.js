import {Game} from './game.js';
import {Player} from './player.js'

let player1 = new Player("x");
let player2 = new Player("0");

let game = new Game();
game.addPlayer(player1);
game.addPlayer(player2);

game.play();

const repeatBtn = document.querySelector(".game__btn-repeat");
repeatBtn.addEventListener("click", (evt) => {
  game.repeat();
});
