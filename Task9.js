
//BREAKOUT 2 - EXERCISE 2


// Exercise 1

const today = new Date();
const year = today.getFullYear();
console.log("Year today: " + year);


// Exercise 2

const month = today.getMonth() + 1;  
console.log("Month today: " + month);


// Exercise 3

const date = today.getDate();
console.log("Date today: " + date);


//Exercise 4

const day = today.getDay();
console.log("Day today (as a number): " + day);



// Exercise 5

const hours = today.getHours();
console.log("Hours today: " + hours);



//Exercise 6

const minutes = today.getMinutes();
console.log("Minutes now: " + minutes);


//Exercise 7

const now = new Date();  
const epoch = new Date(0);  
const secondsElapsed = Math.floor(now.getTime() / 1000);  
console.log("Seconds elapsed since January 1, 1970: " + secondsElapsed);

//END