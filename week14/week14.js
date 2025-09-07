let open_window;

let btn_alert = document.querySelectorAll(".btn");

btn_alert.forEach((button) => {
  // Alert button
  if (button.classList.contains("btn-alert")) {
    button.addEventListener("click", () => {
      alert("you clicked alert button");
    });
  }

  // Confirm button
  else if (button.classList.contains("btn-danger")) {
    button.addEventListener("click", () => {
      let delete_btn = confirm("you wanna delete your account?");
      if (delete_btn) {
        console.log("your account is deleted");
      } else {
        console.log("your account is not deleted..");
      }
    });
  }

  // Prompt button
  else if (button.classList.contains("btn-primary")) {
    button.addEventListener("click", () => {
      let name = prompt("Enter your name:");
      let email = prompt("Enter your email:");
      console.log(name, email);
    });
  }

  // Open button
  else if (button.classList.contains("btn-success")) {
    button.addEventListener("click", () => {
      open_window = window.open(
        "https://github.com/nimcan11",
        "_blank",
        "width=400,height=300"
      );
    });
  }

  // Close button
  else if (button.classList.contains("btn-close")) {
    button.addEventListener("click", () => {
      if (open_window && !open_window.closed) {
        open_window.close();
      } else {
        alert("No window is open to close!");
      }
    });
  }
});

// using setTimeOut with example 
// let Timer=setTimeout(()=>{
// let hubi = confirm("acoounka ma rabtaa inaad iska xidhi");
// if(hubi === true){
//     window.close();
// }else if (hubi === false){
//    alert("mahadasanid")
// }
// console.log("6 sikin kadib")
// },5000);


// clearTimeout(Timer);

// let count = 0;
// let interval_time = setInterval(()=>{
 
//     if(count == 10){
//            clearInterval(interval_time);
//     }
//        console.log(`waxaad mareysaa:${count++}`)
// },2000)

// scroll to 

let scroll=()=>{
    scrollTo(0,100)
};
scroll()

console.log(scrollX)
console.log(scrollY)

