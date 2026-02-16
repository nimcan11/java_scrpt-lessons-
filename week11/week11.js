// accessing elements 
console.log(document);
console.dir(document)

// selecting elements 
const title = document.getElementById("title");
console.log(title.textContent);

// getting elemnts by class
const class1=document.getElementsByClassName("lists");
console.log(class1)
for(let i =0 ;i<class1.length;i++){
console.log(class1[i])
}
