import React from "react";
import Track from "./Track";
import PlayerTimeline from "./PlayerTimeline";
import useWindowSize from "../../hooks/useWindowSize";
import song_cover from "../../images/player-cover.png";
import playlist from "./playlist";
import throttling from "../../utils/throttling";
import ctm from "../../utils/convertToMinutes";

const Player = () => {
  const size = useWindowSize();
  const [currentTrack, setCurrentTrack] = React.useState(playlist[0]);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const myPlayer = React.useRef(null);

  const onTimeUpdate = throttling((e) => {
    setCurrentTime(e.target.currentTime);
  }, 1000);

  const onPlay = (e) => {
    setDuration(e.target.duration);
  };

  function handleMenuClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  function handlePlayback() {
    if (isPlaying) {
      myPlayer.current.pause();
      setIsPlaying(false);
    } else {
      myPlayer.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <>
      <div className="header__player player">
        <audio
          src={currentTrack.audio}
          type="audio/mp3"
          className="player__audio"
          ref={myPlayer}
          onTimeUpdate={onTimeUpdate}
          onPlay={onPlay}
          onLoadedData={(_) => setDuration(myPlayer.current.duration)}
        >
          <p>Your browser doesn't support HTML5 audio.</p>
        </audio>
        {size.width > 768 && (
          <>
            
              <img
                className={`player__song-cover ${
                  isOpen ? "player__song-cover_opened" : ""
                }`}
                src={song_cover}
                alt="обложка песни"
              />
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
                        {currentTrack.title} — {currentTrack.author}
                      </span>
                      <span className="player__time">
                        {ctm(duration - currentTime)}
                      </span>
                    </div>
                    <PlayerTimeline
                      currentTime={currentTime}
                      duration={duration}
                      onClick={(time) => {
                        myPlayer.current.currentTime = time;
                      }}
                    />
                  </div>
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
                <ul
                  className={`player__song-list
                ${isOpen ? "player__song-list_opened" : ""}`}
                >
                  {playlist.map((track) => (
                    <Track
                      track={track}
                      key={track.id}
                      onClick={(track) => {
                        setCurrentTrack(track);
                        setIsPlaying(false);
                      }}
                    />
                  ))}
                </ul>
              </div>
            
          </>
        )}
        {size.width <= 768 && size.width > 615 && (
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
                <div
                  className={`player__song-container ${
                    isOpen ? "player__song-container_opened" : ""
                  }`}
                >
                  <span className="player__song player__song_type_curent">
                    {currentTrack.title} — {currentTrack.author}
                  </span>
                  <span className="player__time">
                    {ctm(duration - currentTime)}
                  </span>
                </div>
                <PlayerTimeline
                  currentTime={currentTime}
                  duration={duration}
                  onClick={(time) => {
                    myPlayer.current.currentTime = time;
                  }}
                />
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
            <div
              className={`player__playlist-container ${
                isOpen ? "player__playlist-container_opened" : ""
              }`}
            >
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
                {playlist.map((track) => (
                  <Track
                    track={track}
                    key={track.id}
                    onClick={(track) => {
                      setCurrentTrack(track);
                      setIsPlaying(false);
                    }}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
        {size.width <= 615 && (
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
                  <span className="player__song">
                    {currentTrack.title} — {currentTrack.author}
                  </span>
                  <span className="player__time">
                    {ctm(duration - currentTime)}
                  </span>
                </div>
                <PlayerTimeline
                  currentTime={currentTime}
                  duration={duration}
                  onClick={(time) => {
                    myPlayer.current.currentTime = time;
                  }}
                />
              </div>
              <button
                className={`player__button player__menu button ${
                  isOpen ? "player__menu_opened" : ""
                }`}
                aria-label="menu"
                onClick={handleMenuClick}
              />
            </div>
            <img
              className={`player__song-cover ${
                isOpen ? "player__song-cover_opened" : ""
              }`}
              src={song_cover}
              alt="обложка песни"
            ></img>
            <div
              className={`player__button-container ${
                isOpen ? "player__button-container_opened" : ""
              }`}
            >
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
            </div>
            <div className="player__playlist-container">
              <ul
                className={`player__song-list
                  ${isOpen ? "player__song-list_opened" : ""}`}
              >
                {playlist.map((track) => (
                  <Track
                    track={track}
                    key={track.id}
                    onClick={(track) => {
                      setCurrentTrack(track);
                      setIsPlaying(false);
                    }}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Player;
