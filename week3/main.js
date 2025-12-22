// template literral examples 
const text1 = "asc";
const text2="my name is ";
const text3="Nimcan";
console.log(`${text1} ${text2} ${text3}`); // asc my name is Nimcan

console.log("type of lesson".repeat(3))

// type conversion examples
const price = 100;
const skill="software developer"
const isFreelance=true;
const rating=4.5;
const numberString="12345";
const invalidNumberString="123abc";
const undefinedValue=undefined
const nullValue=null
const array=[1,2,3,4,5]
const car={
    color:"red",
    model:2020,
    brand:"Toyota"
}
console.log(typeof price) // number
console.log(typeof isFreelance); //bolaean
console.log(typeof rating); // number
console.log(typeof array); // object
console.log(typeof undefinedValue) // undefined
console.log(Array.isArray(array));// 
console.log(Array.isArray(car)) // false 

// to string method 
const mynum=160;
const mynumstrr= mynum.toString();
console.log(typeof mynumstrr) // string

// to fixed method 
const myrating=4.56789;
console.log(myrating.toFixed(2)) // 4.57

// parse int method
const num_string = "150px";
const parseint=parseInt(num_string);
console.log(parseint) // 150
// pase flaout 
// its used if you wanna to dispaly decimal points
const numstring2="80.81717";
const parseflt=parseFloat(numstring2)
console.log(parseflt) // 80.81717

// pare integer has authority to catch numbers inside a conten fo example 
let follow = "200000folowers";
// 
const parsefolow = parseInt(follow);
console.log(parsefolow);

// lesson four  methods 
//number methods 
const tiro = " 123 "
const tiro_num= Number(tiro);
console.log(tiro_num);
console.log(Number(tiro));

// Inan method 
const age=21;
const name = "Dhago";
console.log(isNaN(age)) // false 
console.log(isNaN(name)); // tue 

// Round method 
console.log(Math.round(9.87)); // 10
// floor mthod 
console.log(Math.floor(12.9))

// ceil method 
console.log(Math.ceil(13.6)) //14
console.log(Math.ceil(12.2)) //12 

// trunc method
console.log(Math.trunc(45.67))//45
// power method 
console.log(Math.pow(20,2)) // 400
// min method 
console.log(Math.min(1,2,3,4,7,8,90,)); //1 
console.log(Math.max(12,87616,3,5,6,)) //87616

// random method 
console.log(Math.random(12,1,12,4,5,6,))// we cant predict


// Access string using index
const name1 = "Nimcaan";
console.log(name1[2]) //m
// instaed of squre bracket you can char at 
console.log(name1.charAt(0)) //n
// length 
console.log(name1.length);
// includes string method 
let text = "i wanna to be software developer in 2026 insha allah";
console.log(text.includes("insha allah")) // it reurn boolean true
// index of 
console.log(text.indexOf("w"))

// last inedx of - starts the last when making indexing 
console.log(text.lastIndexOf("e")) //
let text4= "my name";
console.log(text4.slice(-4))//

// slice without minus 
console.log(text4.slice(0,3)) //my
// substring mehod 
console.log(text4.sub(1,4))//

// trim method removes spacing 
let teacher = "  jamhhuri  "
console.log(teacher);
console.log(teacher.trim())