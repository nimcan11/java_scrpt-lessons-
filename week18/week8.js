// example of destructurig using array 
let students =["maxamed","clai","khaalid"];
// make array every name 
// let [name1,name2,name3]=students;
// // deaclaring 
// console.log(name1);
// console.log(name2);
// console.log(name3);
// objects 
let user={
    magaca1:"Nimcaan cabd",
    Age:21,
    Ismaried:false
}
// store a variable using destructuring 
let{magaca1,Age,Ismaried}=user;
console.log(magaca1);
console.log(Age);
console.log(Ismaried);
// if you want to skip one of your values 
let [,,ardeyga]=students; 
console.log(ardeyga); // khaalid

// with an array 

const list = [
  "saalim",
  "cali",
  "sucuud",
  "ilahaan",
  ["muuse", "nasri", ["yuusuf", "muwaahib"], "safwaan"],
  "mukhtaar",
];
let [name1,name2,name3,name4,[name5,name6]]= list;
console.log(name5);
console.log(name6);
// if you want to acces muwaahib 
let [,,,,[,,[,muw]]]=list;
console.log(muw); //muwaahib
