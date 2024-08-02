import React from 'react';
import Logo from "../Logo";

import styles from './Footer.module.scss'
const MainFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <Logo onClick={scrollToTop} className={styles.footerLogo}/>
            </div>
        </footer>
    );
};

export default MainFooter;