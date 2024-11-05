import './App.css';
import logo from './assets/discord-logo-white.png';
import background from './assets/discord-background.png';
import menuIcon from './assets/menu-icon.png';

function App() {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
      <header className="header">
        <img src={logo} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>
      <div className="hero-content">
        <h1 className="hero-heading">IMAGINE A PLACE...</h1>
        <p className="hero-text">
         ...where you can belong to a school club, a gaming group, or a 
         worldwide art community. Where just you and a handful of friends can spend time together.
         A place that makes it easy to talk everyday and hang out more often.
        </p>
        <div className="cta-buttons">
          <button className="download-button">Download for Windows</button>
          <button className="open-discord-button">Open Discord in your browser</button>
        </div>
      </div>
    </div>
  );
}

export default App;
