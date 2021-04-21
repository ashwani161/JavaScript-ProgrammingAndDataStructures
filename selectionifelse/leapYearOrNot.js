const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Enter a year?', year => {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                console.log(year + ' is a leap year');
            } else {
                console.log(year + ' is not a leap year');
            }
    readline.close();
  });
     