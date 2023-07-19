let num = 1234;
// convert number to string
let numString = num.toString();
let sum = 0;

for(let i=0; i < numString.length; i++){
    // convert string back to number
    sum += parseInt(numString[i]);
}

console.log(sum);
