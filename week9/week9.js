// the map method 
const num =[1,2,3,4,5,6,34,56,78,12];
const double = num.map(num=>num*2);
console.log(double);

const names=["Jaamac","Ali","Khaalid"];
const waaweyne = names.map(num => num.toUpperCase());
console.log(waaweyne)

// filter method 
const even_num =num.filter((num) =>{
    return  num % 2===0;
})
console.log(even_num);

// display only those who have start a 
const magacaan =["Nimcaan","ayaaan","khaalid","Fatima","caaisha"];
const ku_bilaabma_a =magacaan.filter((magac)=>{
    magac.startsWith("a");
})
console.log(ku_bilaabma_a);


// reduce method 
const digits = [1, 2, 3, 4];

const total = digits.reduce(function(accu, current,index){
  console.log("Accumulator:", accu);
  console.log("Current value:", current);
  console.log(`index:${index}`)
  return accu + current;
}, 0); // initial value

console.log("Final result:", total);

// console.log(myreduce_digits)
