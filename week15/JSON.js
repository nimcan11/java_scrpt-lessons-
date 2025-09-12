// uisng stingfy to convert object and array into string 

// const list = ["Nimcaan","maxamed","Caasha"]; // this is an array 
// const User={
//     siblings:["muwaahib","xamda"],
//     Age:20,
//     University:"Hargisa",
//     Name:"mah"
// } // this is an object 

// console.log(list)
// console.log(User);

// // ensuring data type 
// console.log( typeof list);
// console.log(typeof User);

// // converting into str 
// const array_to_str = JSON.stringify(list);
// const obj_to_str =JSON.stringify(User);

// console.log(array_to_str);
// console.log(obj_to_str);

// // ensuring type of 
// console.log(typeof obj_to_str);
// console.log(typeof array_to_str);

// // coverting 
// const array  = JSON.parse(array_to_str);
// const object  = JSON.parse(obj_to_str);

// console.log(object);
// console.log(array);


const Users = [
  {
    name: "maxamad",
    age: "25",
    job: "dev",
  },
  {
    name: "cismaan",
    age: "20",
    job: "Editor",
  },
  {
    name: "mascuud",
    age: "19",
    job: "Full Stack",
  },
  {
    name: "nimcaan",
    age: "20",
    job: "islamic",
  },
];

localStorage.setItem("Users",JSON.stringify(Users));

const from_local_scrorage=JSON.parse(localStorage.getItem("Users"));
// console.log(from_local_scrorage);
for(let i =0;i < from_local_scrorage.length;i++){
    console.log(from_local_scrorage[i].name)
        console.log(from_local_scrorage[i].age)
}

