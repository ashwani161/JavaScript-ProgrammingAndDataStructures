//let head=1;
let headcounter=0;
let tailcounter=0;
let toss = 0;
 	while ( toss < 11 )
     {
    let flipChk=(Math.floor(Math.random() * 2 + 1));
    console.log(flipChk);
if ( flipChk == 1 )
{ 
    headcounter +=1;	
    console.log("head wins");
    break;
} else if  ( flipChk == 2 )
{
	tailcounter +=1;
    console.log("tails wins");
    break;
} else {
 console.log("draw");
}
}