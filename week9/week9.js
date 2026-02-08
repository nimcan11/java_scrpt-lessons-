// // the map method 
// const num =[1,2,3,4,5,6,34,56,78,12];
// const double = num.map(num=>num*2);
// console.log(double);

// const names=["Jaamac","Ali","Khaalid"];
// const waaweyne = names.map(num => num.toUpperCase());
// console.log(waaweyne)

// // filter method 
// const even_num =num.filter((num) =>{
//     return  num % 2===0;
// })
// console.log(even_num);

// // display only those who have start a 
// const magacaan =["Nimcaan","ayaaan","khaalid","Fatima","caaisha"];
// const ku_bilaabma_a =magacaan.filter((magac)=>{
//     magac.startsWith("a");
// })
// console.log(ku_bilaabma_a);


/// reduce method 
const digits=[1,2,,3,4,5,6,,7,8];
const myreduce_digits=digits.reduce(function(accu,index,array){
console.log(`Accumaltor:${accu}`) 
return accu + 1;
})
// console.log(myreduce_digits)
