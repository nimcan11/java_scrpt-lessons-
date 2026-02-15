// objects make up course 
// creating an object 
const person = {
  name:"Nimaacn",
  Age:21,
  Isgraduated:true
}
console.log(person)
// accessing the object 
console.log(person.Isgraduated) // true 
// modifying data 
person.Age=22;
console.log(person.Age);
// prectice exercise 
// Create an object called myProfile. Give it properties for firstName,
//  lastName, and age. Then, change the age to a different number and print the object to the console.

const myProfile={
  firstname : "Nimcan",
  lastname:"Abdi",
  age:42
}
// chnaging the age data 
myProfile.age=22
console.log(myProfile);

// Exercise 2: The Calculator Object
// Create an object called calculator. Give it two numbers (num1 and num2) 
// and a method called sum. The sum method should return the total of the two numbers

const Calculator={
  num1:12,
  num2:14,
  sum(){
    return this.num1 + this.num2;
  }

}
console.log(Calculator.sum())

// Nested object inside another objects 

const profile={
 Name:"Nimcan Abdi Mohomed",
 contact:{
  phone:633467231,
  facebook:"httpsnimcanabdi",
 },
 status:{
  Ismarried:false,
  Issingle:true
 }
}
console.log(profile.contact.phone); ///633467231

// Example two nested objects in js 
const clubs={
  premier_ligue:{
    London:"Chelsea,arsenal,Totengham",
    Manchester:"Manchester city,Manunited",
    Liverpool:"LFC,everton"
  },
  Leliga:{
    Madrid:"rael madrid , Atletico madrid valenecia",
    Barcelona:"BFC,GETAFE",
    Sevila:"Seviall, mooji"
  },
    ligue1:{
    Madrid:"rael madrid , Atletico madrid valenecia",
    Barcelona:"BFC,GETAFE",
    Sevila:"Seviall, mooji"
  }
}
console.log(clubs.Leliga.Barcelona);

// Array object this how modern objects works 
const Students=[
  {id:1,name:"Nimcaan",shcool:"Noradin"},
    {id:2,name:"Jaamaca",shcool:"Noradin"},
      {id:3,name:"Khaalid",shcool:"Nan"},
        {id:4,name:"Fatima",shcool:"Ileys"},
          {id:5,name:"Ipado",shcool:"Elem"},
            {id:7,name:"Najma",shcool:"slaama"},
];
console.log(Students[4].name) // ipdao
