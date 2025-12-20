// // making cal back function 
// function salaan (callback ){
//     console.log("shaqo ayaa bilaabantey.....");
//     return callback()
// }
// function salaankale(){
//     console.log("shaqadii wey dhamaatey ")
// }
// salaan(salaankale);

// console.log("#####".repeat(20))


// // promise - maing promise 
// let my_promise = new Promise ((resolve,reject)=>{
//     console.log("shaqo ayaa socta .....")
//     let guul = false;
//     if(!guul){
//        reject( "waa lagu guuul dareytey qalada ayaa dhacey!!")
//     }
//     else{
//         return resolve({
//             name:"Nimcaan",
//             age:21
//         })
//     }
// })
// // accessing promise 
// my_promise.then((data)=>{
//     console.log(data)
// }).catch((erro)=>{
//     console.log(erro)
// }).finally(()=>{
//     console.log("shaqadii wey dhamaatey")
// })

console.log("#####".repeat(20))

// Example two promise 
const get_data =()=>{
  return new Promise((resolve,reject)=>{
    console.log("shaqadii waa la bilaabey")
    setTimeout(()=>{
       let worked = true;
       if(!worked){
        reject("shaqadiii waa lagu guul dareystey")
       }else{
        resolve("shaqadii waa lagu guuleytey")
       }
    },6000)
  })

}
get_data().then((data)=>console.log(data))
.catch((Error)=>console.log(Error))
.finally(()=>console.log("shaqadii wey dhamaatey bye "))