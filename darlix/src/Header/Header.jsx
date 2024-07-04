import styles from './Header.module.scss';
import ImgLogo from '../assets/logo/LogoDarlix.svg';
import ImgSun from '../assets/logo/sun.svg';
import ImgMoon from '../assets/logo/moon.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={ImgLogo} alt="logo" />
        <div className={styles.logoText}>
          <a href="Home">Darlix</a>
        </div>
      </div>
      <div className={styles.line}></div>
      <nav>
        <a href="Home">Home</a>
        <a href="AboutMe">About me</a>
        <a href="Works">Works</a>
        <a href="Contacts">Contacts</a>
      </nav>
      <div className={styles.themes}>
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
