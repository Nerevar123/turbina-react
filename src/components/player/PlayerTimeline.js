import React from 'react';

const PlayerTimeline = ({ duration, currentTime, onClick }) => {
  const clickHandler = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width * 100;
    const clickedTIme = duration / 100 * percent;
    onClick(clickedTIme);
  }

  return (
    <div className="player__timeline" onClick={clickHandler}>
      <div
        className="player__progress"
        style={{
          width: `${currentTime / duration * 100}%`
        }}
      />
    </div>
  )
}

export default PlayerTimeline;
