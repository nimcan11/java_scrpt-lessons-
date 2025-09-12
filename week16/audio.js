let btn = document.querySelector("button");
let audio = document.querySelector("audio");
let btn2=document.querySelector("button.pouse");
// let count = 0;
// let volume =0;
// let update =0;

// btn.addEventListener("click",()=>{
//     audio.play();
// })
// btn2.addEventListener("click",()=>{
//     audio.pause()
// })

// // events  in video and audio 
// // playing 
//  audio.addEventListener("playing",()=>{
//     console.log(`time is : ${count++}.`)
//  })

//  // volume hange 
//  audio.addEventListener("volumechange",()=>{
// console.log(`volume is : ${volume++}`)
//  })
//  // time upddate event  

//  // event enede 
//  audio.addEventListener("ended",()=>{
//     console.log("the video is ended")
//  })

 // method properties 

  audio.addEventListener("timeupdate",()=>{
// console.log(audio.duration) // gives the time of auio per secund 
// console.log(audio.currentTime);   // give the current time 
// console.log(audio.playbackRate);  // gives rate  play 
console.log(audio.volume);
 })
 