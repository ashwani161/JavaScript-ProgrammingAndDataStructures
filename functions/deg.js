function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(0);
fToC(212);