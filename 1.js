const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter minutes since the New Year: ', (input) => {
  let N = parseInt(input);
  
  const minutesInDay = 24 * 60; // 1440 minutes in a day
  const days = Math.floor(N / minutesInDay);
  const remainingMinutes = N % minutesInDay;
  const hours = Math.floor(remainingMinutes / 60);
  const minutes = remainingMinutes % 60;

  console.log(`${days} days, ${hours} hours, ${minutes} minutes`);
  rl.close();
});
