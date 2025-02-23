
// BREAKOUT-EXERCISE 2

//Exercise


const currentYear = new Date().getFullYear();
const birthYear = parseInt("1995 ")
const age = currentYear - birthYear;
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
    
} else {
    const waitYears = 18 - age;
    console.log(`You are ${age}. You need to wait ${waitYears} more years to drive.`);
    
}

// Exercise

const currentYear1 = new Date().getFullYear();
const birthYear1 = parseInt("2005 ");
const age1 = currentYear - birthYear;
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
    
} else {
    const waitYears = 18 - age;
    console.log(`You are ${age}. You will be allowed to drive after ${waitYears} years.`);
}
//END





    

 