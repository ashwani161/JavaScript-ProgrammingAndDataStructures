const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
readline.question('Enter a number?', number => {
let counter=0;
let result=0;
while ((counter <= number && result < 256))
{
 result=((2**counter))
console.log(result);
	counter=(counter+1)
}
readline.close();
});