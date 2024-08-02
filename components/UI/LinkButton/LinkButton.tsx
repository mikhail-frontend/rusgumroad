import React from 'react';
import RippleButton from "../RippledButton";
import Image from "next/image";
import styles from './LinkButton.module.scss'
type LinkButtonType = {
    to: string
    text: string
    className?: string
    target?: string
    wrapClass?: string
    onCLick?: (ev) => void
    showImage?: boolean
}
const LinkButton:React.FC<LinkButtonType> = ({text, showImage = true, to, className = '', target, wrapClass,
                                                 onCLick = (ev) => {}}) => {
    return (
        <div className={`${styles.pulsingButtonWrap} ${styles.buttonPulse} ${wrapClass || ''}`} onClick={onCLick}>
            <span className={styles.pulsing}/>
            <RippleButton to={to} className={`${styles.linkButton} ${className}`} target={target}>
                {text}
                {showImage &&        <Image src='/telegaSmall.svg'
                                            alt="RusUdemy. Udemy как купить. Udemy как оплатить российской картой."
                                            title="RusUdemy. Udemy как купить. Udemy как оплатить российской картой." width={19} height={18} priority={false}/>}
            </RippleButton>
        </div>
    );
};

export default React.memo(LinkButton);