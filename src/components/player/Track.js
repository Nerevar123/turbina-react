import React from 'react';

const Track = ({ track, onClick }) => {
  const { title = 'No title', author = 'No author'} = track;

  return (
    <li className="player__song player__song_type_listed" onClick={() => onClick(track)}>
      {title} — {author}
    </li>
  )
}

export default Track;
