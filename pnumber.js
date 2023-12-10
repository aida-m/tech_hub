const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Enter a number: ', (userInput) => {
    console.log(isPrime(userInput));
    read.close();
});
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}