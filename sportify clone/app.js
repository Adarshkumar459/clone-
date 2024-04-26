// initilalize the varible 
let songIndex= 0;
let audioElement= new Audio('/songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprigressBar= document.getElementById('myprigressBar');
let gif=document.getElementById('gif');      

let songs =[
    {songName:"salame - Ishq", filePath:"/songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"salame - Ishq", filePath:"/songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"salame - Ishq", filePath:"/songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"salame - Ishq", filePath:"/songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"salame - Ishq", filePath:"/songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"salame - Ishq", filePath:"/songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"salame - Ishq", filePath:"/songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"salame - Ishq", filePath:"/songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"salame - Ishq", filePath:"/songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"salame - Ishq", filePath:"/songs/10.mp3",coverPath:"covers/10.jpg"},
]

// 
// handle play/pause click
masterplay.addEventListener('click',()=>{
 if(audioElement.pause||audioElement.currentTime<=0)
 {
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
 }
 else {
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0;
 }
})


// listen to event
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprigressBar.value=progress;
})