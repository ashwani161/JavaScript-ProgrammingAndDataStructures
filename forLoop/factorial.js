const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
readline.question('Enter a num?', num => {
    let fact =1;
        for (i= 2; i <=num; i++) {
        fact = (fact*i);
        }
  console.log("The factorial of " + num + " is "+fact);
  readline.close();
  });