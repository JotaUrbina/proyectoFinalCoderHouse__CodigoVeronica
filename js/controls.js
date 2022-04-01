const audio_18 = document.getElementById("audio_18");
const playPause_18 = document.getElementById("play_18");
const audio_otraVez = document.getElementById("audio_otraVez");
const playPause_otraVez = document.getElementById("play_otraVez");
const audio_derrumbar = document.getElementById("audio_derrumbar");
const playPause_derrumbar = document.getElementById("play_derrumbar");
const audio_estarBien = document.getElementById("audio_estarBien");
const playPause_estarBien = document.getElementById("play_estarBien");
const audio_latidos = document.getElementById("audio_latidos");
const playPause_latidos = document.getElementById("play_latidos");
const audio_pena = document.getElementById("audio_pena");
const playPause_pena = document.getElementById("play_pena");

document.addEventListener(
  "play",
  function (e) {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  },
  true
);

playPause_18.addEventListener("click", () => {
  if (audio_18.paused || audio_18.ended) {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
    audio_18.play();
  } else {
    audio_18.pause();
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  }
});

playPause_otraVez.addEventListener("click", () => {
  if (audio_otraVez.paused || audio_otraVez.ended) {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
    audio_otraVez.play();
  } else {
    audio_otraVez.pause();
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  }
});

playPause_derrumbar.addEventListener("click", () => {
  if (audio_derrumbar.paused || audio_derrumbar.ended) {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
    audio_derrumbar.play();
  } else {
    audio_derrumbar.pause();
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  }
});

playPause_estarBien.addEventListener("click", () => {
  if (audio_estarBien.paused || audio_estarBien.ended) {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
    audio_estarBien.play();
  } else {
    audio_estarBien.pause();
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  }
});

playPause_latidos.addEventListener("click", () => {
  if (audio_latidos.paused || audio_latidos.ended) {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
    audio_latidos.play();
  } else {
    audio_latidos.pause();
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  }
});

playPause_pena.addEventListener("click", () => {
  if (audio_pena.paused || audio_pena.ended) {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
    audio_pena.play();
  } else {
    audio_pena.pause();
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_18.addEventListener("pause", () => {
  if (audio_pena.play && audio_18.paused) {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_latidos.play && audio_18.paused) {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_estarBien.play && audio_18.paused) {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_derrumbar.play && audio_18.paused) {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_otraVez.addEventListener("pause", () => {
  if (audio_pena.play && audio_otraVez.paused) {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_latidos.play && audio_otraVez.paused) {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_estarBien.play && audio_otraVez.paused) {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_derrumbar.play && audio_otraVez.paused) {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_derrumbar.addEventListener("pause", () => {
  if (audio_pena.play && audio_derrumbar.paused) {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_latidos.play && audio_derrumbar.paused) {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_estarBien.play && audio_derrumbar.paused) {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_otraVez.play && audio_derrumbar.paused) {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_estarBien.addEventListener("pause", () => {
  if (audio_pena.play && audio_estarBien.paused) {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_latidos.play && audio_estarBien.paused) {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_derrumbar.play && audio_estarBien.paused) {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_otraVez.play && audio_estarBien.paused) {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_latidos.addEventListener("pause", () => {
  if (audio_pena.play && audio_latidos.paused) {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_estarBien.play && audio_latidos.paused) {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_derrumbar.play && audio_latidos.paused) {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_otraVez.play && audio_latidos.paused) {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_pena.addEventListener("pause", () => {
  if (audio_latidos.play && audio_pena.paused) {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_estarBien.play && audio_pena.paused) {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_derrumbar.play && audio_pena.paused) {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_otraVez.play && audio_pena.paused) {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  }
});
