const Cover = document.querySelector(".album-art-image");
const AudioTitle = document.querySelector("div.song-title");
const AudioArt = document.querySelector("div.artist");
const progressbar = document.querySelector(".progress-bar");
const progress = document.querySelector("div.progress");
const TimeNow = document.querySelector("span.TimeNow");
const Timeduration = document.querySelector("span.Timeduration");
const volume = document.querySelector("input#volume");
const prev = document.querySelector("button.prev");
const next = document.querySelector("button.next");
const Play = document.querySelector("button.play-btn");
// the new ones 
const audio = document.createElement("audio");
const width = progressbar.clientWidth;  // it gives client width 
// console.log(width);

// we have to make array of object to data of sounds images.. 

let sounds=[
    {
        src:"media/quran1.mp3",
        Title:"Ramadaan",
        Art:"Alxusari",
        cover:"images/sh1.jpeg"
    },
     {
        src:"media/quran2.mp3",
        Title:"Mustafaa",
        Art:"Abubakarshadri",
        cover:"images/sh2.jpeg"
    },
   {
        src:"media/quran3.mp3",
        Title:"Ahmed",
        Art:"sh.khaalid ",
        cover:"images/sh3.jpeg"
    },
    {
        src:"media/quran4.mp3",
        Title:"Kaamil",
        Art:"Yussuf",
        cover:"images/sh4.jpeg"
    },
       {
        src:"media/quran5.mp3",
        Title:"Islam suphi",
        Art:"Yussuf",
        cover:"images/sh5.jpeg"
    },
];

// track 
let Isplaying = false;
let speed = 0;
let SoundIndex=0;

// functions 
const loudSound = (sound) => {
  audio.src = sound.src;        // works fine
  Cover.src = sound.cover;      // lowercase "cover"
  AudioTitle.textContent = sound.Title;
  AudioArt.textContent = sound.Art;
};
// call the function  one 
loudSound(sounds[SoundIndex]);
  // making funcation two sound player 
const soundplayer = (audio)=>{
    if(Isplaying === false){
         Isplaying=true;
        audio.play();
        Play.innerHTML=`<i class="bx bx-pause"></i>`
       
    }
    else{
        Isplaying=false;
   audio.pause();
     Play.innerHTML=`<i class="bx bx-play"></i>`
   
    }
}

// function two next 
const nexsound = ()=>{
    audio.pause();
    Isplaying=false;
         
            //   Play.innerHTML=`<i class="bx bx-pause"></i>`
    SoundIndex++
    if(SoundIndex > sounds.length -1 ){
        SoundIndex=0;
    }
    loudSound(sounds[SoundIndex]);
    Isplaying=true;
    audio.play();
Play.innerHTML=`<i class="bx bx-pause"></i>`
}


// preview 
const presound = ()=>{

    audio.pause();
    Isplaying=false;
    setTimeout(() => {   
        SoundIndex--
    if(SoundIndex < 0){
        SoundIndex = sounds.length - 1 ;
    }
    loudSound(sounds[SoundIndex]);
    Isplaying=true;
       audio.play();
    Play.innerHTML=`<i class="bx bx-pause"></i>`
      }, 200);
}


  

// Events 
const update_prog = ()=>{
    let  current_time = audio.currentTime;
    let  durattion_time = audio.duration;

// current time in minutes 
let current_time_m=Math.floor(current_time / 60);
let current_time_s=Math.floor(current_time % 60); // module 

// duration

let durattion_time_m= Math.floor(durattion_time / 60);
let duration_time_s= Math.floor(durattion_time % 60); // module 
if(current_time_m < 10){
    current_time_m=`0${current_time_m}:`
}
if(current_time_s < 10){
    current_time_s=`0${current_time_s}`
}
if( duration_time_s > 10){
    duration_time_s=`0:${duration_time_s}`;
}
if(durattion_time_m < 10){
durattion_time_m= `${durattion_time_m}`;
}
// updating progress 
TimeNow.textContent=`${current_time_m}${current_time_s}`;
Timeduration.textContent=`${durattion_time_m}${duration_time_s}`

// PERSETAGE of width 
let percentage = (current_time / durattion_time) * 100;
progress.style.width = `${percentage}%`;

}
const soundend =()=>{
        // Play.innerHTML=`<i class="bx bx-play"></i>`
        nexsound();
}


// change progrees 
badal_prog = (e) => {
    let duration = audio.duration;
    if (isNaN(duration)) return;

    const width = e.currentTarget.clientWidth;
    const clickX = e.offsetX;                 

    audio.currentTime = (clickX / width) * duration;
};

const change_volume = (e)=>{
const current_volume = e.target.value;
audio.volume = current_volume;
}









Play.addEventListener("click",()=>{
    soundplayer(audio);
   
}) 
next.addEventListener("click",()=>{
    nexsound();
})
prev.addEventListener("click",()=>{
    presound();
})

audio.addEventListener("timeupdate",()=>{
    update_prog();
})
audio.addEventListener("ended",()=>{
soundend()
})
progressbar.addEventListener("click", badal_prog);

volume.addEventListener("input",change_volume);

  