function pyramid(balls) {
  let neededBalls = 0;
  let stage = 0;

  while (neededBalls + stage < balls) {
    stage++;
    neededBalls += stage;
  }

  return stage;
}

console.log(pyramid(20));
