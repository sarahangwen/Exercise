
//BREAK OUT-EXERCISE 1

//Exercise 1

function getReadableTime() {
    const now = new Date();
    const formatNumber = (num) => String(num).padStart(2, '0');
    const year = now.getFullYear();
    const month = formatNumber(now.getMonth() + 1); 
    const day = formatNumber(now.getDate());
    const hours = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const readableTime1 = getReadableTime();
console.log("Human-readable time:", readableTime);


// END