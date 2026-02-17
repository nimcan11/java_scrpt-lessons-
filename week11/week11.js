// accessing elements 
console.log(document);
console.dir(document)

// selecting elements 
const title = document.getElementById("title");
console.log(title.textContent);

// getting elemnts by class
const class1=document.getElementsByClassName("lists");
// you can loop if you want to display clearly
console.log(class1)
for(let i =0 ;i<class1.length;i++){
console.log(class1[i])
}
// getting elements by tag name 
const paragraph=document.getElementsByTagName("h1");
console.log(paragraph);
// is not an array it is an object we check using type of 
console.log(typeof paragraph);
console.log(Array.isArray(paragraph)); // false 

// the modern way using website 
const input1 = document.querySelector("#input_one");
console.log(input1);

