let dateFrom = "20/03/2021";
let dateTo = "20/06/2021";
let dateCheck = "02/04/2021";

let d1 = dateFrom.split("/");
let d2 = dateTo.split("/");
let c = dateCheck.split("/");

let from = new Date(d1[2],d1[1], d1[0]); 
let to   = new Date(d2[2], d2[1], d2[0]);
let check = new Date(c[2], c[1], c[0]);

console.log(check > from && check < to);

