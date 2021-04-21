const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Enter a number?', number => {
    if ( number ==  1 )
{
    console.log("SUNDAY");
 }
 else if ( number ==  2 )
 {
     console.log("MONDAY");
 }
 else if ( number ==  3 )
 {
    console.log("TUESDAY");
 }
 else if ( number ==  4 )
 {
    console.log("WEDNESDAY");
 }
 else if ( number ==  5 )
 {
    console.log("THRUSDAY");
 }
 else if ( number ==  6 )
 {
     console.log("FRIDAY");
 }
 else if ( number ==  7 )
 {
    console.log("SATURDAY");
  } else {
    console.log("enter valid number");
}

    readline.close();
  });