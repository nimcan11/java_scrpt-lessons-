// create an object 
const proggraming_languages = [
    {Name:"Java script",type:"High level language",Role:"Web development"},
        {Name:"python",type:"High level language",Role:"Ai"},
          {Name:"C++",type:"High level language",Role:"desktop"},
];
localStorage.setItem("Proggraming_languages",JSON.stringify(proggraming_languages));
const save_data = localStorage.getItem("Proggraming_languages");
console.log(save_data);