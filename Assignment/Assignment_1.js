
let pMass =50;
let rMass = 70;
let pHeight = 6;
let rHeight =5;


// for prabin's BMI
let pBMI; 
pBMI =  pMass / (pHeight * pHeight);
console.log(pBMI);


// for Ram's BMI 
let rBMI;
rBMI =  rMass / (rHeight * rHeight);
console.log(rBMI);

let prabinHigherBMI  = (pBMI < rBMI) ? "Smaller":"Greater";
console.log(prabinHigherBMI);  














