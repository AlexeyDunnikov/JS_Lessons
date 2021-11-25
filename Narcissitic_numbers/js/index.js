function narcissistic(value) {
  const numsArr = Array.from(value.toString());
  const pow = numsArr.length;

  const sum = numsArr.reduce((acc, current) => {
      return acc + (current ** pow);
  }, 0);

  return sum === value;
}

console.log(narcissistic(153));
