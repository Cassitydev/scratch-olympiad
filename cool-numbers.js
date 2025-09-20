const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to find cool numbers
function findCoolNumbers(input) {
    if (!input) return "0"; // Handle empty input

    const numbers = input.trim().split(/\s+/);
    const coolNumbers = numbers.filter(num => {
        return !num.includes('2') && !num.includes('7') && num.includes('5');
    });

    return `${coolNumbers.length} ${coolNumbers.join(' ')}`;
}

// Ask the user for input
rl.question("Enter numbers separated by spaces:", (input) => {
    const idk = findCoolNumbers(input)
    // Show the result to the user
    console.log(idk);
});
