// looping elemnts 
// getting as nodes 
let items = document.querySelectorAll("li")
// getting as html collection 
const myitems = document.getElementsByTagName("li")
// console.log(items) // nodes 
// console.log(myitems); //html collcetion 

// looping nodelist  using for each
// items.forEach((item)=>{
//     console.log(item);
// })

// // html collection  used for array.from
// Array.from(myitems).forEach((items)=>{
//     console.log(items)
// })
// array.from example 
// str="my names Nimcaan Abdi Mohomed";
// console.log(Array.from(str))



// loopig using for loop 
// for(i=0;i<items.length;i++){
//     console.log(items[i]);
// }


// // looping use for loop 
// for(let i = 0; i<myitems.length;i++){
//     console.log(myitems[i]);
// }

// using for of 
for(let item of items){
    console.log(item);
}