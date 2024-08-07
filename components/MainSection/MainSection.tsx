import React from 'react';
import GumroadButton from "../UI/GumroadButton/GumroadButton";
import styles from './styles.module.scss';

const MainSection = () => {
    return (
        <div className={'container'}>
            <section className={`${styles.main}`}>
                <img src={'/mainScreen/coin1.webp'} alt={'RusGumroad'}
                     className={`${styles.coin} ${styles.coin1}`}
                     width={81} height={96}/>
                <img src={'/mainScreen/coin2.webp'} alt={'RusGumroad'}
                     className={`${styles.coin} ${styles.coin2}`}
                     width={75} height={76}/>
                <img src={'/mainScreen/coin3.webp'} alt={'RusGumroad'}
                     className={`${styles.coin} ${styles.coin3}`}
                     width={124} height={131}/>
                <img src={'/mainScreen/coin4.webp'} alt={'RusGumroad'}
                     className={`${styles.coin} ${styles.coin4}`}
                     width={147} height={148}/>
                <img src={'/mainScreen/coin5.webp'} alt={'RusGumroad'}
                     className={`${styles.coin} ${styles.coin5}`}
                     width={96} height={82}/>
                <GumroadButton href={'https://gumroad.com/'} revert={true} className={`${styles.button}`}>
                    Перейти на сайт GUMROAD
                </GumroadButton>
            </section>
        </div>
    );
};

export default MainSection;