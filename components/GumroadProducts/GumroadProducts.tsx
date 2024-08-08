import React, {useState} from 'react';
import styles from './styles.module.scss';
import products from "./products";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const GumroadProducts = () => {
    const gumroadProducts = useState(products);
    const theme = useSelector((state: RootState) => state.theme.mode);
    const isLight = theme === 'light';
    return (
        <section className={`${styles.products} container ${isLight ? styles.products_light : styles.products_dark}`}>
            <div className={`${styles.content}`}>
                <h2 className={`${styles.heading}  ${isLight ? styles.heading_light : styles.heading_dark}`}>
                    Большой выбор цифровых продуктов и материалов не имеющих аналога
                </h2>
            </div>
            <div className={`${styles.imageWrap}`}>
                <Image src='/handshake.svg'
                       alt={'RusGumroad. Большой выбор цифровых продуктов и материалов не имеющих аналога'}
                       loading={'lazy'}
                       width={319.511597}
                       height={319.511108}/>
            </div>
        </section>
    );
};

export default GumroadProducts;