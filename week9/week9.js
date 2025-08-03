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