import React from 'react';
import Ripple from './Ripple';
import styles from './styles.module.scss';
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

const GumroadButton = ({href = '#', target = '_blank', className = '', revert = false, children}) => {
    const theme = useSelector((state: RootState) => state.theme.mode);
    const isLight = theme === 'light';

    return (
        <Ripple
            className={`${styles.button} ${className} ${revert ? styles.revert : ''} ${isLight ? styles.light : styles.dark}`}>
            <Link href={href} role={'button'} target={target} className={styles.link}>
                {children}
            </Link>
        </Ripple>
    );
};

export default GumroadButton;
