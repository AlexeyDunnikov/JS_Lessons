function getSum(a, b) {
  if (a === b) return a;

  const minNum = a < b ? a : b;
  const maxNum = a > b ? a : b;

  let sum = 0;
  for (let i = minNum; i <= maxNum; i++){
    sum += i;
  }

  return sum;
}

console.log(getSum(-3, 4));

