// Assync  and await 
const getdata = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("shaqadii waa la bilaabbey")
        setTimeout(()=>{

       
        let success = true;
        if(!success){
            reject("Qalad ayaa dhacey")
        }else{
            resolve({name:"Nimcaan",
                Age: 21,
                country:"rebuplic of somaliland"
            })

        }
           },4000)
    })
  
};
// tracking promise 
// async function showdata(){
// try{
//     let data = await getdata();
//     console.log(data);
// }catch (Error) {
// console.log(Error);   // use ctach to handle the error 
// }

// } 
// showdata()

// tracking promise using arrow function 

   const showdata= async()=>{
try{
    let data = await getdata();
    console.log(data);
}catch (Error) {
console.log(Error);   // use ctach to handle the error 
}

} 
showdata()

