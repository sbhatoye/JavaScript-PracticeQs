let arr = [120, -800, 100, 25, 10] 
let negValues = [];
let largestNum = 0;

for(let i = 0; i < arr.length; i++) {
    // check for negative values
    if(arr[i] < 0) {
        negValues.push(arr[i]);
        continue;
    }

    if(arr[i] > largestNum){
        largestNum = arr[i];
    }
}

// account for scenario if all values in array are negative
if(negValues.length == arr.length){
    console.log("There are no positive values in the array.")
} else {
    console.log(`The largest number in the array is ${largestNum}.`);
}
