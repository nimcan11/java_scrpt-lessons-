const numbers=[];
for(let i=0; i <=15; i++){
    numbers.push(i);
}
for(let i=1; i < numbers.length;i++){
    console.log(i);
}
const r="exercise21,".repeat(9);
console.log(r);

const Mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for(let i=0; i<Mynumbers.length;i++){
console.log(`${Mynumbers[i] * 2 }`)
}
const r2="exercise22,".repeat(9);
console.log(r.toLocaleUpperCase());

const names = [
  "ahmed",
  "fatima",
  "KHALID",
  "hodan",
  "MARYAM",
  "yusuf",
  "AMINA",
  "abdirahman",
  "NIMCO",
  "HASSAN",
  "layla",
  "ABDULLAHI",
  "amina",
  "FAISAL",
  "KARIM",
  "ali",
  "ZAHRA",
  "MOHAMED",
  "saida",
  "HAMZA",
  "ilyas",
  "SALMA",
  "mohamud",
  "NAJMA",
  "RASHID",
  "abdul",
  "FARAH",
  "DEQA",
  "salman",
  "KHADIJA",
  "yasin",
  "MAHAD",
  "HIBO",
  "OMAR",
  "HUSNA",
];
for(let i=0;i < names.length;i++){
  if(names[i] === names[i].toUpperCase()){

 
  console.log(names[i]);
   }
}

let r3="---exercise23---";     // exercise waxbaa iga dhiman 
console.log(r3.repeat(6).toLocaleUpperCase())

const Xarfo = ["A", "M", "K", "S"];
const names2 = [
  "ahmed",
  "fatima",
  "KHALID",
  "hodan",
  "MARYAM",
  "yusuf",
  "AMINA",
  "abdirahman",
  "NIMCO",
  "HASSAN",
  "layla",
  "ABDULLAHI",
  "amina",
  "FAISAL",
  "KARIM",
  "ali",
  "ZAHRA",
  "MOHAMED",
  "saida",
  "HAMZA",
  "ilyas",
  "SALMA",
  "mohamud",
  "NAJMA",
  "RASHID",
  "abdul",
  "FARAH",
  "DEQA",
  "salman",
  "KHADIJA",
  "yasin",
  "MAHAD",
  "HIBO",
  "OMAR",
  "HUSNA",
];

for (let i = 0; i < names2.length; i++) {
  const firstLetter = names2[i].toUpperCase(); 
  if (!Xarfo.includes(firstLetter)) {               
    console.log(names2[i]);                       
  }
}

// exercise 24
let r4="---exercise24---";
console.log(r4.repeat(6).toLocaleUpperCase())

for(let i=0;i < names.length;i++){
  if(names[i] === names[i].toLowerCase()){

 
  console.log(names[i]);
   }
}
// exercise 25 
let r5="---exercise25---";
console.log(r5.repeat(6).toUpperCase())

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Tesla",
  "Chevrolet",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Lexus",
];
for(i=0;i< carBrands.length;i++){
let jajbi=carBrands[i].split("").reverse().join("");
console.log(jajbi);
}
//hassn 

const carBrands1 = [
  "Toyota",
  "Honda",
  "Ford",
  "Tesla",
  "Chevrolet",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Lexus",
];

// loop-kaaga halkan
for (let i = 0; i < carBrands.length; i++) {
  let reverse = "";
  let car = carBrands[i];

  // reverse each car brand
  for (let x = car.length - 1; x >= 0; x--) {
    reverse += car[x];
    console.log(car[x]); // optional: shows the reversing step
  }

  console.log(reverse); // final reversed brand
}





















