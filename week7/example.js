const CarCounts = 9;
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

const car_models = [
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

const carImages = [
  "https://cdn.pixabay.com/photo/2022/04/24/12/26/car-7153508_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/08/20/15/22/honda-civic-si-6560708_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/11/20/05/27/ford-mustang-6810911_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/12/23/09/18/tesla-6889042_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/10/12/22/39/chevrolet-spark-1736189_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/07/09/21/47/car-1506922_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/03/27/20/01/car-6129512_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg",
];
document.write(`<h2> ${CarCounts} Cars in this Page </h2>`)
document.write(`<div class="container">`)
for( i=0 ;i < CarCounts; i++){
console.log(i);
document.write(`<div class="card">`)

document.write(`<h2> ${CarCounts} Cars in this Page </h2>`)
document.write(`<img src="${carImages[i]}" alt="Car Image" />`)
document.write(` <div class="card-content">`)
document.write(`  <div class="card-title">Car Name: 1: Tesla Model S</div>`)
document.write(` <div class="card-info">Model: ${car_models[i]} </div>`)
document.write(` <div class="card-info">Brand: ${carBrands[i]}</div>`)
document.write(` </div>`)
document.write(`  </div>`)
}
document.write(`</div>`)