import React from 'react';
import GumroadButton from "../UI/GumroadButton/GumroadButton";
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const MainSection = () => {
    const theme = useSelector((state: RootState) => state.theme.mode);

    return (
        <div className={`${styles.container}`}>
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
            <section className={`${styles.main}`}>
                <div className={`${styles.mainText}`}>
                    Простой и удобный способ покупки продуктов <h1 className={`${styles.mainTitle}`}>Gumroad</h1> в&nbsp;России
                </div>
                <GumroadButton href={'https://gumroad.com/'}
                               revert={true}
                               className={`${styles.button} ${theme === 'light' ? styles.button_revert : ''}`}>
                    Перейти на сайт GUMROAD
                </GumroadButton>
            </section>
        </div>
    );
};

export default MainSection;