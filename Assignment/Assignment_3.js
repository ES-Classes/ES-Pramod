var finalbill;
function calculateTip(bill){
    if(bill>=50 && bill<=300)
    {
        let tipvalue = (10 / 100) * bill;
        finalbill= bill+ tipvalue;
        console.log(finalbill);
    }
    else
    {
        let tipvalue = (15 / 100) * bill;
        finalbill= bill+ tipvalue;
        console.log(finalbill);
    }
}

calculateTip(50);