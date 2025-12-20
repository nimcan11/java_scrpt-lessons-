/// array function dettructions 
const Arradata =["Nimcaan","ali","caasha"];
const dislaydata = (data)=>{

let [name1,name2,name3]=data;
return ` welcome to ${name1} ${name2} ${name3}`
}
console.log(dislaydata(Arradata));

// object 
objectdata={
    name:"Nimcaan",
    Age:18,
    Jop:"web dev"
}
const mydata = (data)=>{
let {name,Age,Jop}=data
return `welcom ${name} your age is ${Age}  youre ${Jop}.`
}
console.log(mydata(objectdata));