const arr = [11, 5, 4, 61, 23, 66, 24, 10, 3, 7];

const oddArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    oddArr.push(arr[i]);
  }
}

oddArr.sort((a, b) => a - b)

let j = 0; 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      arr[i] = oddArr[j];
      j++;
    }
}

console.log(arr);
