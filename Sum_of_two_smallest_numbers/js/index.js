function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
    
  return numbers[0] + numbers[1];
}

sumTwoSmallestNumbers([5, 23, 620, 3, 84]);
