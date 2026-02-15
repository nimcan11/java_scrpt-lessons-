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
