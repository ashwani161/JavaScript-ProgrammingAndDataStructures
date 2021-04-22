//console.log("Select one of the options 1.Feet to inch 2.inch to Feet 3.Feet to meter 4.Meter to feet");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Enter a Value?', val => {
switch (val) {
  case "1":
    //console.log("Enter feet");
    feet = 2;
    inches= feet*12;
    console.log(inches);
    break;
  case "2":
    inches=2;
    feet= inches/12;
    console.log(feet);
    break;
  case "3":
    feet=2;
    meter= feet/3.28084;
    console.log(meter);
    break;
  case "4":
    meter=2;
    feet= meter*3.28084;
    console.log(feet);
    break;
}
readline.close();
});