'use client';
import styles from "./navbar.module.css";

export const NavBar = () => {
    return (
        <nav className={styles.container}>
            <h1 className={styles.title}><span>&lt;</span>ALIDEV<span>/&gt;</span></h1>
            <ul className={styles.options}>
                <li className={styles.certLink}>
                    <a href="/" className={styles.link}>
                        <img src="/certificate.png" className={styles.certImg} alt="toCertificates"/>
                        <p className={styles.linkTitle}>Certificates</p>
                    </a>
                </li>
                <li className={styles.portLink}>
                    <a href="https://portfolio-alisser2001.vercel.app/" target="_blank" className={styles.link}>
                        <img src="/portfolio.png" className={styles.portImg} alt="toPortfolio"/>
                        <p className={styles.linkTitle}>Portfolio</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}