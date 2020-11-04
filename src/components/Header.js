import React from 'react';
import Player from './Player';
import logo from '../images/header-logo.svg';
import turbina from '../images/header-turbina.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Маршак" />
      <div className="header__links">
        <button className="header__link header__links-button button">Стриминги</button>
        <ul className="header__links-list">
          <li className="header__links-item">
            <a href="https://music.yandex.ru" className="header__link">Яндекс.Музыка ↗</a>
          </li>
          <li className="header__links-item">
            <a href="https://www.spotify.com/" className="header__link">Spotify ↗</a>
          </li>
          <li className="header__links-item">
            <a href="https://www.apple.com/apple-music/" className="header__link">Apple Music ↗</a>
          </li>
          <li className="header__links-item">
            <a href="https://vk.com/vkmusic" className="header__link">VK Music ↗</a>
          </li>
        </ul>
      </div>
      <h1 className="header__heading">
        <img className="header__turbina-logo" src={turbina} alt="Турбина" />
      </h1>
      <Player />
    </header>
  )
}

export default Header;
