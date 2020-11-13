import React from 'react';
import Player from './player/index';
import useWindowSize from "../hooks/useWindowSize";
import logo from '../images/header-logo.svg';
import turbina from '../images/header-turbina.svg';

function Header() {
  const size = useWindowSize();
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);

  function handleButtonClick() {
    if (isButtonClicked) {
      setIsButtonClicked(false);
    } else {
      setIsButtonClicked(true);
    }
  }

  return (
    <header className="header">
      <a href="https://marshakbooks.ru/" className="header__logo-link" rel="noreferrer" target="_blank">
        <img className="header__logo" src={logo} alt="Маршак" />
      </a>
      <div className="header__links">
        {size.width < 615 &&
          <button
            className={`header__links-button button ${isButtonClicked ? "header__links-button_clicked" : "header__link" }`}
            onClick={handleButtonClick}>
              {!isButtonClicked ? "Стриминги" : ""}
          </button>
        }
        <ul className={`header__links-list ${!isButtonClicked ? "header__links-list_closed" : ""}`}>
          <li className="header__links-item">
            <a href="https://music.yandex.ru" className="header__link" rel="noreferrer" target="_blank">Яндекс.Музыка ↗</a>
          </li>
          <li className="header__links-item">
            <a href="https://www.spotify.com/" className="header__link" rel="noreferrer" target="_blank">Spotify ↗</a>
          </li>
          <li className="header__links-item">
            <a href="https://www.apple.com/apple-music/" className="header__link" rel="noreferrer" target="_blank">Apple Music ↗</a>
          </li>
          <li className="header__links-item">
            <a href="https://vk.com/vkmusic" className="header__link" rel="noreferrer" target="_blank">VK Music ↗</a>
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
