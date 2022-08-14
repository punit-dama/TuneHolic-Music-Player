console.log("Welcome to TuneHolic");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("song"));

let songs = [
  {
    songName: "Kabira",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpeg",
  },
  {
    songName: "Phir Kabhi",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpeg",
  },
  {
    songName: "Jaan Nisaar",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpeg",
  },
  {
    songName: "Jaan Ban Gaye",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpeg",
  },
  {
    songName: "Dhaaga",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpeg",
  },
  {
    songName: "Sajna",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpeg",
  },
  {
    songName: "Agar Tum Sath Ho",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpeg",
  },
  {
    songName: "Man Bharya 2.0",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpeg",
  },
  {
    songName: "Kho Gaye Hum Kaha",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpeg",
  },
  {
    songName: "Love Me Like You Do",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpeg",
  },
  {
    songName: "Can u Kiss Me Forever?",
    filePath: "songs/11.mp3",
    coverPath: "covers/11.jpeg",
  },
  {
    songName: "Illahi",
    filePath: "songs/12.mp3",
    coverPath: "covers/12.jpeg",
  },
  {
    songName: "Raataan Lambiyaan",
    filePath: "songs/13.mp3",
    coverPath: "covers/13.jpeg",
  },
  {
    songName: "Mashup",
    filePath: "songs/14.mp3",
    coverPath: "covers/14.jpeg",
  },
  {
    songName: "Teri Mitti",
    filePath: "songs/15.mp3",
    coverPath: "covers/15.jpeg",
  },
  {
    songName: "Ban Gayi Zindagi",
    filePath: "songs/16.mp3",
    coverPath: "covers/16.jpeg",
  },
  {
    songName: "Gori Radha Ne Kalo Kaan ",
    filePath: "songs/17.mp3",
    coverPath: "covers/17.jpeg",
  },
  {
    songName: "Udd Gaye",
    filePath: "songs/18.mp3",
    coverPath: "covers/18.jpeg",
  },
  {
    songName: "Mishri",
    filePath: "songs/19.mp3",
    coverPath: "covers/19.jpeg",
  },
  {
    songName: "Baarishein",
    filePath: "songs/20.mp3",
    coverPath: "covers/20.jpeg",
  },
  {
    songName: "Waqt Ki Baatein",
    filePath: "songs/21.mp3",
    coverPath: "covers/21.jpeg",
  },
  {
    songName: "Saazish",
    filePath: "songs/22.mp3",
    coverPath: "covers/22.jpeg",
  },
  {
    songName: "Main Tumhara",
    filePath: "songs/23.mp3",
    coverPath: "covers/23.jpeg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playSong")).forEach((element) => {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  });
};

Array.from(document.getElementsByClassName("playSong")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    // e.target.classList.remove("fa-play-circle");
    // // e.target.classList.add("fa-pause-circle");
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });
});


document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 22) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
