const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7] //49
const input2 = [1, 1] //1
const input3 = [4, 3, 2, 1, 4] // 16

function maxArea(arr){
    let leftInd = 0;
    let rightInd = arr.length - 1;

    let maxArea = 0;

    while (leftInd != rightInd){
        let curMaxArea =
          Math.min(arr[leftInd], arr[rightInd]) * (rightInd - leftInd);

        if (curMaxArea > maxArea){
            maxArea = curMaxArea;
        }

        if (arr[rightInd] < arr[leftInd]){
            rightInd--;
        }
        else{
            leftInd++;
        }
    }

    return maxArea;
}

console.log(maxArea(input1));
console.log(maxArea(input2));
console.log(maxArea(input3));