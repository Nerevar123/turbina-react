const media = document.querySelector('audio');
const controls = document.querySelector('.player__controls');

const play = document.querySelector('.player__play');
const menu = document.querySelector('.player__menu');

const timerWrapper = document.querySelector('.player__timer');
const timer = document.querySelector('.player__timer span');
const timerBar = document.querySelector('.player__timer div');

media.removeAttribute('controls');
controls.style.visibility = 'visible';

function playPauseMedia() {
  if(media.paused) {
    media.play();
  } else {
    media.pause();
  }
}

function stopMedia() {
  media.pause();
  media.currentTime = 0;
}

play.addEventListener('click', playPauseMedia);
media.addEventListener('ended', stopMedia);
