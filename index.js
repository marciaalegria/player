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
//captura elementos dom
 const songsul = document.getElementById("s");
 const audio = document.getElementById("audio");
 const cover = document.getElementById("cover");
 const title = document.getElementById("title")

//funcion para cargar canciones y mostrar listado

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

    })
}

//cargar canción seleccionada
function loadSong(songIndex) {
    console.log(songIndex);
    audio.src = "./music/" + songList[songIndex].file
    audio.play()
    changeCover(songIndex)
    changeSongTitle(songIndex)
}
function changeCover(songIndex){
    cover.src = "./img/" + songList[songIndex].cover

}
function changeSongTitle(songIndex){
    title.innerText = songList[songIndex].title
}
loadSongs()
