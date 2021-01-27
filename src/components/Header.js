import React from 'react';
import cn from 'classnames';
import Player from './player/index';
import useWindowSize from "../hooks/useWindowSize";
import logo from '../images/header-logo.svg';
import turbina from '../images/header-turbina.svg';

function Header() {
  const size = useWindowSize();
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);

  function handleButtonClick() {
    setIsButtonClicked(!isButtonClicked);
  }

  return (
    <header className="header">
      <a href="https://marshakbooks.ru/" className="header__logo-link" rel="noreferrer" target="_blank">
        <img className="header__logo" src={logo} alt="Маршак" />
      </a>
      <div className="header__links">
        {size.width < 615 &&
          <button
            className={cn("header__links-button", "button", "font", {"header__links-button_clicked": isButtonClicked}, {"header__link": !isButtonClicked})}
            onClick={handleButtonClick}>
              {!isButtonClicked ? "Стриминги" : ""}
          </button>
        }
        <ul className={cn("header__links-list", {"header__links-list_closed": !isButtonClicked})}>
          <li className="header__links-item">
            <a href="https://music.yandex.ru" className="header__link font" rel="noreferrer" target="_blank">Яндекс.Музыка ↗</a>
          </li>
          <li className="header__links-item">
            <a href="https://www.spotify.com/" className="header__link font" rel="noreferrer" target="_blank">Spotify ↗</a>
          </li>
          <li className="header__links-item">
            <a href="https://www.apple.com/apple-music/" className="header__link font" rel="noreferrer" target="_blank">Apple Music ↗</a>
          </li>
          <li className="header__links-item">
            <a href="https://vk.com/vkmusic" className="header__link font" rel="noreferrer" target="_blank">VK Music ↗</a>
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
