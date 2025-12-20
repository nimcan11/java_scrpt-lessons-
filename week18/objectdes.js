
// object destrection 
let obj = {
    Age:9,
    name:"Guuleed Abdirahman mohomed",
    country:"Somaliland",
    Isasthma:"no",
    cinwaan:{
    weight:25,
    height:17
    }

}
let {Age,name,country:wadan,Isasthma8 ,grade="four"}=obj;
console.log(Age);
console.log(name);
console.log(wadan);
// adding default value 
console.log(grade); // four 
// how acces nedted if 
let{cinwaan:{height}}=obj
console.log(height);