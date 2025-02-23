//BREAKOUT- EXERCISE

//Exercise 1


let hours = parseFloat("40");
let rate = parseFloat("28 ");
let pay = hours * rate;
console.log(`Your weekly earnings is ${pay}.`);


//Exercise 2

let name =("Sarah ");
if (name.length > 7) {
    console.log("Your name is long.");
} else {
    console.log("Your name is short.");
}

 
// Exercise 3

let firstName = "Doctor";
let lastName = "Strange";
let firstNameLength = firstName.length;
let lastNameLength = lastName.length;
if (firstNameLength > lastNameLength) {
  console.log("Your first name, " + firstName + " is longer than your family name, " + lastName);
} else if (firstNameLength < lastNameLength) {
  console.log("Your family name, " + lastName + " is longer than your first name, " + firstName);
} else {
  console.log("Your first name, " + firstName + " is the same length as your family name, " + lastName);
}
// END
