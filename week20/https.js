
const showdata = async()=>{
  let response = await fetch("http://jsonplaceholder.typicode.com/users");
try{
     if(!response.ok){
    throw new Error("Qalad ayaa jira");

  }else{
  let data = await response.json();
  data.forEach((post)=>{
    console.log(post.name)
  })
//   console.log(data);
  }
}catch(Error){ 
    console.log(Error.message);
}
}
showdata()
