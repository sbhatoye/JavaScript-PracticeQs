let num = 10895;
// convert number to string for traversing through each digit
let numString = num.toString();
let count = 0;

for(let i=0; i < numString.length; i++){
    count++;
}

console.log(count);
