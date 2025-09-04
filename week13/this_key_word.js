// using as global 

// console.log(this.location.href);

// using button 
const btn = document.querySelector("button");
const file = document.getElementById("file");
btn.onclick= function node(){
    console.log(this);
}

btn.addEventListener("click",function node(){
    console.log(this);
})

const obj={
    name:"Nimcaan Abdi",
    Age:21,
    legend: function mine(){
        console.log(this)
    }
}
obj.legend();

// event simulation 




