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
// read -p " Enter the number(1,10,100,1000,10000,100000) : "  digit
// if [ $digit -eq 1 ]
// then
//  echo $digit = ONE;
// elif [ $digit -eq 10 ]
// then  
//   echo $digit = TEN;
// elif [ $digit -eq 100 ]
// then
//   echo $digit = HUNDREED;
// elif [ $digit -eq 1000 ]
// then
//   echo $digit = THOUSAND;
// elif [ $digit -eq 10000 ]
// then
//   echo $digit = TENTHOUSAND;
// elif [ $digit -eq 100000 ]
// then
//   echo $digit = ONELAKH;
// else 
// echo "PLEASE ENTER VALID NUM IN THE LIST"
// fi
