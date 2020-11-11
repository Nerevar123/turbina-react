import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import song_cover from "../images/player-cover.png";

function Player() {
  const size = useWindowSize();

  React.useEffect(() => {
    console.log(size.width);
  });

  const [isOpen, setIsOpen] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  function handleMenuClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  function handlePlayback() {
    isPlaying ? setIsPlaying(false) : setIsPlaying(true);
  }

  return (
    <>
      <div className="header__player player">
        <audio>
          <source src="song.mp3" type="audio/mp3" />
          <p>
            Your browser doesn't support HTML5 audio. Here is a{" "}
            <a href="song.mp3">link to the audio</a> instead.
          </p>
        </audio>
        {size.width > 768 && (
          <img
            className={`player__song-cover ${
              isOpen ? "player__song-cover_opened" : ""
            }`}
            src={song_cover}
            alt="обложка песни"
          ></img>
        )}
        <div
          className={`player__controls-container ${
            isOpen ? "player__controls-container_opened" : ""
          }`}
        >
          <div className="player__controls">
            <button
              className={`player__button player__play button ${
                isPlaying ? "player__play_active" : ""
              }`}
              aria-label="play pause"
              onClick={handlePlayback}
            />
            <div
              className={`player__song-info ${
                isOpen ? "player__song-info_opened" : ""
              }`}
            >
              <div className="player__song-container">
                <span className="player__song_type_curent player__song">
                  Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров{" "}
                </span>
                <span className="player__time">2:24</span>
              </div>
              <div className="player__timeline">
                <div className="player__progress" />
              </div>
            </div>
            <button
              className={`player__button player__button_type_video ${
                isOpen ? "player__button_type_video_opened" : ""
              }`}
            >
              {isOpen ? "Клип" : ""}
            </button>
            <button
              className={`player__button player__button_type_text ${
                isOpen ? "player__button_type_text_opened" : ""
              }`}
            >
              {isOpen ? "Текст песни" : ""}
            </button>
            <button
              className={`player__button player__menu button ${
                isOpen ? "player__menu_opened" : ""
              }`}
              aria-label="menu"
              onClick={handleMenuClick}
            />
          </div>
          {size.width <= 768 && (
            <div class="player__playlist-container">
              <img
                className={`player__song-cover ${
                  isOpen ? "player__song-cover_opened" : ""
                }`}
                src={song_cover}
                alt="обложка песни"
              ></img>
              <ul
                className={`player__song-list
      ${isOpen ? "player__song-list_opened" : ""}`}
              >
                <li className="player__song player__song_type_listed">
                  Релизы:
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
                <li className="player__song player__song_type_listed">
                  №6 Поезия — Мукулатура feat. Саша Петров
                </li>
              </ul>
            </div>
          )}
          {size.width > 768 && (
            <ul
              className={`player__song-list
      ${isOpen ? "player__song-list_opened" : ""}`}
            >
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
          )}
        </div>
      </div>
      
    </>
  );
}

export default Player;
