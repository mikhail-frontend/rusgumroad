import React, { useState } from 'react';
import { useSelector } from "react-redux";
import styles from './styles.module.scss';
import { RootState } from "../../store";

const CalculatorSection = () => {
    const { usd, eur, status, error } = useSelector((state: RootState) => state.currency);
    const [currency, setCurrency] = useState('USD');
    const [amount, setAmount] = useState<number>(1000);
    const [activeTab, setActiveTab] = useState('calculator');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Устанавливаем значения по умолчанию, если есть ошибка
    const defaultUsdRate = 100;
    const defaultEurRate = 110;
    const exchangeRate = currency === 'USD'
        ? (error ? defaultUsdRate : usd)
        : (error ? defaultEurRate : eur);

    const totalPrice = (exchangeRate * 1.15 * amount) + 700;

    const handleCurrencyChange = (selectedCurrency: string) => {
        setCurrency(selectedCurrency);
        setIsDropdownOpen(false);
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseFloat(event.target.value) || 0);
    };

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
                    Стоимость считается: себестоимость в долларах
                    (1$ = курс ЦБ * 1.15 + 700 рублей комиссия).
                </p>
            </div>

            <div className={`${styles.tabs}`}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'calculator' ? styles.active : ''}`}
                    onClick={() => setActiveTab('calculator')}
                >
                    Калькулятор
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'service-cost' ? styles.active : ''}`}
                    onClick={() => setActiveTab('service-cost')}
                >
                    Стоимость услуг
                </button>
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
                            className={styles.inputField}
                            placeholder="1000"
                        />
                        <div
                            className={styles.customDropdown}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <div className={styles.dropdownSelected}>
                                <img
                                    src={currency === 'USD' ? '/icons/us-flag.svg' : '/icons/eu-flag.svg'}
                                    alt={currency}
                                    className={styles.flagIcon}
                                />
                                {currency}
                                <img
                                    src={isDropdownOpen ? '/icons/arrow-up.svg' : '/icons/arrow-down.svg'}
                                    alt="toggle"
                                    className={styles.toggleIcon}
                                />
                            </div>
                            {isDropdownOpen && (
                                <div className={styles.dropdownList}>
                                    <div
                                        className={styles.dropdownItem}
                                        onClick={() => handleCurrencyChange('USD')}
                                    >
                                        <img src="/icons/us-flag.svg" alt="USD" className={styles.flagIcon} />
                                        USD
                                    </div>
                                    <div
                                        className={styles.dropdownItem}
                                        onClick={() => handleCurrencyChange('EUR')}
                                    >
                                        <img src="/icons/eu-flag.svg" alt="EUR" className={styles.flagIcon} />
                                        EUR
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <label className={styles.label}>Итоговая стоимость</label>
                    <div className={styles.resultField}>
                        <div className={styles.currencyIcon}>₽</div>
                        <div className={styles.result}>
                            {totalPrice.toFixed(2)}
                        </div>
                        <div className={styles.resultCurrency}>
                            <img src="/icons/ru-flag.svg" alt="RUB" className={styles.flagIcon} /> RUB
                        </div>
                    </div>

                    <button className={styles.nextButton} onClick={() => setActiveTab('service-cost')}>
                        Перейти к стоимости услуг
                    </button>
                </div>
            )}

            {activeTab === 'service-cost' && (
                <div className={styles.serviceCost}>
                    <p>Здесь будет информация о стоимости услуг.</p>
                </div>
            )}
        </section>
    );
};

export default CalculatorSection;
