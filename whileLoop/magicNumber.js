    let start=1, end=100;
    console.log("Think of a number between 1 and 100"); 
    while (start<=end){
  
        let mid=Math.floor((start + end)/2);
        let val;
   
        console.log("Select one of the option: 1."+mid+" is your number. 2.Your number is less than "+mid+" 3.Your number is greater than "+mid); 

        if (val==="1") {
            console.log("found");
            break;

        }
        else if (val==="2") {
             start = mid + 1;
             console.log(start+" "+end);
        }
        else{
             end = mid - 1;
             console.log(start+" "+end);

        }
    }