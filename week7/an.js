const AnimalCounts = 9;
const animal_names=[
    "elephant",
    "cats",
    "snakes",
    "dogs",
    "frogs",
    "Birds",
    "Goats",
    "sheeps",
    "crocadile",
    "lion"
]
const animal_charecters=[
"honest",
"stealing",
"dangerous",
"intelligent",
"living water and land",
"flying",
"sensetives",
"we get meet",
"very dangerous",
"high danger"

]
const Animal_images=[
    "https://cdn.pixabay.com/photo/2019/11/27/23/35/animal-4658095_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/05/09/23/47/tree-snake-7982626_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/02/27/15/17/tree-frog-8600329_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/06/06/07/15/white-owl-9644261_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/09/24/15/15/billy-goat-459232_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/09/04/23/sheep-7251678_1280.jpg",
     "https://cdn.pixabay.com/photo/2024/02/27/15/17/tree-frog-8600329_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/02/27/15/17/tree-frog-8600329_1280.jpg"
]
document.write(`   <h2>the availabales animals are ${AnimalCounts}</h2>`);
document.write(` <div class="container">`)
for(n=0; n <AnimalCounts; n++){
    console.log(n)

document.write(`<div class="card">`)
document.write(`  <img src="${Animal_images[n]}" alt="Car Image" />`)
document.write(` <div class="card-content">`)
document.write(` <div class="card-title"> Animal name : ${animal_names[n]}</div>`)
document.write(` <div class="card-info">animal behavior: ${animal_charecters[n]}</div>`)
document.write(` </div>`)

document.write(`</div>`)
}
document.write(` </div`)