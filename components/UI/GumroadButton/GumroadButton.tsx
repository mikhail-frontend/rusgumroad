import React from 'react';
import Ripple from './Ripple';
import styles from './styles.module.scss';

const GumroadButton = ({ href = '#', target = '_blank', className = '', children }) => {
    return (
        <Ripple className={`${styles.button} ${className}`}>
            <a href={href} role={'button'} target={target} className={styles.link}>
                {children}
            </a>
        </Ripple>
    );
};

export default GumroadButton;
