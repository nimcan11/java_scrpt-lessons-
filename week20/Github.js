// // https://api.github.com/users/{username}
// // getting elements
// const btn = document.querySelector("button.btn");
// const fetchUser = async ()=>{
//     const input = document.getElementById("username").value
// const error = document.getElementById("error");
// const card = document.getElementById("userCard");
// const  img = document.querySelector("img")
// const name = document.getElementById("name")
// const bio = document.getElementById("bio");
// const followers = document.getElementById("followers")
// const following = document.getElementById("following")
// const repos = document.getElementById("repos")
// error.textContent="plz username not found "

//     try{
// const response = await fetch(`https://api.github.com/users/${input}`)
// if(!response.ok){
//     throw new Error(`User not found ${response.status}`);
// }else{
//     const data = await response.json();
//     error.textContent=""
//     // console.log(data);
//     card.classList.add("active")
//     img.src= data.avatar_url;
//     name.textContent=data.name
//     followers.textContent=` followers: ${data.followers}`
//     following.textContent=`followings: ${data.following}`
//     bio.textContent=`bio:${data.bio ||  "not found "}`
//     repos.textContent=`public repos : ${data.public_repos}`
// }
//     }catch(Error){
//           card.classList.remove("active")
//        error.textContent=Error.message

// // console.log(Error.message);
//     }
// }
// btn.addEventListener("click",()=>{
// fetchUser();
// })

// sending response 
const objectdate ={
    userId:16,
    body:"waa qoraal cusub OO KALE "
}

const postdata = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/20",{
    method:"DELETE", // updating 
    //   method:"POST", // original 
    body:JSON.stringify(objectdate),
    headers:{
        "content-type": "application/json",
    }
    })
if(response.ok){
    return await response.json();
}else{
    throw new Error(`not working ${response.status}`)
}
}
postdata();

