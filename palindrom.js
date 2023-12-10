

const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Enter a string: ', (userInput) => {
    console.log(Palindrome(userInput));
    read.close();
});

function Palindrome(str) {
    return str === str.split('').reverse().join('');
}






