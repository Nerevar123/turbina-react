import React from 'react';

const Track = ({ track, currentTrack, onClick }) => {
  const { title = 'No title', firstAuthor = 'No author', secondAuthor = 'No author' } = track;

  return (
    <li className={`player__song player__song_type_listed ${track.id === currentTrack.id ? 'player__song_type_current' : ''}`} onClick={() => onClick(track)}>
      {title} — {firstAuthor}
      <span className="player__song-feat"> feat. </span>
      {secondAuthor}
    </li>
  )
}

export default Track;
