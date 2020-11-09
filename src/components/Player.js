import React from "react";

function Player() {

  const [isOpen, setIsOpen] = React.useState(false);
  function handleMenuClick() {
    (isOpen) ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="header__player player">
      <audio>
        <source src="song.mp3" type="audio/mp3" />
        <p>
          Your browser doesn't support HTML5 audio. Here is a{" "}
          <a href="song.mp3">link to the audio</a> instead.
        </p>
      </audio>
      <div className="player__controls">
        <button
          className="player__button player__play button"
          aria-label="play pause"
        />
        <span className="player__song_type_curent player__song">
          Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров{" "}
        </span>
        <span className="player__time">2:24</span>
        <button
          className={`player__button player__menu button ${isOpen ? 'player__menu_opened':''}`}
          aria-label="menu"
          onClick = {handleMenuClick}
        />
      </div>
      <div className="player__timeline">
        <div className="player__progress" />
      </div>
      <ul className={`player__song-list
      ${isOpen ? 'player__song-list_opened' : ''}`}>
        <li className="player__song player__song_type_listed">Релизы:</li>
        <li className="player__song player__song_type_listed">
          №6 Поезия — Мукулатура feat. Саша Петров
        </li>
        <li className="player__song player__song_type_listed">
          №6 Поезия — Мукулатура feat. Саша Петров
        </li>
        <li className="player__song player__song_type_listed">
          №6 Поезия — Мукулатура feat. Саша Петров
        </li>
        <li className="player__song player__song_type_listed">
          №6 Поезия — Мукулатура feat. Саша Петров
        </li>
      </ul>
    </div>
  );
}


export default Player;
