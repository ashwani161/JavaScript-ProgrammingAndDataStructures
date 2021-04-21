let a = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random1 "+a);
let b = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random2 "+b);
let c = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random3 "+c);
let d = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random4 "+d);
let e = (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
console.log("random5 "+e);
const array=[a, b, c, d, e]
let min = (array,min = array[0])=>{
    for(let i=0; i<array.length; i++) {
        if(min>array[i])min = array[i]; 
    }
    return min;
};
console.log("Minimum value of an array element " +min(array));


let max = (array,max = array[0])=>{
    for(let i=0; i<array.length; i++) {
        if(max<array[i])max = array[i];
    }
    return max;
};

console.log("Maximun value of an array element " +max(array));


// for i in `arrays`
// {
// if ((i > max) && (i > min))
// else
// max=i;
// }

// max=$a
// min=$a
// for i in ${list[@]}
// do
// if [[ $i -gt $max  ]];
// then
//      max=$i
// fi
// if [ $i -lt $min ];
// then
//     min=$i
// fi
// done
// echo "max is: $max"
// echo "min is: $min"