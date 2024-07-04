import styles from './Home.module.scss';
import Palm from '../assets/img/palms.png';

function Home() {
    return (
        <section className={styles.main}>
            <img className={styles.imgPalm} src={Palm} alt="palms" />
        </section>
    );
}

export default Home;