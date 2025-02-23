//BREAKOUT-EXERCISE 2

// Exercise 1

const length = parseFloat("8");
const width = parseFloat("6");
const area = 8 * 6;
const perimeter = 2 * (8+ 6);
console.log("The area of the rectangle is: " + area);
console.log("The perimeter of the rectangle is: " + perimeter);



// Exercise 2

const radius = parseFloat("5");
const pi = 3.14;
const area2 = 3.14* 5 * 5;
const circumference = 2 * 3.14 * 5;
console.log("The area of the circle is: " + area2);
console.log("The circumference of the circle is: " + circumference);


//Exercise 3

const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;
const slope = (y2 - y1) / (x2 - x1);
const xIntercept = -(-2) / slope; 
const yIntercept = -2; 
console.log("Slope (m): " + slope);
console.log("x-intercept: (" + xIntercept + ", 0)");
console.log("y-intercept: (0, " + yIntercept + ")");

 
// Exercise 4

const slope1 = 2; 
const slope2 = 3; 
if (slope1 > slope2) {
  console.log("Equation 1 (y = 2x - 2) has a steeper slope.");
} else if (slope1 < slope2) {
  console.log("Equation 2 (y = 3x + 1) has a steeper slope.");
} else {
  console.log("Both equations have the same slope.");
}


// Exercise 5


function calculateY(x) {
    return -x * x + 6 * x + 9;
  }
  
for (let x = -5; x <= 5; x++) {
    let y = calculateY(x);
    console.log("For x = " + x + ", y = " + y);
  
    if (y === 0) {
      console.log("y is 0 when x = " + x);
    }
  }

  //END
  



