// exercise 8 -11 in week 3 
// exerise 8
let Price1 = 34.12;
let Price2 = 12.66;
let Msg=Price1 + Price2;
console.log(`Totalkaagu waa ${Msg}$`); // Totalkaagu waa 46.78$
 
// exercise 9
let mynumb = 90;
console.log(typeof mynumb.toString()); // string

let Mystr = "90";
console.log(typeof parseInt(Mystr)); // Number

let Views = "67450 Views";
console.log(parseInt(Views)); // 67450

// exercise 10
let Lacag = 56.87;
let Result= Math.round(Lacag); // code-kaaga halkan ku qor
console.log(Result); // 57

let Result1 = Math.ceil(Lacag); // code-kaaga halkan ku qor
console.log(Result1); // 57

let Result2=Math.floor(Lacag); // code-kaaga halkan ku qor
console.log(Result2); // 56

let Result3= Lacag.toFixed(1); // code-kaaga halkan ku qor
console.log(Result3); // 56.9
 // Exercise 11 
  let text = "Learning JavaScript is fun!";
console.log(text[9]); // J
console.log(text[3]); // r
console.log(text[23]); // f

// Exercise 12 
 const User1Phone = "4645195";
const User1Email = "jumhuur123@hotmail.com";
let result= User1Phone.startsWith("63") || User1Email.endsWith("@hotmail.com");         
console.log(result);
const User2Phone = "634818197";
const User2Email = "js@hotmail.com";
let result2= User2Phone.startsWith("63") || User2Email.endsWith("@hotmail.com");                  
console.log(result2);
