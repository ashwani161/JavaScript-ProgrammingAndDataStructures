for (let counter = 1; counter <=20 ; counter++) {

    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}