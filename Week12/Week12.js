// week 12 using append 


// step get create elements inside the html 
const main = document.querySelector("div.main");

// step two create elements 
const h1=document.createElement("h1");
const p1=document.createElement("p")
const p2=document.createElement("p")
const p3=document.createElement("p")
const p4=document.createElement("p")
// step three add text inside elements 

h1.textContent = "week 12 ";
p1.textContent = "this week i learn java events and how to use it 1";
p2.textContent = "this week i learn java events and how to use it 2";
p3.textContent = "this week i learn java events and how to use it 3"; 
p4.textContent = "this week i learn java events and how to use it 4"; 

// adding paragraphs inside the main class using method 
main.append(h1);
main.append(p3,p1)
main.append(p2)
main.prepend(p4);

// lesson two ): 




