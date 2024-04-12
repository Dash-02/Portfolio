import './Header.css';
import ImgLogo from '../assets/logo/LogoDarlix.svg';
import ImgSun from '../assets/logo/sun.svg';
import ImgMoon from '../assets/logo/moon.svg';

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img className='logo-img' src={ImgLogo} alt="logo" />
        <div className='logo-text'>
          <a href="Home">Darlix</a>
        </div>
      </div>
      <div className='line'></div>
      <nav>
        <a href="Home">Home</a>
        <a href="AboutMe">About me</a>
        <a href="Works">Works</a>
        <a href="Contacts">Contacts</a>
      </nav>
      <div className='themes'>
        <button>
          <img src={ImgSun} alt="light" />
        </button>
        <button>
          <img src={ImgMoon} alt="dark" />
        </button>
      </div>
    </header>
  );
}

export default Header;
