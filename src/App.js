import './App.css';
import title from './header-title.png';
import ReactAudioPlayer from 'react-audio-player';
import song from './song.mp3'

function App() {
  return (
    <>
<header className="header">
        <img className="header__logo" src="./images/header__logo.svg" alt="Турбина" />
        <button className="header__button">&nbsp;&nbsp;&nbsp;Стриминги &nbsp;&#8599;&nbsp;&nbsp;&nbsp;</button>
    </header><span></span>
    <h1 className="page__heading"><img className="page__logo" src={title} /></h1>
    <section>
    <ReactAudioPlayer
    className="player"
  src={song}
  autoPlay
  controls
/>
    </section>
    </>
  )
}

export default App;
