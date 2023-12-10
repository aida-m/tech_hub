const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Enter a string: ', (userInput) => {
    console.log(reverseString(userInput));
    read.close();
});

function reverseString(str) {
    return str.split('').reverse().join('');
}

