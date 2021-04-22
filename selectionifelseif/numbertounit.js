const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
       
      readline.question('Enter a digit?', digit => {
        if ( digit ==  1 )
    {
        console.log("ONE");
     }
     else if ( digit ==  10 )
     {
         console.log("TEN");
     }
     else if ( digit ==  100 )
     {
        console.log("HUNDERED");
     }
     else if ( digit ==  1000 )
     {
        console.log("THOUSAND");
     }
     else if ( digit ==  10000 )
     {
        console.log("TENTHOUSAND");
     }
     else if ( digit ==  100000 )
     {
         console.log("LAKH"); 
     } else {
     console.log("Please enter valid number in the list");
     }
     readline.close();
      });
