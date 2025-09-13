// Example 

// start date 
const start_date = new Date("2004,9,21").getTime();
const end_date = new Date("2020,4,5").getTime();
// console.log(start_date);
// console.log(end_date);
const farqi = end_date - start_date;
// console.log(farqi); // seconds 
// as seconds 
const seconds = farqi / 1000;
console.log( "seconds",seconds);
// minute  
const minute  = seconds / 60;
console.log( "minutes",minute);
// hour 
const hour  = minute /60;
console.log("hour", hour);
// days 
const days = hour/24;
console.log("days", days);
// week 
const week = days / 7 ;
console.log("week",week);
// months 
const months = week / 4 ;
console.log(months); 
// years 
const years = months / 12;
console.log("years", years);

 

