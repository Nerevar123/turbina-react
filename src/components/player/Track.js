import React from 'react';
import cn from 'classnames';

const Track = ({ track, currentTrack, onClick }) => {
  const { title = 'No title', firstAuthor = 'No author', secondAuthor = 'No author' } = track;

  return (
    <li className={cn("player__song", "player__song_type_listed", "font", {"player__song_type_current": track.id === currentTrack.id})} onClick={() => onClick(track)}>
      {title} — {firstAuthor}
      <span className="player__song-feat"> feat. </span>
      {secondAuthor}
    </li>
  )
}

export default Track;
