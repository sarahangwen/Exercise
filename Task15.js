
//BREAK OUT-EXERCISE 2

//Exercise 1

const now = new Date();

const formatNumber = (num) => String(num).padStart(2, '0');

const year = now.getFullYear();
const month = formatNumber(now.getMonth() + 1); 
const day = formatNumber(now.getDate());
const hours = formatNumber(now.getHours());
const minutes = formatNumber(now.getMinutes());


const format1 = `${year}-${month}-${day} ${hours}:${minutes}`;  
const format2 = `${day}-${month}-${year} ${hours}:${minutes}`;  
const format3 = `${day}/${month}/${year} ${hours}:${minutes}`;


console.log("YYYY-MM-DD HH:mm ->", format1);
console.log("DD-MM-YYYY HH:mm ->", format2);
console.log("DD/MM/YYYY HH:mm ->", format3);


