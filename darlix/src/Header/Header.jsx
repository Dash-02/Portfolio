import './Header.css';
import ImgLogo from '../assets/logo/LogoDarlix.png';

function Header() {
  return (
    <header className='header'>
      <img className='logo-img' src={ImgLogo} alt="logo" />
      <div className='logo-text'>Darlix</div>
      <div className='line'></div>
      <nav>
        <a href="Home"></a>
        <a href="#AboutMe"></a>
        <a href="Works"></a>
        <a href="Contacts"></a>
      </nav>
    </header>
  );
}

export default Header;
