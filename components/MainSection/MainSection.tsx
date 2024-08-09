import React from 'react';
import GumroadButton from "../UI/GumroadButton/GumroadButton";
import styles from './styles.module.scss';
import useMobile from "../../hooks/useMobile";

const MainSection = () => {
    const isMobile = useMobile();
    return (
        <div className={`${styles.container}`}>
            <img
                src={'/mainScreen/coin1-1.webp'}
                alt={'RusGumroad'}
                srcSet="/mainScreen/coin1-1.webp 1x, /mainScreen/coin1.webp 2x"
                sizes="(max-width: 470px) 39px, (max-width: 600px) 50px, (max-width: 790px) 74.06px, 81px"
                className={`${styles.coin} ${styles.coin1}`}
                width={81}
                height={96}
            />
            <img
                src={'/mainScreen/coin2-1.webp'}
                alt={'RusGumroad'}
                srcSet="/mainScreen/coin2-1.webp 1x, /mainScreen/coin2.webp 2x"
                sizes="(max-width: 470px) 0px, (max-width: 600px) 50px, (max-width: 790px) 68.58px, 75px"
                className={`${styles.coin} ${styles.coin2}`}
                loading={isMobile ? 'lazy' : 'eager'}
                width={75}
                height={76}
            />
            <img
                src={'/mainScreen/coin3-1.webp'}
                alt={'RusGumroad'}
                srcSet="/mainScreen/coin3-1.webp 1x, /mainScreen/coin3.webp 2x"
                sizes="(max-width: 470px) 58px, (max-width: 600px) 70px, (max-width: 790px) 113.38px, 124px"
                className={`${styles.coin} ${styles.coin3}`}
                width={124}
                height={131}
            />
            <img
                src={'/mainScreen/coin4-1.webp'}
                alt={'RusGumroad'}
                srcSet="/mainScreen/coin4-1.webp 1x, /mainScreen/coin4.webp 2x"
                sizes="(max-width: 470px) 56px, (max-width: 600px) 90px, (max-width: 790px) 134.41px, 147px"
                className={`${styles.coin} ${styles.coin4}`}
                width={147}
                height={148}
            />
            <img
                src={'/mainScreen/coin5-1.webp'}
                alt={'RusGumroad'}
                srcSet="/mainScreen/coin5-1.webp 1x, /mainScreen/coin5.webp 2x"
                sizes="(max-width: 470px) 58px, (max-width: 600px) 60px, (max-width: 790px) 87.78px, 96px"
                className={`${styles.coin} ${styles.coin5}`}
                width={96}
                height={82}
            />

            <section className={`${styles.main}`}>
                <div className={`${styles.mainText}`}>
                    Простой и удобный способ покупки продуктов <h1
                    className={`${styles.mainTitle}`}>Gumroad</h1> в&nbsp;России
                </div>
                <GumroadButton href={'https://gumroad.com/'}
                               revert={true}
                               className={`${styles.button}`}>
                    Перейти на сайт GUMROAD
                </GumroadButton>
            </section>
        </div>
    );
};

export default MainSection;