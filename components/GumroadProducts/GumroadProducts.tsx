import React, { useState } from 'react';
import styles from './styles.module.scss';
import products from "./products";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import type { productType } from "./products";
import GumroadButton from "../UI/GumroadButton/GumroadButton";

const GumroadProducts = () => {
    const [gumroadProducts] = useState<productType[]>(products);
    const theme = useSelector((state: RootState) => state.theme.mode);
    const isLight = theme === 'light';
    return (
        <section className={`${styles.products} container ${isLight ? styles.products_light : styles.products_dark}`}>
            <div className={`${styles.content}`}>
                <h2 className={`${styles.heading}`}>
                    Большой выбор цифровых продуктов и материалов не имеющих аналога
                </h2>
                <ul className={`${styles.list}`}>
                    {gumroadProducts.map(product => {
                        return (
                            <li key={product.id}>
                                <GumroadButton href={product.link} target="_blank" revert={true} rel="noopener noreferrer">
                                    {product.text}
                                </GumroadButton>
                            </li>
                        )
                    })}
                </ul>
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