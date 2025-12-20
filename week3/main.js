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