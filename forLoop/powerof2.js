const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
readline.question('Enter a number?', number => {
let n;
for (i=1; i<=number; i++)
{
 n= 2**i;
}
console.log(n);
readline.close();
  });