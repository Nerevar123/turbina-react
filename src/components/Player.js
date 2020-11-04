import React from 'react';

function Player() {
  return (
  <div className="header__player player">
    <audio>
      <source src="song.mp3" type="audio/mp3" />
      <p>Your browser doesn't support HTML5 audio. Here is a <a href="song.mp3">link to the audio</a> instead.</p>
    </audio>
    <div className="player__controls">
      <button className="player__button player__play button" aria-label="play pause"></button>
      <span className="player__song">Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров</span>
      <span className="player__time">2:24</span>
      <button className="player__button player__menu button" aria-label="menu"></button>
    </div>
    <div className="player__timeline">
      <div className="player__progress"></div>
    </div>
  </div>
  )
}

export default Player;
