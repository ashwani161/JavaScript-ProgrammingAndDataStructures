const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
readline.question('Enter a num?', num => {
    console.log(`The factors of ${num} is:`);

    // looping through 1 to num
    for(let i = 1; i <= num; i++) {
    
        // check if number is a factor
        if(num % i == 0) {
            console.log(i);
        }
    }
    readline.close();
  });