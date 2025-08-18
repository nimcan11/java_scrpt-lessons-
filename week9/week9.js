// map methods 
// map is java script array methods that creates new
//  array applying function with new array without changing original array 
// eaxmples of map method 
console.log("** map method examples **".repeat(5));
let arrays=["ayaan","suleekha","raxma","zamzam","hoodo"];
let myarrays=arrays.map(function(elements,index,array){
    return elements;
})
for(let i=0;i<myarrays.length;i++){
    console.log(myarrays[i]);
}

// example two a code that makes uppercase for first latter 
console.log("** Example two for map method**".repeat(3));
let username=["caasha","khadra","jamiila","maxamed","mahdiya"];
let my_username=username.map((elements,index,array)=>{
return`${elements.charAt(0).toUpperCase()}${elements.slice(1).toLocaleLowerCase()}`;
})
console.log(my_username)
// example to find module in a array 
console.log("** Example three for map method**".repeat(3));
let tiro=[1,45,6,9,5,14,50,68,34,56];
let find_module=tiro.map((elements)=>{
    return elements %2;
})
console.log(`the module numbers are ${find_module}.`)
// example three a code that display names inside and each name by @
console.log("** Example four for map method**".repeat(3));
let magacyo=["ismaaciil","c/raxmaan","muxumed","odowaa","geeddi","cali"];
let kudar=magacyo.map(function kudar(){
    return `@${magacyo}.`
})
console.log(kudar);

// fileter method 
console.log("** filter mrthod**".repeat(8));
// filter it can a like map but it deffer from it caheck you array based a condition you specify 
// example 1. 
// a code that check wether odd or even it takes the number remeider == is zero 
console.log("** example one **".repeat(4));
let whole_number=[67,12,60,30,23,11,98,23,12,56,22,90];
let check=whole_number.filter(function(checked){
return checked % 2 != 0;
    //  return checked % 2 !=0; // those not pass the condition
})
console.log(check);
// check number that starts a 
let names=["ayaan","maxamed","ali","kahaali","abdi","abdilahi"];
let check_name=names.filter(function(name_checker){
    return name_checker.startsWith("A") || name_checker.startsWith("a");
})
console.log(check_name); 

// recovery 
console.log("recovery lesson".repeat(4))
// map function 
let mgc=["raxma","khadra","hoodo","salma","mutaaz"];
let hubi=mgc.map(function format(name){
return `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`
});
console.log(hubi);

let num=[17,16,918,81716,98,90,9,23];
let num_chec=num.map((num)=>{
    return num %2;
})
console.log(num_chec);
// filter recovery 
let Names=["gees","gudhuu","caanaley","dhuxul","kinaaj","maan","gaandi"];
let names_check=Names.filter((mgcy)=>{
    return mgcy.startsWith("g")
})
console.log(names_check);
// filter examples 
let array_num=[14,112,34,55,64,11,334,5,6,7,811,34];
let check_numbers=array_num.filter((num1)=>{
return num1 >=30;
})
console.log(check_numbers);

let names1=["caasha","faadimo","khadra","maxamed","cali","jaama","yuuusuf"];
let enter_names="luul";
let check_names1=names1.filter((name1)=>{
return name1 === enter_names;
})
console.log(check_names1);

let check_names2=["caasha","faadimo","khadra","maxamed","cali","jaama","yuuusuf","Mutaaz"];
let search_name="c";
let check_check_names2=check_names2.filter((name1)=>{
return name1.startsWith(search_name.toUpperCase()) || name1.startsWith(search_name.toLocaleLowerCase());
})
console.log(check_check_names2);

//recovery two 
console.log("recovery_two".repeat(4));

const randomNames = [
  "Ayaan",
  "Khalid",
  "Layla",
  "Mohamed",
  "Fatima",
  "Hassan",
  "Nimco",
  "Ibrahim",
  "Zahra",
  "Salman",
  "Abdirahman",
  "Saida",
  "Mahad",
  "Deqa",
  "Rashid",
  "Hamza",
  "Yasmin",
  "Faisal",
  "Nasra",
  "Ali",
  "Hibo",
  "Abdullahi",
  "Sumaya",
  "Omar",
  "Muna",
];
let filter_names=randomNames.filter((name)=>{
    return name.length  > 8;
})
console.log(filter_names);
let mappping_names=randomNames.map((name)=>{
    return name.charAt(0).toLowerCase();
})
console.log(mappping_names);

// REDUCE 
console.log("reduc".repeat(4));
const bar=[1,2,3,4,5];
const bar_reduce=bar.reduce((acc,curent_value,index,array)=>{
    console.log(`accumalator${acc}`)
     console.log(`current valus${curent_value}`)
    return acc + curent_value;
},2)
console.log(bar_reduce);

// finding the most lengeth number 
let words=["Nimcaant","maxamed","ayaan","Axmed","sullekha","raxma"];
let word_lengeth=words.reduce((accumalator,current_value)=>{
    return accumalator.length > current_value.length ? accumalator:current_value;
})
console.log(word_lengeth);

console.log("for each examples".repeat(7));
const nums = [1, 2, 3];

nums.forEach(function (number, index, array) {
  array[index] = number * 2;
});

console.log(nums);

let friuts=["banaana","orange","lemon"];
let friuts_loop=friuts.forEach((name,index)=>{
    console.log(`this is ${name}and its index is ${index}.`)
})
