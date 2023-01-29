const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//creating an array of object to store the data of song's name, title and artist
const songs = [
  {
    name: "song1",
    title: "Ajeeb Dastan he ye",
    artist: "Lata mangeshkar",
  },
  {
    name: "song2",
    title: "Khairiyat",
    artist: "Arijit Singh",
  },
  {
    name: "song3",
    title: "Shape of you",
    artist: "Ed sheeran",
  },
];

// to play the song ie image rotating, play button replaced with pause
let isplaying = false;
const playMusic = () => {
  isplaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

//to pause the song ie stop the rotating image, convert pause button into play
const pauseMusic = () => {
  isplaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  if (isplaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

//changing the song data

loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3";
  img.src = "image/" + songs.name + ".jpg";
};

songIndex = 0;
//loadSong(songs[1]);
//generalising the change in the index of the array "songs"

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic(); //to play the song as soon as the next button is hit
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic(); //to play the song as soon as the next button is hit
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);