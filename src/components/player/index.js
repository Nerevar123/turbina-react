import React from "react";
import cn from 'classnames';
import Track from "./Track";
import PlayerTimeline from "./PlayerTimeline";
import useWindowSize from "../../hooks/useWindowSize";
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
  const [isTextOpen, setIsTextOpen] = React.useState(false);
  const myPlayer = React.useRef(null);

  const onTimeUpdate = throttling((e) => {
    setCurrentTime(e.target.currentTime);
  }, 1000);

  const onPlay = (e) => {
    setDuration(e.target.duration);
  };

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  function handleTextClick() {
    setIsTextOpen(!isTextOpen);
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
            className={cn("player__song-cover", {"player__song-cover_opened": isOpen})}
            src={currentTrack.cover}
            alt="обложка песни"
          />
          <div className={cn("player__controls-container", {"player__controls-container_opened": isOpen})}>
            <div className="player__controls">
              <button
                className={cn("player__button", "button", "player__play", {"player__play_active": isPlaying})}
                aria-label="play pause"
                onClick={handlePlayback}
              />
              <div className={cn("player__song-info", {"player__song-info_opened": isOpen})}>
                <div className="player__song-container">
                  <span className= "player__song font player__song_type_active">
                    {currentTrack.title} — {currentTrack.firstAuthor} <span className="player__song-feat">feat. </span>{currentTrack.secondAuthor}
                  </span>
                  <span className="player__time font">
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
                className={cn("player__button", "button", "font", "player__button_type_text", {"player__button_type_text_opened": isOpen})}
                onClick={handleTextClick}
              >
                {isOpen ? "Текст песни" : ""}
              </button>
              <button
                className={cn("player__button", "button", "player__menu", {"player__menu_opened": isOpen})}
                aria-label="menu"
                onClick={handleMenuClick}
              />
            </div>
            <ul className={cn("player__song-list", {"player__song-list_opened": isOpen})}>
              {!isTextOpen && (
                <>
                  {playlist.map((track) => (
                    <Track
                      track={track}
                      key={track.id}
                      currentTrack={currentTrack}
                      onClick={(track) => {
                        setCurrentTrack(track);
                        setIsPlaying(false);
                      }}
                    />
                  ))}
                </>
              )}
              {isTextOpen && (
                <>
                  <p className="player__text-heading font">Текст песни:</p>
                  <p className="player__text font">{currentTrack.text}</p>
                </>
              )}
            </ul>
          </div>
        </>
      )}
      {size.width <= 768 && size.width > 615 && (
          <div className={cn("player__controls-container", {"player__controls-container_opened": isOpen})}>
          <div className="player__controls">
            <button
              className={cn("player__button", "button", "player__play", {"player__play_active": isPlaying})}
              aria-label="play pause"
              onClick={handlePlayback}
            />
              <div className={cn("player__song-info", {"player__song-info_opened": isOpen})}>
              <div className={cn("player__song-container", {"player__song-container_opened": isOpen})}>
                <span className= "player__song font player__song_type_active">
                  {currentTrack.title} — {currentTrack.firstAuthor} <span className="player__song-feat">feat. </span>{currentTrack.secondAuthor}
                </span>
                <span className="player__time font">
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
            <button className={cn("player__button", "button", "font", "player__button_type_video", {"player__button_type_video_opened": isOpen})}>
              {isOpen ? "Клип" : ""}
            </button>
            <button
              className={cn("player__button", "button", "font", "player__button_type_text", {"player__button_type_text_opened": isOpen})}
              onClick={handleTextClick}
            >
              {isOpen ? "Текст песни" : ""}
            </button>
            <button
              className={cn("player__button", "button", "player__menu", {"player__menu_opened": isOpen})}
              aria-label="menu"
              onClick={handleMenuClick}
            />
          </div>
          <div className={cn("player__playlist-container", {"player__playlist-container_opened": isOpen})}>
            <img
              className={cn("player__song-cover", {"player__song-cover_opened": isOpen})}
              src={currentTrack.cover}
              alt="обложка песни"
            ></img>
            <ul className={cn("player__song-list", {"player__song-list_opened": isOpen})}>
              {!isTextOpen && (
                <>
                  {playlist.map((track) => (
                    <Track
                      track={track}
                      key={track.id}
                      currentTrack={currentTrack}
                      onClick={(track) => {
                        setCurrentTrack(track);
                        setIsPlaying(false);
                      }}
                    />
                  ))}
                </>
              )}
              {isTextOpen && (
                <>
                  <p className="player__text-heading font">Текст песни:</p>
                  <p className="player__text font">{currentTrack.text}</p>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
      {size.width <= 615 && (
          <div className={cn("player__controls-container", {"player__controls-container_opened": isOpen})}>
          <div className="player__controls">
            <button
              className={cn("player__button", "button", "player__play", {"player__play_active": isPlaying})}
              aria-label="play pause"
              onClick={handlePlayback}
            />
              <div className={cn("player__song-info", {"player__song-info_opened": isOpen})}>
              <div className="player__song-container">
              <span className= "player__song font player__song_type_active">
                {currentTrack.title} — {currentTrack.firstAuthor} <span className="player__song-feat">feat. </span>{currentTrack.secondAuthor}
              </span>
                <span className="player__time font">
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
              className={cn("player__button", "button", "player__menu", {"player__menu_opened": isOpen})}
              aria-label="menu"
              onClick={handleMenuClick}
            />
          </div>
          <img
            className={cn("player__song-cover", {"player__song-cover_opened": isOpen})}
            src={currentTrack.cover}
            alt="обложка песни"
          ></img>
          <div className={cn("player__button-container", {"player__button-container_opened": isOpen})}>
            <button className={cn("player__button", "button", "font", "player__button_type_video", {"player__button_type_video_opened": isOpen})}>
              {isOpen ? "Клип" : ""}
            </button>
            <button
              className={cn("player__button", "button", "font", "player__button_type_text", {"player__button_type_text_opened": isOpen})}
              onClick={handleTextClick}
            >
              {isOpen ? "Текст песни" : ""}
            </button>
          </div>
          <div className="player__playlist-container">
            <ul className={cn("player__song-list", {"player__song-list_opened": isOpen})}>
              {!isTextOpen && (
                <>
                  {playlist.map((track) => (
                    <Track
                      track={track}
                      key={track.id}
                      currentTrack={currentTrack}
                      onClick={(track) => {
                        setCurrentTrack(track);
                        setIsPlaying(false);
                      }}
                    />
                  ))}
                </>
              )}
              {isTextOpen && (
                <>
                  <p className="player__text-heading font">Текст песни:</p>
                  <p className="player__text font">{currentTrack.text}</p>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
