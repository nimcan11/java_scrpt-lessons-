const money=["Shilling","Dirham","Diinaar","Dollar","lira","bound"];
console.log(money.slice(0,3))
const sliced= money.slice(4);
console.log(sliced);
// you can use negative numbers to dislpay ur array 
const N_slice=money.slice(-3);
console.log(N_slice); // Array(3) [ "Dollar", "lira", "bound" ]
 

//splice its more advanced that take three arguments first take start point , then delete count and last adding value 
// example
const Name=["maxamed", "shugri","xaliimo","yuusuf", "cali"];
console.log(Name.splice(1,4 , "Nimcaan"))// displaying the deleted items or elements ,  [ "shugri", "xaliimo", "yuusuf", "cali" ] adding My name 
console.log(Name);// Array [ "maxamed" ] the only remaining after deleting some 

// sort method 
console.log(Name.sort()) // its is uses unicode to sort items 
const num=[616,1717,56];
console.log(num.sort()); // Array(3) [ 1717, 56, 616 ]  uses unicode
// Reverse it makes two task making reverse and sorting
console.log(num.reverse());


// loop 
// loop is a block of code that repaeatly excute until met a certain condition 
// loop syntax
// For(intialization;condition;FinalExpression ){
// code };
// example using loop
let magacyo=["aamina", "raxma", "rayaan","najma", "suhuur"];
for(let Nimcaan=0; Nimcaan<5; Nimcaan++){
    console.log(Nimcaan);
    console.log(magacyo[Nimcaan]);
}
console.log("#######################################################################");
// example 2 
let fruites=["lemon", "mango","grapes", "coconuts","Avadcados","Orange"]; // we have to display these fruits using for loop
for(let i=0; i<5;i++){
    console.log(fruites[i]); // the output is displaying all fruites in the array
} 

for(let x=0; x < fruites.length; x++){
    console.log(fruites[x]);
}
// display only stings using this array 
console.log("#######################################################################");
let student_id=["maxamed",1,"xasan",2,"caasha",3,"khaalid",1,"yuusuf",2];
console.log(student_id); // using for loop we have to display this only stings not integers or numbers 
console.log("#######################################################################");
for(let  i=0;  i<student_id.length; i++){
    if(typeof student_id[i] ==="string"){
        console.log(`waakaan string kaliya ${student_id[i]}!!`);
    }
}
console.log("#######################################################################");
let numbers =[12,515,717,626,14,6,17,981]; // display using for loop weather they odd or even numbers 
for(let hubi=0; hubi < numbers.length;hubi++){
    if(numbers[hubi] % 2 === 0){
        console.log(numbers[hubi]);
    }
}

// another example checking odd or even numbers \
let tiro=[12,6,919,17176,71651,817,90,19];
for(let i=0;i<tiro.length;i++){
    if(tiro[i]%2 != 0){
        console.log(tiro[i]);
    }
  

}
  // using document.write 
    let my_freinds=["Amiin","Zuldaan","Maxamed","Yuuusuf","khaalid"];
    document.write(`<h1> Testing </h1>`);
    for(i=0;i<my_freinds.length;i++){
        document.write(`<h3>soo dhawoow zhp:${my_freinds[i]}</h3>`)
    }
    document.write("##############################################")
    console.log("#######################################################################");
    // using a loop skip some of my freinds 
let numbers1=[1,2, "cabdilaahi",4,5,6,7,"Nimcaan"];
for(i=0; i<numbers1.length; i++){

    if( typeof numbers1[i] ==  "string"){
        continue;
    }
 console.log(numbers1[i]);
}
// loop using label 
let students=["maxamed","Nimcaan","yuusuf","khaalid","yuusuf"];
let subject=["chemistry","physics", "maths","english"];
 mainloop:for(i=0; i < students.length ; i++){
  console.log(`-- Ardey-- ${students[i]} iyo madooyinkiisa  `);
 nestedloop: for(x=0; x < subject.length; x++){
    if(subject[x]==="english") break mainloop;
    console.log(`maado: ${subject[x]}`);
  }
}