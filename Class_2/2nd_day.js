//block scope --> let 
//global scope --> var 
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(day);


let ram;
ram =()=>{}

const factorial = (n) => {
    if ((n == 0) || (n == 1)) {
    return 1;
    }
    else {
    return (n * factorial(n - 1));
    }
    };
    
    console.log(factorial(4));




