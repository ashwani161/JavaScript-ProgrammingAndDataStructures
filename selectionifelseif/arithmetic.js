let a=6
let b=4
let c=8
let x=((a+b*c))
let y=((a%b+c))
let z=((c+a/b))
let p=((a*b+c))
if (( x > y ) && ( x > z ) && ( x > p ))
{
    console.log("max " +x);
}
else if (( y > x ) && ( y > z ) && ( y > p ))
{
    console.log("max "+y);
}
else if (( z > x ) && ( z > y ) && ( z > p ))
{
    console.log("max "+z);
} else {
    console.log("max "+p);
}
if (( x < y ) && ( x < z ) && ( x < p ))
{
    console.log("min " +x);
}
else if (( y < x ) && ( y < z ) && ( y < p ))
{
    console.log("min "+y);
}
else if (( z < x ) && ( z < y ) && ( z < p ))
{
    console.log("min "+z);
} else {
    console.log("min "+p);
}