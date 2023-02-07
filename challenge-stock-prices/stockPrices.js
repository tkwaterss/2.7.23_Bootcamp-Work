//find max
//find min
//find difference

// Solution 1
const best = (array) => {
    let minIndex = array.indexOf(array.reduce((acc, curr) => curr < acc ? acc = curr : acc, array[0]));
    let maxIndex = array.indexOf(array.reduce((acc, curr) => curr > acc ? acc = curr : acc, array[0]));
    console.log(minIndex, maxIndex);
    if (maxIndex > minIndex) {
        return array[maxIndex] - array[minIndex];
    } return 0;
}

console.log(best(nums));
console.log(best(nums2));
console.log(best(nums3));

//Solution 2
let nums = [1,2,3,4,5];
let nums2 = [3,5,6,1,8,4,2,1,7,8];
let nums3 = [7,6,5,4,3,2]

const stocks = (array) => {
    let minIndex = array.indexOf(Math.min(...array));
    let maxIndex = array.indexOf(Math.max(...array));
    return maxIndex > minIndex ? array[maxIndex] - array[minIndex] : 0;
}
console.log(stocks(nums));
console.log(stocks(nums2));
console.log(stocks(nums3));

//Instructor Solution