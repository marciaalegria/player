const songList= [
    {
        title: "No Rain",
        file: "Blind Melon - No Rain.mp3",
        cover: "blind_melon.png"
    },
    {
        title: "Coffe and TV",
        file: "Blur - Coffee And TV (Official Music Video).mp3",
        cover: "blur_coffe&tv.png"
    },
    {
        title: "Peace Train",
        file: "Peace Train.mp3",
        cover: "cat_stevens.png"
    },
    {
        title: "More than Words",
        file: "Extreme - More Than Words (Official Music Video).mp3",
        cover: "more_than_words.png" 
    },
    {
        title: "Tonight",
        file: "New Kids On The Block - Tonight.mp3",
        cover: "newkids1.png"
    },
]

//cancion actual
let actualSong= null
//captura elementos dom
 const songsul = document.getElementById("s");
 const audio = document.getElementById("audio");
 const cover = document.getElementById("cover");
 const title = document.getElementById("title");
 const play = document.getElementById("play");
 const prev = document.getElementById("back");
 const next = document.getElementById("next");
 const progress = document.getElementById("progress")
 const progressContainer = document.getElementById("progressContainer")
 
 progressContainer.addEventListener("click", setProgress)

 // 
  audio.addEventListener("timeupdate", updateProgress)

// escuchar click en el controles
play.addEventListener("click", ()=> {
    
    if(audio.paused){
        playSong()
    } else {
        pauseSong()
    }
})
//funcion para cargar canciones y mostrar listado
next.addEventListener("click", ()=> nextSong())
prev.addEventListener("click", ()=> prevSong())

function loadSongs() {
    songList.forEach((song, index) => {
        console.log(songList);
        const li = document.createElement("li")
        const link = document.createElement("a")
        link.textContent = song.title
        link.href = "#"
        //escucha clicks
        link.addEventListener("click", () => loadSong(index))
        li.appendChild(link)
        songsul.appendChild(li)
        link.style.listStyle= "none"
        link.style.textDecorationLine="none"
        link.style.color ="white"
    })
}

//cargar canción seleccionada
function loadSong(songIndex) {
    if(songIndex != actualSong){
        changeActiveClass(actualSong, songIndex)      
        actualSong = songIndex
        audio.src = "./music/" + songList[songIndex].file
        playSong()
        changeCover(songIndex)  
    }
}
// barra progreso
function updateProgress(event){
    //total y actual 
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width= percent + "%"
}
function setProgress(event){
    const totalWidth = this.offsetWidth
    const progressWidht= event.offsetX
    const current = (progressWidht / totalWidth) * audio.duration
    audio.currentTime = current
}
function updateControls() {
    if(audio.paused){
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

function playSong(){
    if(actualSong != null){
     audio.play()
    updateControls()   
    }
   
}

function pauseSong() {
    if (actualSong != null) {
        audio.pause()
        updateControls()
        
    }
}
function changeActiveClass(lastIndex, newIndex){
    const links = document.querySelectorAll("a")
    if(lastIndex != null){
        links[lastIndex].classList.remove("activo")

    }
    links[newIndex].classList.add("activo")
}   

function changeCover(songIndex){
    cover.src = "./img/" + songList[songIndex].cover
}
function changeSongTitle(songIndex){
    title.innerText = songList[songIndex].title
}

//anterior cancion
function prevSong() {
    if (actualSong > 0) {

        loadSong(actualSong -1)
        
    } else {
        loadSong(songList.length -1)
    }
    }

//siguiente cancion
function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong + 1)
        
    }else{
        loadSong(0)
    }
    }
//siguiente canción al terminar la actual
audio.addEventListener("ended", ()=> nextSong())

loadSongs()
