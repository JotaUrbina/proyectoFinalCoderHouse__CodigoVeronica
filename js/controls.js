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
    audio_18.play();
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  } else {
    audio_18.pause();
  }
});

playPause_otraVez.addEventListener("click", () => {
  if (audio_otraVez.paused || audio_otraVez.ended) {
    audio_otraVez.play();
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  } else {
    audio_otraVez.pause();
  }
});

playPause_derrumbar.addEventListener("click", () => {
  if (audio_derrumbar.paused || audio_derrumbar.ended) {
    audio_derrumbar.play();
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  } else {
    audio_derrumbar.pause();
  }
});

playPause_estarBien.addEventListener("click", () => {
  if (audio_estarBien.paused || audio_estarBien.ended) {
    audio_estarBien.play();
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  } else {
    audio_estarBien.pause();
  }
});

playPause_latidos.addEventListener("click", () => {
  if (audio_latidos.paused || audio_latidos.ended) {
    audio_latidos.play();
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  } else {
    audio_latidos.pause();
  }
});

playPause_pena.addEventListener("click", () => {
  if (audio_pena.paused || audio_pena.ended) {
    audio_pena.play();
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  } else {
    audio_pena.pause();
  }
});

audio_18.addEventListener("pause", () => {
  if (audio_otraVez.play) {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_derrumbar.play) {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_estarBien.play) {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_latidos.play) {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_18.querySelector(".pause-btn").classList.toggle("hide");
    playPause_18.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_otraVez.addEventListener("pause", () => {
  if (audio_18.play) {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_derrumbar.play) {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_estarBien.play) {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_latidos.play) {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_otraVez.querySelector(".pause-btn").classList.toggle("hide");
    playPause_otraVez.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_derrumbar.addEventListener("pause", () => {
  if (audio_18.play) {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_otraVez.play) {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_estarBien.play) {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_latidos.play) {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_derrumbar.querySelector(".pause-btn").classList.toggle("hide");
    playPause_derrumbar.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_estarBien.addEventListener("pause", () => {
  if (audio_18.play) {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_otraVez.play) {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_derrumbar.play) {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_latidos.play) {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_estarBien.querySelector(".pause-btn").classList.toggle("hide");
    playPause_estarBien.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_latidos.addEventListener("pause", () => {
  if (audio_18.play) {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_otraVez.play) {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_derrumbar.play) {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_estarBien.play) {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_latidos.querySelector(".pause-btn").classList.toggle("hide");
    playPause_latidos.querySelector(".play-btn").classList.toggle("hide");
  }
});

audio_pena.addEventListener("pause", () => {
  if (audio_18.play) {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_otraVez.play) {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_derrumbar.play) {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  } else if (audio_estarBien.play) {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  } else {
    playPause_pena.querySelector(".pause-btn").classList.toggle("hide");
    playPause_pena.querySelector(".play-btn").classList.toggle("hide");
  }
});
