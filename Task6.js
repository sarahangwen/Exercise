
//BREAK OUT-EXERCISE 2

// Exercise 1

let value = '10';

if (typeof value !== typeof 10) {
    value = Number(value); 
}
console.log(value);        
console.log(typeof value); 

//Exercise 2

let num = parseFloat('9.8');
if (num !== 10) {
    num = Math.ceil(num); 
}
console.log(num);        
console.log(typeof num); 

//Exercise 3

let word1 = "python";
let word2 = "jargon";
let isFoundInBoth = word1.includes("on") && word2.includes("on");
console.log(isFoundInBoth); 

//Exercise 4

let sentence = "I hope this course is not full of jargon.";
let containsJargon = sentence.includes("jargon");
console.log(containsJargon); 

//Exercise 5

let randomNum = Math.floor(Math.random() * 101); 
console.log(randomNum);

//Exercise 6

let randomNumber = Math.floor(Math.random() * 256);
console.log(randomNumber);

//Exercise 7

let str = "JavaScript";
let randomIndex = Math.floor(Math.random() * str.length); 
let randomChar = str[randomIndex]; 
console.log(randomChar);

// END
