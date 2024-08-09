import React from 'react';
import styles from './styles.module.scss';
const CalculatorSection = () => {
    return (
        <section id='calculator' className={`${styles.calculatorSection} container`}>
            <img
                src={'/calculator/bgi-1.webp'}
                alt={'RusGumroad'}
                srcSet="/calculator/bgi-1.webp 1x, /calculator/bgi-2.webp 2x"
                loading='lazy'
                className={`${styles.background}`}
                width={225}
                height={180}
            />
            <div className={`${styles.content}`}>
                <h2 className={`heading ${styles.heading}`}>Калькулятор</h2>
                <p className={`${styles.text}`}>
                    Стоимость считается:
                    себестоимость в долларах
                    (1$ = курс ЦБ* 1.15 + 700 рублей комиссия).
                </p>

                <img
                    src={'/calculator/calculator1.webp'}
                    alt={'RusGumroad'}
                    srcSet="/calculator/calculator1.webp 1x, /calculator/calculator2.webp 2x"
                    loading='lazy'
                    className={`${styles.mainImage}`}
                    width={225}
                    height={180}
                />
            </div>
            <div className={`${styles.calculator}`}>

            </div>
        </section>
    );
};

export default CalculatorSection;