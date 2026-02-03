const CarCounts = 8;
const carNames = [
  "Toyota Corolla",
  "Honda Civic",
  "Ford Mustang",
  "Tesla Model S",
  "Chevrolet Camaro",
  "BMW X5",
  "Mercedes-Benz C-Class",
  "Audi Q7",
  "Lexus RX",
];

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

const carModes = [
  "Sedan",
  "Sedan",
  "Coupe",
  "Electric Sedan",
  "Coupe",
  "SUV",
  "Sedan",
  "SUV",
  "SUV",
];
const  carnum=[1,2,3,,4,5,6,7,8,]

const carImages = [
  "https://cdn.pixabay.com/photo/2022/04/24/12/26/car-7153508_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/08/20/15/22/honda-civic-si-6560708_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/11/20/05/27/ford-mustang-6810911_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/12/23/09/18/tesla-6889042_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/10/12/22/39/chevrolet-spark-1736189_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/07/09/21/47/car-1506922_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/03/27/20/01/car-6129512_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/10/02/21/00/auto-969048_1280.jpg",
];


document.writeln(  `  <h2>${CarCounts} on this page </h2> `)
document.writeln(`<div class="container"> `);
x=0;
for(;x<CarCounts;){
    x++;
document.writeln(`  <div class="card">`)
document.writeln(`    <img src="${carImages[x]}" alt="Car Image" />`)
document.writeln(`   <div class="card-content">`)
document.writeln(`      <div class="card-title">Car Name: ${carnum[x]- 1 }: ${carNames[x]}</div>`)
document.writeln(`      <div class="card-info">Mode: ${carModes[x]}</div>`)
document.writeln(`  <div class="card-info">Brand: ${carBrands[x]}</div>`)
document.writeln(`</div>`)
document.writeln(`</div>`)
}



document.writeln( ` </div>`)


  