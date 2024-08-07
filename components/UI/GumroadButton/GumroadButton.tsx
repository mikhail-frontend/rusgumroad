import React from 'react';
import Ripple from './Ripple';
import styles from './styles.module.scss';
import Link from "next/link";

const GumroadButton = ({ href = '#', target = '_blank', className = '',  revert = false, children }) => {
    return (
        <Ripple className={`${styles.button} ${className} ${revert ? styles.revert : ''}`}>
            <Link href={href} role={'button'} target={target} className={styles.link}>
                {children}
            </Link>
        </Ripple>
    );
};

export default GumroadButton;
