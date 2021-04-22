const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
readline.question('Enter a digit?', digit => {
      //console.log(k);
    switch (digit) {
        case "1":
            console.log("UNIT");
            break;
        case "10":
            console.log("TEN");
            break;
        case "100":
            console.log("HUNDERED");
            break;
        case "1000":
            console.log("THOUSAND");
            break;
        case "10000":
            console.log("TEN THOUSAND");
            break;
        case "100000":
            console.log("LAKH");
            break;
        case "1000000":
            console.log("TEN LAKH");
            break;
        default :
      console.log('Invalid digit in number list');
    }
 readline.close();
  });