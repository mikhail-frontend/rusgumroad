import React, {useState} from 'react';
import {useSelector} from "react-redux";
import styles from './styles.module.scss';
import {RootState} from "../../store";
import buildPrice from "../../helpers/buildPrice";
import GumroadButton from "../UI/GumroadButton/GumroadButton";
import Ripple from "../UI/GumroadButton/Ripple";

const CalculatorSection = () => {
    const {usd, eur, error} = useSelector((state: RootState) => state.currency);
    const [currency, setCurrency] = useState('USD');
    const [amount, setAmount] = useState<number>(null);
    const [activeTab, setActiveTab] = useState('calculator');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const theme = useSelector((state: RootState) => state.theme.mode);
    const isLight = theme === 'light';
    const defaultUsdRate = 100;
    const defaultEurRate = 110;
    const exchangeRate = currency === 'USD'
        ? (error ? defaultUsdRate : usd)
        : (error ? defaultEurRate : eur);

    const totalPrice = ((amount / exchangeRate) * 1.2) + 700;

    const handleCurrencyChange = (selectedCurrency: string) => {
        setCurrency(selectedCurrency);
        setIsDropdownOpen(false);
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const price = Number(event.target.value) || 0;
        setAmount(price);
    };

    const handleAmountBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        const price = Number(event.target.value) || 0;
        if(price) return;
        setAmount(null);
    }

    const setResultPrice = (price:number) => buildPrice(price)

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
                <h2 className={`heading`}>Калькулятор</h2>
                <p className={`${styles.text}`}>
                    Стоимость считается: себестоимость
                    + 700 рублей комиссия
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
            <div className={`${styles.calculatorContent} ${isLight ? styles.calculatorContent_light : styles.calculatorContent_dark}`}>
                <div className={`${styles.tabs}`}>
                    <Ripple>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'calculator' ? styles.active : ''}`}
                            onClick={() => setActiveTab('calculator')}
                        >
                            Калькулятор
                        </button>
                    </Ripple>
                    <Ripple>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'service-cost' ? styles.active : ''}`}
                            onClick={() => setActiveTab('service-cost')}
                        >
                            Стоимость услуг
                        </button>
                    </Ripple>
                </div>

                {activeTab === 'calculator' && (
                    <div className={`${styles.calculator}`}>
                        <label className={styles.label}>Стоимость продукта</label>
                        <div className={styles.inputGroup}>
                            <div className={styles.currencyIcon}>
                                {currency === 'USD' ? '$' : '€'}
                            </div>
                            <input
                                type="number"
                                value={amount}
                                onChange={handleAmountChange}
                                onBlur={handleAmountBlur}
                                className={styles.inputField}
                                placeholder="1000"
                            />
                            <div
                                className={styles.customDropdown}
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <div className={styles.dropdownSelected}>
                                    <img
                                        src={currency === 'USD' ? '/calculator/us-flag.svg' : '/calculator/eu-flag.svg'}
                                        alt={currency}
                                        className={styles.flagIcon}
                                    />
                                    {currency}
                                    <img
                                        src={'/calculator/arrow-down.svg'}
                                        alt="toggle"
                                        className={`${styles.toggleIcon} ${isDropdownOpen ? styles.rotated : ''}`}
                                    />
                                </div>
                                {isDropdownOpen && (
                                    <div className={styles.dropdownList}>
                                        <div
                                            className={styles.dropdownItem}
                                            onClick={() => handleCurrencyChange('USD')}
                                        >
                                            <img src="/calculator/us-flag.svg" alt="USD" className={styles.flagIcon}/>
                                            USD
                                        </div>
                                        <div
                                            className={styles.dropdownItem}
                                            onClick={() => handleCurrencyChange('EUR')}
                                        >
                                            <img src="/calculator/eu-flag.svg" alt="EUR" className={styles.flagIcon}/>
                                            EUR
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <label className={styles.label}>Итоговая стоимость</label>
                        <div className={styles.inputGroup}>
                            <div className={styles.currencyIcon}>₽</div>
                            <div className={styles.inputField}>
                                {setResultPrice(Number(totalPrice.toFixed(0)))}
                            </div>
                            <div className={styles.customDropdown}>
                                <img src="/calculator/ru-flag.svg" alt="RUB" className={styles.flagIcon}/> RUB
                            </div>
                        </div>
                        <GumroadButton className={styles.nextButton}
                                       onClick={() => setActiveTab('service-cost')}
                                       alwaysLight={true}
                                       revert={true}
                        >
                            Перейти к стоимости услуг
                        </GumroadButton>
                    </div>
                )}

                {activeTab === 'service-cost' && (
                    <div className={styles.calculator}>
                        <p>Здесь будет информация о стоимости услуг.</p>
                    </div>
                )}
            </div>

        </section>
    );
};

export default CalculatorSection;
