// replace string method 
const text = "i wanna to be professional proggrammer";
console.log(text.replace("proggrammer","full stack developer"))  //i wanna to be professional full stack developer
// replace all method 
const text2="i can speak somali because am somali";
console.log(text2.replaceAll("somali","British")) // i can speak British because am British
// splits it used to split string and then stored as array
const text3="habits are often no diffreneces until you cross crictical thresholds and you unlock new levels of performance";
console.log(text3.split())
// concat method 
text5="Mr";
text6="Proggrammer";
console.log(text5.concat((" "),text6));  //Mr Proggrammer

// chain methiod (parseFloat + toFixed examples)
const views = "20000.12 viewers";
const parsed = parseFloat(views);               // 20000.12 (number)

// toFixed returns a string with the given number of decimals
console.log(parsed.toFixed(2));                 // "20000.12" (string)

// convert back to number if needed
console.log(Number(parsed.toFixed(2)));         // 20000.12 (number)
console.log(+parsed.toFixed(2));                // 20000.12 (number)

// Example: scale down to 2000 (divide by 10) and round
const scaled = Math.round(parsed / 10);         // 2000 (number)
console.log(scaled);                            // 2000

// Alternative: truncate instead of round
const truncated = Math.trunc(parsed / 10);      // 2000 (number)
console.log(truncated);                         // 2000

// Format to 0 decimals (returns string, rounded)
console.log(parsed.toFixed(0));                 // "20000"