import React, { MouseEvent, useState } from 'react';
import styles from './ripple.module.scss';

interface RippleProps {
    children: React.ReactNode;
    className?: string;
}

const Ripple: React.FC<RippleProps> = ({ children, className = '',  onClick = (event = null) => {
}, }) => {
    const [ripples, setRipples] = useState<{ left: number; top: number }[]>([]);

    const addRipple = (event: MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const left = event.clientX - rect.left;
        const top = event.clientY - rect.top;
        setRipples([...ripples, { left, top }]);
        setTimeout(() => setRipples(ripples => ripples.slice(1)), 500);
    };

    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
        addRipple(event);
        onClick(event);
    }

    return (
        <div className={`${styles.rippleContainer} ${className}`} onClick={clickHandler}>
            {ripples.map((ripple, index) => (
                <span
                    key={index}
                    className={styles.ripple}
                    style={{ left: ripple.left, top: ripple.top }}
                />
            ))}
            {children}
        </div>
    );
};

export default Ripple;
