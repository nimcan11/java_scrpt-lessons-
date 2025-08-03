// named function for practice 
function jaar(qofka="lama aqoonsan"){
    console.log(`xaafada jaarkaya waxa gala${qofka}. `)
}
jaar("samiira") //xaafada jaarkaya waxa gala samiira

// anonymous function 
console.log("**Anonymous function **,".repeat(4));
let my_function= function(){
    return "hi";
}
console.log(my_function())
// example two 
var magac=function(...magaceyga){
    return `soo dhawaada ${magaceyga},jaceylkiinu ha waaro`;
}
// document.write(`<h2>${magac("nimcaan","mahdiya")}</h2>`)
console.log(`soo dhawaada ${magac("mahdiya", "Nimcaan")}, jaceylkiinu ha waaro.`);
// last example for practice 
let shaqaale=function(shaqada="lama aqoonsan"){
    return `waxaa tahey shaqaale ah ${shaqada}.`
}
console.log(shaqaale("watchman"));

/// Nested function a function with in another function 
console.log("**Nested function **,".repeat(4));
function salaan(){
    function halla(){
        return "soo dhawoow mudane Nimcaan";
    }
    return halla();

}
console.log(salaan());
// example three for nested 
function name(first_name,last_name){
    function format(){
        return first_name + " "+last_name;
    }
    return format();
}
console.log(`soo dhawoow ${name("cabdiqani iyo ","idil")}`)
// another example for nested 
let shaqaale1=function(sh1,sh2){
    function iskuqabo(){
        return sh1 + sh2;
    }
    return iskuqabo();
}
console.log(`shaqdaadu waa ${shaqaale1("xamaal", "watchman")}`);
// document.write(` <h2>soo dhawoow ${name("cabdiqani iyo ","idil")}</h2>`)

// example three 
// function counter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(`Your count is: ${count}`);
//   }
//   return increment;
// }
// let Mycounter = counter();
// Mycounter(); // Output: Current count: 1
// Mycounter(); // Output: Current count: 2
// Mycounter(); // Output: Current count: 3
// Mycounter();
function counter(){
    let count=0;
    function increment(){
        count++;
        console.log(`your count is ${count}`);
    }
    return increment;
}
const Mycounter = counter();
Mycounter();
// ananomous function warm up 
let product=function(prod="you would not take any product!!"){
console.log(`you take ${prod}`);
}
product("rice")

// arrow function

console.log("** Arrow function**".repeat(4));
// arrow function with out prams
// fist we create anonmous function without prams for examle 
let jop=()=>{
    console.log("my jop is software development");
}
jop();
// another way                                  for practice 
let jop2=()=>
    console.log("my jop2 is software development");

jop2();
// another way                                  for practice 
let jop3=_=> //                           it must one parameter 
    console.log("my jop3 is software development");

jop3();
let myname=function(){
    return "my name is nimcaan";
}
// another way to write with parameters 
let jop_par=(jop1="not specify",jop2="not sepcify")=>{
    console.log(`my jop_par ${jop1} and my jop two is ${jop2}. `);
}
jop_par("script writer","video editor ");
// another to write those with                           prams for practice 
let jop_par1=(jop1="not specify",jop2="not sepcify")=>
    console.log(`my jop_par1 ${jop1} and my jop two is ${jop2}. `);
// another to write those with                           prams for practice 
jop_par1("script writer","video editor ");
console.log(myname());
myname();
// another way to write for only those who havee only one prams 
let jop_par3=jop=> console.log(`your jop is ${jop}.`)
jop_par3("graphic designer");

// we apply arrow function this example by chnaging the varibale name where myname to magaceyga 
let magceyga=()=>{
return "my names is nimcan abdi ";
}
console.log(magceyga());
// another example 
let read=()=>{
    return "i read this year the names 48 laws of power its a wondefull book";
}
console.log(read());
// arrow function with prams 
let profit=(sell_price=0,cost_price=0)=>{
    let  your_profit= sell_price - cost_price;
    // return your_profit;
    console.log(`your profit is ${your_profit}`);

}
profit(30,3);

// arrow function with names function 
let soo_daabac=() => console.log("soo daabac"); // only you use when you want only one line 
soo_daabac(); // soo daabac
// another way to write arrow function  by removing () and convert into underscore _
let soo_daabac1= _ => console.log("waan ka saarey bracket");
soo_daabac1(); // waan ka saarey bracket


/// arrow function with prams  by removing function key word
let gift=(g="you dont get any gift")=>{
    return `you get ${g}`;
}
console.log(gift("iphone"));
// arrow function another way to write by removing curley braces and return to change return to console
let gift1 = (gf) => console.log(`you get a ${gf}`);
gift1("house")

// another way to write in arrow function !!! only you ca use one parameter 
let gift2= gf2 => console.log(`you get a : ${gf2}`)
gift2("labtop");

// more function examples 
// we write a function code that gives us a reversed word 
let kala_rog=(kalmad)=>{
 kalmad_kalarogan="";
 for(let i=kalmad.length - 1 ;i>=0;i--){
    kalmad_kalarogan=kalmad_kalarogan + kalmad[i];
 }
 return kalmad_kalarogan;
}
console.log(kala_rog("nimcaan"));
// in english 
let reverser=(word="there is no word") =>{
    reversed_word="";
    for(let i = word.length - 1 ; i >=0;i--){
        reversed_word=reversed_word + word[i];
    }
    return reversed_word;
}
console.log(reverser("mahdiya"));

// more examples 
// calculator example 
let calculate=(sign,n1,n2) =>{
let result=0;
switch(sign){
    case "+":
        result = n1 + n2;
        break;
        case "-":
            result=n1-n2;
            break;
            case "*":
                result=n1 * n2;
                break;
                case "/" :
                    result = n1 !==0 ? n1 / n2 :"zero is not divisible";
                    break;
                    default:
                        console.log(`you use wrong sign ${sign},it not defined!!!`)

}
return result;
}
console.log(calculate("+",2,2)) /// output:4 
console.log(calculate("-",200,2)) /// output:198
console.log(calculate("*",20,2)) /// output:40
console.log(calculate("/",20,2)) /// output:10
console.log("[",2,8)// you use wrong sign 
console.log("/",0,8)// zero is not divisible

// global and local scope example 
let name1="nimcaan abdi";
function myname1(){
    // let name1="nimcaan";
    return `my names is ${name1}.`
}
console.log(myname()) // local varibale 
console.log(name1); // global varibale 

// lexical scope - when acces another scope 
// Lexical Scope
function parent(){
x=10;
function child(){
  
}
function child1(){
  console.log(x)
}
return child1();
}
parent();

// questions about week seven 
// does only named functions used to write as arrow form? 







