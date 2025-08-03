const numbers=[1,2,3,4,5,7];
let x =0
for(; x < numbers.length;){
console.log(numbers[x])
x++;
}
console.log("qeybta labaaad,".repeat(7))
//if you wanna to skip one number when printing the console 

let a = 0;
for(; a < numbers.length;){
    console.log(numbers[a])
a+=2
}
console.log("qeybta seddexaad,".repeat(6))
// if you wanna to start from the top

for(r = numbers.length - 1 ; r>=0; r--){
    console.log(numbers[r])
}
console.log("while loop,".repeat(6))
x=1;
while(x <  5){
    console.log(x)
    x++;
}
// while using an array numbers and string 
num=[1,2,3,4,5,6,];
let n=0;
while(n< num.length){
    console.log(num[n])
      n++;
  
}
// using names or strings 

 let magacayo=["maxamed", "xasan","caasha", "khaalid", " yuusuf", "aamina"];
let i =0;
while(i < magacayo.length){
    if( magacayo[i] === "khaalid"){
        i++
        continue;
    }
    console.log(magacayo[i]);
    i++;
}
console.log("while loop,".repeat(6))
let animals=["ayy", "waraabe", "libaax", "daanyeer", "jiir"]
let j=0;
while(j < animals.length){
    if(animals[j]=== "waraabe"){
        j++
        break;
    }
    console.log(animals[j])
    j++;

}
/// do while loop 
console.log(" do while loop,".repeat(7))
let m = 0; // intialization 
do{
    console.log(m) // doing code 
    m++; // final action 
}
while(m < 6); // condition 

// using names and numbers for do while loop 
// console.log(" do while loop, with example 1 ".repeat(3))
// let players=["messi", "ronaldo", "lewondawizki", "raphiniha"];
// let p=0;
// do{
//     console.log(players[p])
//     p++;
// }
// while(p < players.length);
// using a numbers in array 
console.log(" do while loop with example 2 ,".repeat(3))
let som_towns = ["Hargeisa", "Alleybadey", "Gabilley" , "wajaale","Buroa","Kismaayo", "dhagax-buur", "mogadisho"];
let t = 0; 
 do{
    if(som_towns[t]=== "mogadisho"){
        t++;
    continue;
 } 
 console.log(som_towns[t]);
 t++;
 }
 while( t < som_towns.length);
 console.log(" do while loop with example 3 ,".repeat(3))
 let my_family=["ayaan", "maxamed", "Axmed", "suleekha", "raxma", "Mahdiya"];
 let f=0;
 do{
    if(my_family[f]=== "Mahdiya"){
        f++;
        continue;
    }
    console.log(my_family[f]);
    f++;
 } 
 while(f < my_family.length);

// let password;
// do{
//     password = prompt("geli passwordka")

// }
// while(password !== "1234");


// functions .................................................................................................
console.log("functions , ".repeat(9))
 function qabiil(){
    console.log("qabiilkeeygu waa isaaq  ")
 }
qabiil();



/// how to use parameters in js functions 
console.log("functions used in parameters  , ".repeat(3))
// function salaan(magac){
//     console.log(`soo dhawoow ${magac}`);
// }
// salaan("nimcaan");
// salaan("mahdiyaa")
function welcom(wel){
    console.log(`welcome to our website ${wel}`);
}
welcom("maxamed");


// functions using two arguments 
console.log("*** using two arguments***".repeat(3));
function isku_dhufo(n1,n2){
    console.log(`the multiplucations of ${n1} and ${n2} is: ${n1 * n2 } `);
}
isku_dhufo(12,12);
// using two arguments 
console.log("*** using two arguments***".repeat(3));
function kala_jar(n1,n2){
    console.log(`the substraction of ${n1} and ${n2} is: ${n1 - n2}`);
}
kala_jar(18,7);

// how to use deafult parameter 
 console.log("*** Default parameters***".repeat(3));
 function vis(visitor="cutomer"){  // thats default value 
    console.log(`welcome ${visitor} with open heart and hand`);
 }
vis()
vis("xasan")
 console.log("*** Default parameters 2 ***".repeat(3));
 function car(name="none", price=0, model="none"){
    console.log(`your car name is ${name} , its price:$${price} and its model is:${model}, thank you for shipping with us. `);
   
 }
 car("Tayota",900,"Tuv");
 car("lamborghini",50000,"high lass")
 car();

 // example three default 
 function football(your_team="nonE" , cups=0){
    console.log(`your favarite football club is: ${your_team} , and it has:${cups} international cups  `);
 }
 football("liverbool",19);

 // using retrun function 
 console.log("**return function".repeat(7));
function subject_grade(subject="none",garde=0){
    const sub_total=`${subject} and its grade is ${garde}.`;
    return sub_total;
}
console.log(subject_grade("chemistry",20));

// rest parameters 
console.log("** rest parameters**".repeat(3))
function price(...total_price){
    total=0;
    for(let i=0; i < total_price.length;i++){
        total=total + total_price[i];
    }
    return total;

}
console.log(price(20,20));

// example two using rest parameters 
console.log("** rest parameters 2 **".repeat(3))

function product(...goods){
    total_goods=0;
    let i=0;
    while(i < goods.length){
        total_goods+=goods[i];
        i++;
    }

    return total_goods;
}
console.log(product(12,12,13));

function players(...player) {
    let i = 0;
    while (i < player.length) {
        console.log(player[i]);
        i++; // ✅ this is important
    }
    return player;
}
players("neymar", "mo salah");



 







