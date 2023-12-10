const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Enter array of numbers: ', (userInput) => {
    const arr = userInput.split(' ').map(Number);
    console.log(sumEvenNumbers(arr));
    read.close();
});
function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
