// loops 
//loop syntax 
// for (init,condition,init){
// code }

// example 
let i=0;
for(let i=0;i<5;i++){
    console.log(i);
}
// impllementing array 
const names=["Nimcaan","Faaraha","Caasha"];
for(let i=0;i<names.length;i++){
    console.log(`soo dhawoow ${names[i]}`)
}

const StudentsWithid = [
  "muna",
  1,
  "khaalid",
  2,
  "Cimraan",
  3,
  "sacad",
  4,
  "Daahir",
  5,
];
for(let i=0 ;i< StudentsWithid.length; i++){
if(typeof StudentsWithid[i] === "string" ){
    console.log(StudentsWithid[i]);
}
}

// // i only wanna even numbers 
// const Mynumbers = [
//   23, 45, 67, 12, 89, 34, 56, 78, 90, 12, 45, 67, 89, 34, 56, 78, 90, 11, 22,
//   33, 44, 55, 66, 77, 88,
// ];
// for(let i=0;i<Mynumbers.length;i++){
//     if(Mynumbers[i] % 2 == 0){
//         console.log(`Even numbers:${Mynumbers[i]}`)
//     }
// }

const Myfreinds=["Naima","shukri","Faatima"];
for(let i=0; i<Myfreinds.length;i++){
    document.write(`<h4>welcome ${Myfreinds[i]} </h4>`)
}

// 
const dad=[1,2,3,4,7,8,9,0,"Nimcaan"];
for(let i = 0; i<dad.length;i++){
if(typeof dad[i] == "string"){
    
  
    break;
   
}
  console.log(dad[i])
      
        
    }

    const Students = ["warda", "xasan", "Maxamad", "Mukhtaar", "Laki"];
let highSchoolSubjects = ["Mathematics", "Physics", "Biology", "Chemistry"];

for(let i=0;i<Students.length;i++){
 console.log(`--${Students[i]}--`);
 for(let x=0;x<highSchoolSubjects.length;x++){
    console.log(highSchoolSubjects[x])
}
}



