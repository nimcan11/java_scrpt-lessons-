// create an object 
const proggraming_languages = [
    {Name:"Java script",type:"High level language",Role:"Web development"},
        {Name:"python",type:"High level language",Role:"Ai"},
          {Name:"C++",type:"High level language",Role:"desktop"},
];
localStorage.setItem("Proggraming_languages",JSON.stringify(proggraming_languages));
const save_data = localStorage.getItem("Proggraming_languages");
console.log(save_data);

// example two setting and getting local storage 
const Fatima_subjects = [
    {Science:"Biology",prep:true,textbook:true,prepare:false,year:2026},
    {Science:"physics",prep:false,textbook:false,prepare:false,year:2026},
    {Science:"maths",prep:true,textbook:true,prepare:false,year:2026},
    {Science:"Biology",prep:false,textbook:true,prepare:false,year:2026}
];
console.log(Fatima_subjects[2].prepare); // false 

// storing local storage and storing as a string 
localStorage.setItem("Student",JSON.stringify(Fatima_subjects));
const keen_xogta = localStorage.getItem("Student")
console.log(keen_xogta);

// back to object 

const ku_celi_object = JSON.parse(keen_xogta);
console.log(ku_celi_object[1].Science);


