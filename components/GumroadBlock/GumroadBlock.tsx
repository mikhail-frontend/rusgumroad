import React from 'react';
import Image from "next/image";
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const GumroadBlock = () => {
    const theme = useSelector((state: RootState) => state.theme.mode);
    const isLight = theme === 'light';
    return (
        <div className={`${styles.gumroad} container ${isLight ? styles.gumroad_light : styles.gumroad_dark}`}>
            <Image src={'/gumroad.svg'} alt={'Gumroad'} width={243} height={69} className={`${styles.gumroadLogo}`}/>
            <p className={`${styles.gumroadText} ${isLight ? styles.text_light : styles.text_dark}`}>
                это платформа для продажи цифровых продуктов, которая обеспечивает удобство, безопасность&nbsp;и&nbsp;простоту
                использования. Приобретай работы, курсы, книги и многое другое, а мы поможем вам легко оплатить их&nbsp;из
                России.
            </p>
        </div>
    );
};

export default GumroadBlock;